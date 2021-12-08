import React, {FC, HTMLAttributes, useState} from 'react'
import cn from 'classnames'

import CloseIcon from '/assets/icons/close-line.svg'
import MenuIcon from '/assets/icons/menu-line.svg'

import parseLink from '../../utilities/parseLink'
import {Button} from '../Button'
import {ImageProps, Media} from '../parts/Media'
import {ListNav} from './ListNav'
import {NavItem} from './NavItem'

import {MenuItemType, MenuType} from '../../shared/types'

export interface LocalesType {
  current?: string | null
  content?: MenuType[]
}

export interface NavColumn {
  mobile_layout: string
  mobile_position: string
  mobile_width: string
  content: MenuItemType[]
  id?: string
}

export interface NavColumns {
  columns: NavColumn[]
  id?: string
  attrs?: {
    className?: string
  }
}

export interface SiteNavProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * menu json data same as NavItem
   */
  menuData: NavColumns[]

  /**
   *  logo url to show
   */
  logo?: ImageProps
  homeLink?: string

  /**
   * language list
   */
  locales?: LocalesType

  /**
   * nav background color style
   */
  styles?: 'opaque' | 'transparent'

  /**
   * Open Menu text
   */
  openMenuText?: string
}

function moveElement<T>(arr: T[], idx: number, pos: 'start' | 'end'): T[] {
  const el = arr.splice(idx, 1)
  return pos === 'end' ? [...arr, ...el] : [...el, ...arr]
}

/**
 * Primary UI component for user interaction
 */
export const SiteNav: FC<SiteNavProps> = ({
  logo,
  homeLink = null,
  menuData = [],
  styles = 'opaque',
  className,
  locales = null,
  openMenuText = 'Toggle Menu'
}) => {
  const [menuOpened, setMenuOpened] = useState(false)
  /*
   *Desktop Nav
   */
  const DesktopNav = () => {
    return (
      <div className="hidden lg:block">
        {menuData.map(({columns, id, attrs}) => {
          return (
            <div
              key={id || JSON.stringify(columns)}
              className={cn([
                'flex',
                'items-center',
                'justify-between',
                'md:justify-start',
                'h-24',
                'px-10',
                styles === 'opaque' && 'bg-gray-900 text-gray-50',
                attrs?.className
              ])}
            >
              <a className="flex-auto" href={homeLink} aria-label="Back to Homepage">
                <Media media={logo} className="h-3 lg:h-4 w-auto" fit />
              </a>
              {columns.length &&
                columns.map(({content, id: columnId}) => {
                  return (
                    <div
                      key={columnId || JSON.stringify(content)}
                      className={cn([
                        'flex',
                        'flex-auto',
                        'items-center',
                        'justify-center',
                        'first:justify-start',
                        'last:justify-end',
                        'gap-x-12'
                      ])}
                    >
                      {content &&
                        content.map(({label, link, type, content: innerContent, id: innerId}) => {
                          switch (type) {
                            case 'link':
                            case 'NavigationDropdown':
                              return (
                                <NavItem
                                  key={innerId || parseLink(link).url}
                                  link={link}
                                  styles="special"
                                  label={label}
                                  listNavContent={innerContent}
                                />
                              )
                            case 'button':
                              return (
                                <Button
                                  key={innerId || parseLink(link).url}
                                  label={label}
                                  link={link}
                                  type="primary"
                                  size="default"
                                  forceDark={true}
                                />
                              )
                            case 'NavigationDynamicList':
                              const dataSource = innerContent.data_source
                              if (dataSource === 'languages') {
                                return (
                                  <NavItem
                                    key={innerId || JSON.stringify(innerContent)}
                                    styles="special"
                                    label={locales.current ? locales.current : 'English'}
                                    listNavContent={locales.content}
                                  />
                                )
                              }
                              console.error('unrecognized dataSource in SiteNav', dataSource, typeof dataSource)
                              return null
                            default:
                              console.error('Unhandled SiteNav type', type)
                              return null
                          }
                        })}
                    </div>
                  )
                })}
            </div>
          )
        })}
      </div>
    )
  }

  /*
   *Mobile Nav
   */
  const MobileNav = () => {
    const border = 'border-b border-gray-600 last:border-b-0'
    const dividerSm = 'pb-4 last:pb-0'
    const dividerMd = 'pb-8 last:pb-0'
    return (
      <div className={cn(['flex', 'lg:hidden', 'flex-col', 'bg-gray-900', 'text-gray-50', 'gap-y-8', 'px-4', menuOpened && 'pb-4'])}>
        <div className="flex justify-between items-center h-16">
          <a className="flex-auto" href={homeLink}>
            {logo ? <Media media={logo} className="h-3 lg:h-4 w-auto" fit /> : null}
          </a>
          <button
            aria-label={openMenuText}
            onClick={() => {
              setMenuOpened(!menuOpened)
            }}
          >
            <MenuIcon className={`w-auto h-5 ${menuOpened && 'hidden'}`} />
            <CloseIcon className={`w-auto h-5 ${!menuOpened && 'hidden'}`} />
          </button>
        </div>
        {menuData.map(({columns, id, attrs}) => {
          let mobileNavContent = [...columns]
          if (mobileNavContent.length) {
            mobileNavContent.forEach(({mobile_position}, idx) => {
              if (mobile_position === 'start') {
                mobileNavContent = moveElement(mobileNavContent, idx, 'start')
              }

              if (mobile_position === 'end') {
                mobileNavContent = moveElement(mobileNavContent, idx, 'end')
              }
            })
          }
          return (
            <section
              key={id || JSON.stringify(mobileNavContent)}
              className={cn('flex flex-col gap-y-6', border, dividerMd, attrs.className, !menuOpened && 'hidden')}
            >
              {mobileNavContent.length &&
                mobileNavContent.map(({content, mobile_layout, id: navContentId}) => {
                  const layout = mobile_layout === 'horizontal' ? ' justify-between items-start' : ' flex-col gap-y-4'

                  const columnsLength = content ? content.length : 0
                  return (
                    <div key={navContentId || JSON.stringify(content)} className={cn('flex', 'gap-x-6', border, dividerSm, layout)}>
                      {content &&
                        content.map(({label, link, type, content: innerContent, id: innerId}, idx) => {
                          const isLast = idx + 1 >= columnsLength
                          switch (type) {
                            case 'NavigationDropdown': {
                              return (
                                <div className={cn('dark', border, dividerSm)} key={innerId || JSON.stringify(innerContent)}>
                                  {label && (
                                    <div className="fontStyle-xl uppercase mb-3" aria-label={label}>
                                      {label}
                                    </div>
                                  )}
                                  <ListNav styles="flat" listNavContent={innerContent} />
                                </div>
                              )
                            }
                            case 'link': {
                              const {url, target} = parseLink(link)
                              return (
                                <a key={innerId || `[${label}](${link})`} target={target} href={url} className="fontStyle-xl uppercase">
                                  {label}
                                </a>
                              )
                            }
                            case 'button': {
                              return (
                                <div key={innerId || `[${label}](${link})`} className="dark">
                                  <Button label={label} link={link} type="primary" size="default" forceDark={true} />
                                </div>
                              )
                            }
                            case 'NavigationDynamicList':
                              const dataSource = innerContent.data_source
                              if (dataSource === 'languages') {
                                return (
                                  <NavItem
                                    key={innerId || JSON.stringify(innerContent)}
                                    styles="special"
                                    label={locales.current ? locales.current : 'English'}
                                    listNavContent={locales.content}
                                    dropdownRight={isLast}
                                  />
                                )
                              }
                              console.error('unrecognized dataSource in SiteNav', dataSource, typeof dataSource)
                              return null
                            default:
                              console.error('unrecognized content type in SiteNav', type)
                              return null
                          }
                        })}
                    </div>
                  )
                })}
            </section>
          )
        })}
      </div>
    )
  }

  return (
    <nav className={cn('lg:sticky lg:z-50 top-0', className)} aria-label="Main Website navigation">
      {menuData.length >= 1 && (
        <>
          <DesktopNav />
          <MobileNav />
        </>
      )}
    </nav>
  )
}
