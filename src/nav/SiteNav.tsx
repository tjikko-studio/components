import React, {FC, HTMLAttributes} from 'react'
import {NavItem} from './NavItem'
import {ListNav} from './ListNav'
import {MenuType} from '../../shared/types'
import {Button} from '../Button'
import {Media, ImageProps} from '../parts/Media'
import {MenuItemType} from '../../shared/types'

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
}

export interface SiteNavProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * menu json data same as NavItem
   */
  // menuData: MenuItemType[]
  menuData: NavColumns[]
  /**
   *  logo url to show
   */
  logo?: ImageProps | null

  /**
   * language list
   */
  locales?: LocalesType

  /**
   * nav background color style
   */
  styles?: 'opaque' | 'transparent'

  /**
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const SiteNav: FC<SiteNavProps> = ({
  logo,
  menuData = [],
  styles = 'opaque',
  className,
  locales = null
}) => {
  const moveElement = (arr: any, x: number, pos: 'start' | 'end') => {
    let el = arr.splice(x, 1)
    return pos === 'end' ? [...arr, ...el] : [...el, ...arr]
  }

  /*
    Desktop Nav
   */
  const DesktopNav = () => {
    return (
      <div className='hidden lg:block'>
        {
          menuData.map(({columns, id}) => {
            return (
              <section
                key={id || JSON.stringify(columns)}
                className={`flex items-center justify-between md:justify-start h-24 px-10 ${(styles === 'opaque') && 'bg-gray-900 text-gray-50'} ${className}`}
              >
                <div className='flex-auto'>
                  {logo ? (
                    <Media media={logo} className={`h-3 lg:h-4 w-auto`} />
                  ) : null}
                </div>
                {columns.length >= 1 && columns.map(({content, id}) => {
                  return (
                    <div
                      key={id || JSON.stringify(content)}
                      className={`flex flex-auto items-center justify-center first:justify-start last:justify-end space-x-6`}
                    >

                      {content && content.map(({label, link, type, content, id}) => {
                        switch (type) {
                          case 'link':
                          case 'NavigationDropdown':
                            return (
                              <NavItem
                                key={id || JSON.stringify(content)}
                                link={link}
                                styles='special' label={label}
                                listNavContent={content}
                                className='ml-6 first:ml-0'
                              />
                            )
                          case 'button':
                            return (
                              <Button
                                key={id || JSON.stringify(content)}
                                label={label}
                                link={link}
                                type='primary'
                                icon='none'
                                size='default'
                                forceDark={true}
                                className='ml-6 first:ml-0'
                              />
                            )
                          case 'NavigationDynamicList':
                            return (
                              <NavItem
                                key={id || JSON.stringify(content)}
                                styles='special'
                                label={locales.current ? locales.current : 'English'}
                                listNavContent={locales.content}
                              />
                            )
                          default:
                            console.error('Unhandled SiteNav type', type)
                            return null
                        }
                      })}
                    </div>
                  )
                })}
              </section>
            )
          })
        }
      </div>
    )
  }

  /*
    Mobile Nav
   */
  const MobileNav = () => {
    const border = 'border-b border-gray-600 last:border-b-0'
    const dividerSm = `pb-4 last:pb-0`
    const dividerMd = `pb-8 last:pb-0`
    return (
      <div className='flex lg:hidden flex-col bg-gray-900 text-gray-50 px-4 pb-4 space-y-8'>
        <div className='flex justify-between items-center h-16'>
          <div>
            {logo ? (
              <Media media={logo} className={`h-3 lg:h-4 w-auto`} />
            ) : null}
          </div>
          <div>Toggle</div>
        </div>
        {
          menuData.map(({columns, id}) => {
            let mobileNavContent = [...columns]
            mobileNavContent.length >= 1 && mobileNavContent.map(({mobile_position}, i) => {
              if (mobile_position === 'start')
                mobileNavContent = moveElement(mobileNavContent, i, 'start')
              if (mobile_position === 'end')
                mobileNavContent = moveElement(mobileNavContent, i, 'end')
            })
            return (
              <section
                key={id || JSON.stringify(mobileNavContent)}
                className={`flex flex-col space-y-6 ${border} ${dividerMd}`}
              >
                {
                  mobileNavContent.length >= 1 && mobileNavContent.map(({content, mobile_layout, id}) => {
                    const layout = mobile_layout === 'horizontal' ? ' justify-between items-start' : ' flex-col space-y-4'
                    const columnsLength = content ? content.length : 0
                    return (
                      <div
                        key={id || JSON.stringify(content)}
                        className={`flex ${border} ${dividerSm} ${layout}`}
                      >
                        {
                          content && content.map(({label, link, type, content, dataSource, id}, i) => {
                            const isLast = i + 1 >= columnsLength ? true : false
                            switch (type) {
                              case 'NavigationDropdown': {
                                return (
                                  <div
                                    className={`dark ${border} ${dividerSm}`}
                                    key={id || JSON.stringify(content)}
                                  >
                                    {label && <div className='fontStyle-xl mb-3'> {label} </div>}
                                    <ListNav styles='flat' listNavContent={content} />
                                  </div>
                                )
                              }
                              case 'link': {
                                return (
                                  <a
                                    key={id || `[${label}](${link})`}
                                    href={link}
                                    className='fontStyle-xl'
                                  >
                                    {label}
                                  </a>
                                )
                              }
                              case 'button': {
                                return (
                                  <div
                                    key={id || `[${label}](${link})`}
                                    className='dark'
                                  >
                                    <Button
                                      label={label}
                                      link={link}
                                      type='primary'
                                      icon='none'
                                      size='default'
                                      forceDark={true}
                                      className='lg:ml-6 lg:first:ml-0'
                                    />
                                  </div>
                                )
                              }
                              case 'NavigationDynamicList':
                                if (dataSource === 'language') {
                                  return (
                                    <NavItem
                                      key={id || JSON.stringify(content)}
                                      styles='special'
                                      label={locales.current ? locales.current : 'English'}
                                      listNavContent={locales.content}
                                      dropdownRight={isLast}
                                    />
                                  )
                                }
                              default:
                                return null
                            }
                          }
                          )}
                      </div>
                    )
                  })
                }
              </section>
            )
          })
        }
      </div>
    )
  }

  return (
    <nav>
      {menuData.length >= 1 &&
        <>
          <DesktopNav />
          <MobileNav />
        </>
      }
    </nav>
  )
}
