import React, {FC, HTMLAttributes} from 'react'
import getWidth from '../../utilities/getWidth'
import {MenuType} from './ListNav'
import {NavItem} from './NavItem'
import {Button} from '../Button'

export interface LocalesType {
  current?: string | null
  content?: MenuType[]
}

export interface MenuItemType {
  label: string
  link: string
  type: string

  /*
    Catherine: Because of the cases 'NavigationDropdownChild' and 'NavigationDropdownChild'
    which the content does not have the same structure as MenuType (datas)),
    I am using an any type which is not ideal I know, but i don't know how to solve this…
   */
  content?: any // MenuType[]
}

export interface NavBlock {
  layout: string
  rtl: boolean
  content: MenuItemType[]
}

export interface NavColumn {
  width: string
  blocks: NavBlock[]
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
   */
  locales?: LocalesType

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
        menuData.map((row) => {
          return (
            <>
              <section
                key={JSON.stringify(row.columns)}
                className={`grid grid-flow-row lg:grid-cols-12 gap-x-4 mt-12 ${row.attrs.no_gap ? 'gap-y-4' : 'gap-y-12'}`}
              >
                {
                  row.columns.length >= 1 && row.columns.map(({width, blocks}) => {
                    return (
                      <div
                        key={JSON.stringify(blocks)}
                        className={`lg:col-span-${getWidth(width)} h-full`}
                      >
                        {
                          blocks.length >= 1 && blocks.map(({content, layout, rtl}) => {
                            const contentLayout = layout === 'horizontal' ? 'flex lg:mt-0 items-center h-full' : 'lg:flex items-start  flex-col first:mt-0 lg:mt-0 space-y-4'
                            const justify = rtl ? 'lg:justify-end' : ''
                            const contentLength = content.length
                            return (
                              <div
                                key={JSON.stringify(content)}
                                className={`${contentLayout}  lg:col-span-${getWidth(width)} ${layout === 'horizontal' && 'flex flex-end h-full'} ${justify}`}
                              >
                                {
                                  content.length >= 1 && content.map(({label, link, type, content}, i) => {
                                    const isLast = i + 1 >= contentLength ? true : false
                                    switch (type) {
                                      case 'NavigationDropdownChild':
                                        return (
                                          <div className={`dark flex flex-col space-y-4`}>
                                            {label && <div className='fontStyle-xs uppercase text-gray-300'> {label} </div>}
                                            {
                                              content.map(({label, link}: {label:string, link: string}) => {
                                                return <a href={link} className='fontStyle-sm'> {label} </a>
                                              })
                                            }
                                          </div>
                                        )
                                      case 'default':
                                        {
                                          const Alink = () => {return (<><a href={link} className='fontStyle-sm'> {label} </a></>)}
                                          if (layout === 'horizontal') {
                                            return isLast ? <div><Alink /></div> : <div className='after-content after:mr-2 after:ml-2' data-content-after='-'><Alink /></div>
                                          }
                                          if (layout === 'vertical')
                                            return (
                                              <Alink />
                                            )
                                        }
                                      case 'button':
                                        return <div className='dark'><Button key={JSON.stringify([type, content, link, label])} label={label} link={link} type='primary' icon='none' size='default' forceDark={true} className='lg:ml-6 lg:first:ml-0' /></div>
                                      case 'NavigationDynamicList':
                                        if (content.datas === 'language')
                                          return <NavItem styles='default' popup='elevated' padding={false} label={locales.current ? locales.current : 'English'} listNavContent={locales.content} dropdownTop={true} />
                                    }
                                  })
                                }
                              </div>
                            )
                          })
                        }
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
