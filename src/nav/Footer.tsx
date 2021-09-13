import React, {FC, HTMLAttributes} from 'react'
import getWidth from '../../utilities/getWidth'
import {Disclosure} from '@headlessui/react'
import MenuIcon from '/assets/icons/menu-line.svg'
import CloseIcon from '/assets/icons/close-line.svg'
import {NavItem} from './NavItem'
import {Button} from '../Button'

export interface FooterMenuType {
  label: string
  link : string
  datas: any
}

export interface LanguageType {
  current?: string | null
  content?: FooterMenuType[]
}

export interface MenuItemType {
  label: string
  link : string
  type: string
  content?: FooterMenuType[]
}

export interface NavColumn {
  layout: string
  width: string
  rtl: boolean
  mobile_position: string
  mobile_width: string
  mobile_rtl: boolean
  content: MenuItemType[]
}

export interface NavColumns {
  attrs: {no_gap: string}
  columns: NavColumn[]
}

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * menu json data same as NavItem
   */
  menuData: NavColumns[]
  

  /**
   * language list
   * Developer note: we will remove this and add it using the wip menu builder
   */
  locales?: LanguageType

  /**
   * nav background color style
   */
  styles: 'opaque' | 'transparent'

  /**
   * Set to true to have the mobile menu expanded by default
   */
  mobileExpandDefault?: boolean

  /**
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Footer: FC<FooterProps> = ({
  menuData = null,
  styles = 'opaque',
  mobileExpandDefault = false,
  className,
  locales = null,
}) => {
  const border = 'border-b border-gray-600 last:border-b-0'
  
  return (
    <div className='lg:flex flex-col bg-gray-900 text-gray-50 px-4 pb-4 sp_ace-y-12'>
      <section className={`flex items-center h-16 ${border}`}>
        <div>Company Logo</div>
      </section>
      {
        menuData.map((row, i) => {
          
          return (
            <>
              <section
                key={JSON.stringify(row.columns)}
                className={`grid grid-flow-row grid-cols-12 gap-x-4 mt-12 ${row.attrs.no_gap ? 'gap-y-6' : 'gap-y-12' }`}
              >
                { 
                  row.columns.length >=1 && row.columns.map(({content, layout, width, rtl, mobile_position, mobile_width, mobile_rtl}, i) => {
                    const contentLayout = layout === 'horizontal' ? 'flex items-start mt_-4 lg:mt-0' : 'lg:flex flex-col first:mt-0 lg:mt-0'
                    const mobilePosition = mobile_position === 'start' ? 'order-first lg:order-none' : mobile_position === 'end' ? 'order-last lg:order-none' : ''
                    const horAlign = rtl ? 'lg:justify-end' : ''
                    const horAlignMobile = mobile_rtl ? '!lg:justify-end' : ''
                    const columnsLength = content ? content.length : 0
                    return (
                      <div 
                        key={JSON.stringify(content)}
                        className={`${contentLayout} ${horAlign} ${horAlignMobile} col-span-${getWidth(mobile_width)} lg:col-span-${getWidth(width)} ${mobilePosition} `}
                      >
                        {
                          content && content.map(({label, link, type, content}, i) => {
                            const isLast = i+1 >= columnsLength ? true : false ;
                            switch (type){
                              case 'NavigationDropdownChild':
                                return <div
                                    className={`dark flex flex-col space-y-4`}
                                  >
                                    { label && <div className='fontStyle-xs uppercase text-gray-300'> {label} </div> }
                                    {
                                      content.map(({label, link}) => {
                                        return <a href={link} className='fontStyle-sm'> {label} </a>
                                      })
                                    }
                                  </div>
                                                       
                              case 'default':
                                {
                                  const Alink  = () => { return(<><a href={link} className='fontStyle-sm'> {label} </a></>)}
                                  if (layout === 'horizontal'){
                                    return isLast  ? <div><Alink /></div> : <div className='after-content after:mr-2 after:ml-2' data-content-after='-'><Alink /></div>
                                  }
                                  if (layout === 'vertical')
                                    return (
                                      <Alink />
                                    )
                                }
                              
                              case 'button':
                                return <div className='dark'><Button key={JSON.stringify([type, content, link, label])} label={label} link={link} type='primary' icon='none' size='default' forceDark={true} className='lg:ml-6 lg:first:ml-0' /></div>
                              
                              // case 'NavigationDynamicList':
                              //   if (content.datas === 'language')
                              //     return <NavItem styles='default/white' label={locales.current ? locales.current : 'English'} listnavContent={locales.content} dropdownRight={isLast} />
                            }
                          }
                        )}
                      </div>
                    )  
                  })
                }
              </section>
            </>
          )
        })
      }
    </div>
  )
  
}
