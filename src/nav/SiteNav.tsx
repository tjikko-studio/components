import React, {FC, HTMLAttributes} from 'react'
import getWidth from '../../utilities/getWidth'
import {Disclosure} from '@headlessui/react'
import CompanyLogo from '/assets/images/company_logo_placeholder.svg'
import MenuIcon from '/assets/icons/menu-line.svg'
import CloseIcon from '/assets/icons/close-line.svg'
import {NavItem} from './NavItem'
import {MobileMenu} from './MobileMenu'
import {MenuType} from './ListNav'
import {Button} from '../Button'

export interface LanguageType {
  current?: string | null
  content?: MenuType[]
}

export interface MenuItemType {
  label: string
  link : string
  type: string
  content?: MenuType[]
}

export interface NavColumn {
  width: string
  content: MenuItemType[]
}

export interface NavColumns {
  columns: NavColumn[]
}

export interface SiteNavProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * menu json data same as NavItem
   */
  menuData: NavColumns[]
  

  /**
   * Demo Button constants
   * Developer note: we will remove this and add it using the wip menu builder
   */
  demoButtonText?: string
  demoUrl?: string

  /**
   * language list
   * Developer note: we will remove this and add it using the wip menu builder
   */
  languageList?: LanguageType

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
export const SiteNav: FC<SiteNavProps> = ({
  menuData = null,
  styles = 'opaque',
  mobileExpandDefault = false,
  className,
  // demoButtonText = 'Free Demo',
  // demoUrl = '#',
  // languageList = {},
}) => {
  return (
    <nav>
      { menuData.length >=1 && menuData.map(row => {
          return (
            <section
              key={JSON.stringify(row.columns)}
              className={`flex items-center justify-between md:justify-start h-16 lg:h-24 px-6 lg:px-10 ${(styles === 'opaque') && 'bg-gray-900'} ${className}`}
            >
              { row.columns.length >=1 && row.columns.map(({width, content}) => {
                return (
                  <div 
                    key={JSON.stringify(content)}
                    className={`hidden lg:flex lg:flex-auto items-center justify-center first:justify-start last:justify-end `}
                  >
                    { content && content.map(({label, link, type, content}) => {
                      switch (type){
                        case 'default':
                        case 'NavigationDropdown':
                          return <NavItem key={JSON.stringify([type, content, link, label])} link={link} styles='default/white' label={label} listnavContent={content} className='lg:ml-6 lg:first:ml-0' />
                        case 'button':
                          return <Button key={JSON.stringify([type, content, link, label])} label={label} link={link} type='primary' icon='none' size='default' forceDark={true} className='lg:ml-6 lg:first:ml-0' />
                      }
                    })}
                  </div>
                )    
              })}
            </section>
          )
        })
      }
    </nav>
  )

  /* return (
    <>
      <div
        className={`flex items-center justify-between md:justify-Start h-16 lg:h-24 px-6 lg:px-10 ${(styles === 'opaque') && 'bg-gray-900'} ${className}`}
      >
        <CompanyLogo
          width='269px'
          height='20px'
          className='h-3 lg:h-4 text-gray-50 w-auto'
        />
        <div
          className='hidden lg:flex m-auto items-center lg:space-x-6'
        >
          {
            menuData.map((menuitem, index) => {
              return (
                <NavItem
                  key={index}
                  link={menuitem.label ? menuitem.label : ''}
                  styles='default/white'
                  label={menuitem.label}
                  content={menuitem.content}
                />
              )
            })
          }
        </div>
        <div
          className='hidden lg:flex items-center space-x-6'
        >
          <Button
            label={demoButtonText}
            link={demoUrl}
            type='primary'
            icon='none'
            size='default'
            forceDark={true}
          />
          <NavItem
            styles='default/white'
            label={languageList.current ? languageList.current : 'En'}
            content={languageList.content}
          />
        </div>
        <Disclosure as='nav'
          className='bg-transparent'
        >
          <div className='lg:hidden'>
            <button
              className='bg-transparent inline-flex items-center justify-center text-gray-300 '
              onClick={() => setMobileExpand(!mobileExpand)}
            >
              <span className='sr-only'>Open main menu</span>
              {mobileExpand ? (
                <CloseIcon
                  className='tw-6 h-6'
                />
              ) : (
                <MenuIcon
                  className={`h-6 w-6`}
                />
              )}
            </button>
          </div>
        </Disclosure>
      </div>
      {(mobileExpand) ? (
        <MobileMenu
          demoButtonText={demoButtonText}
          demoUrl={demoUrl}
          menuData={menuData}
          styles={styles}
          languageList={languageList}
        />
      ) : ''}
    </>
  ) */
}
