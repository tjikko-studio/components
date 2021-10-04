// eslint-disable-next-line no-use-before-define
import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import {NavItem} from './NavItem'
import {ListNav} from './ListNav'
import {MenuType, MenuItemType} from '../../shared/types'
import {Button} from '../Button'
import {Media, ImageProps} from '../parts/Media'

export interface LocalesType {
  current?: string | null
  content?: MenuType[]
}

export interface NavColumn {
  // eslint-disable-next-line camelcase
  mobile_layout: string
  // eslint-disable-next-line camelcase
  mobile_position: string
  // eslint-disable-next-line camelcase
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
   * className override
   */
  className?: string
  openMenuText?: string
}

function moveElement<T> (arr: T[], idx: number, pos: 'start' | 'end'): T[] {
  // eslint-disable-next-line no-magic-numbers
  const el = arr.splice(idx, 1)
  return pos === 'end' ? [...arr, ...el] : [...el, ...arr]
}

/**
 * Primary UI component for user interaction
 */
export const SiteNav: FC<SiteNavProps> = ({
  logo,
  menuData = [],
  styles = 'opaque',
  className,
  locales = null,
  openMenuText = 'Open main menu'
}) => {
  /*
   *Desktop Nav
   */
  const DesktopNav = () => {
    return (
      <div className='hidden lg:block'>
        {
          menuData.map(({columns, id}) => {
            return (
              <section
                key={id || JSON.stringify(columns)}
                className={cn([
                  'flex',
                  'items-center',
                  'justify-between',
                  'md:justify-start',
                  'h-24',
                  'px-10',
                  (styles === 'opaque')
                    && 'bg-gray-900 text-gray-50',
                  className
                ])}
              >
                <div className='flex-auto'>
                  {logo ? (
                    <Media media={logo} className={'h-3 lg:h-4 w-auto'} />
                  ) : null}
                </div>
                {columns.length && columns.map(({content, id: columnId}) => {
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
                        'space-x-6'
                      ])}
                    >
                      {content
                        && content.map(({
                          label,
                          link,
                          type,
                          content: innerContent,
                          id: innerId
                        }) => {
                          switch (type) {
                          case 'link':
                          case 'NavigationDropdown':
                            return (
                              <NavItem
                                key={innerId || JSON.stringify(innerContent)}
                                link={link}
                                styles='special'
                                label={label}
                                listNavContent={innerContent}
                                className='ml-6 first:ml-0'
                              />
                            )
                          case 'button':
                            return (
                              <Button
                                key={innerId || JSON.stringify(innerContent)}
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
                                key={innerId || JSON.stringify(innerContent)}
                                styles='special'
                                label={locales.current
                                  ? locales.current
                                  : 'English'}
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
   *Mobile Nav
   */
  const MobileNav = () => {
    const border = 'border-b border-gray-600 last:border-b-0'
    const dividerSm = 'pb-4 last:pb-0'
    const dividerMd = 'pb-8 last:pb-0'
    return (
      <div className={cn([
        'flex',
        'lg:hidden',
        'flex-col',
        'bg-gray-900',
        'text-gray-50',
        'px-4',
        'pb-4',
        'space-y-8'
      ])}>
        <div className='flex justify-between items-center h-16'>
          <div>
            {logo ? (
              <Media media={logo} className={'h-3 lg:h-4 w-auto'} />
            ) : null}
          </div>
          <div>{openMenuText}</div>
        </div>
        {
          menuData.map(({columns, id}) => {
            let mobileNavContent = [...columns]
            if (mobileNavContent.length) {
              // eslint-disable-next-line camelcase
              mobileNavContent.forEach(({mobile_position}, idx) => {
                // eslint-disable-next-line camelcase
                if (mobile_position === 'start') {
                  mobileNavContent = moveElement(mobileNavContent, idx, 'start')
                }
                // eslint-disable-next-line camelcase
                if (mobile_position === 'end') {
                  mobileNavContent = moveElement(mobileNavContent, idx, 'end')
                }
              })
            }
            return (
              <section
                key={id || JSON.stringify(mobileNavContent)}
                className={cn('flex flex-col space-y-6', border, dividerMd)}
              >
                {
                  mobileNavContent.length
                    // eslint-disable-next-line camelcase
                    && mobileNavContent.map(
                      // eslint-disable-next-line camelcase
                      ({content, mobile_layout, id: navContentId}) => {
                        // eslint-disable-next-line camelcase
                        const layout = mobile_layout === 'horizontal'
                          ? ' justify-between items-start'
                          : ' flex-col space-y-4'
                        // eslint-disable-next-line no-magic-numbers
                        const columnsLength = content ? content.length : 0
                        return (
                          <div
                            key={navContentId || JSON.stringify(content)}
                            className={cn('flex', border, dividerSm, layout)}
                          >
                            {
                              content && content.map(({
                                label,
                                link,
                                type,
                                content: innerContent,
                                dataSource,
                                id: innerId
                              }, idx) => {
                                // eslint-disable-next-line no-magic-numbers
                                const isLast = idx + 1 >= columnsLength
                                switch (type) {
                                case 'NavigationDropdown': {
                                  return (
                                    <div
                                      className={cn('dark', border, dividerSm)}
                                      key={innerId
                                        || JSON.stringify(innerContent)}
                                    >
                                      {label
                                        && <div className='fontStyle-xl mb-3'>
                                          {label}
                                        </div>}
                                      <ListNav
                                        styles='flat'
                                        listNavContent={innerContent}
                                      />
                                    </div>
                                  )
                                }
                                case 'link': {
                                  return (
                                    <a
                                      key={innerId || `[${label}](${link})`}
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
                                      key={innerId || `[${label}](${link})`}
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
                                        key={innerId
                                          || JSON.stringify(innerContent)}
                                        styles='special'
                                        label={locales.current
                                          ? locales.current
                                          : 'English'}
                                        listNavContent={locales.content}
                                        dropdownRight={isLast}
                                      />
                                    )
                                  }
                                  return null
                                default:
                                  return null
                                }
                              }
                              )}
                          </div>
                        )
                      }
                    )
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
      {/* eslint-disable-next-line no-magic-numbers */}
      {menuData.length >= 1 &&
        <>
          <DesktopNav />
          <MobileNav />
        </>
      }
    </nav>
  )
}
