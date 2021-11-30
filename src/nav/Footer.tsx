import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import getWidth from '../../utilities/getWidth'
import parseLink from '../../utilities/parseLink'
import {Button} from '../Button'
import {Media} from '../parts/Media'
import {NavItem} from './NavItem'

import {MenuItemType, MenuType} from '../../shared/types'

export interface LocalesType {
  current?: string | null
  content?: MenuType[]
}

export interface NavBlock {
  id?: string
  layout: string
  rtl: boolean
  content: MenuItemType[]
}

export interface NavColumn {
  id?: string
  width: string
  blocks: NavBlock[]
}

export interface NavColumns {
  id?: string
  attrs?: {
    className?: string
  }
  columns: NavColumn[]
}

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * menu json data same as NavItem
   */
  menuData: NavColumns[]
  homeLink?: string

  /**
   * language list
   */
  locales?: LocalesType
}

/**
 * Primary UI component for user interaction
 */
export const Footer: FC<FooterProps> = ({menuData = [], locales = null, homeLink = null, className}) => {
  const border = 'border-b border-gray-600 pb-12 last:border-b-0'

  return (
    <footer className={cn(['lg:flex', 'flex-col', 'bg-gray-800', 'text-gray-50', 'px-8', className])}>
      <nav className="w-full max-w-screen-xl mx-auto rounded-lg drop-shadow-lg">
        {menuData.map(({id, columns, attrs}) => {
          return (
            <section
              key={id || JSON.stringify(columns)}
              // eslint-disable-next-line prettier/prettier
              className={cn([
                'grid',
                'grid-flow-row',
                'lg:grid-cols-12',
                'gap-x-4',
                'gap-y-10',
                'pt-12',
                attrs?.className,
                border
              ])}
            >
              {columns.length &&
                columns.map(({width = '1/1', blocks, id: columnId}) => {
                  return (
                    <div key={columnId || JSON.stringify(blocks)} className={`lg:col-span-${getWidth(width)} lg:h-full`}>
                      {blocks.length >= 1 &&
                        blocks.map(({content, layout, rtl, id: blockId}) => {
                          const contentLayout =
                            layout === 'horizontal'
                              ? ['flex', 'lg:mt-0', 'items-center']
                              : ['lg:flex', 'items-start', 'flex-col', 'first:mt-0', 'lg:mt-0', 'gap-y-4']
                          const justify = rtl ? 'lg:justify-end' : ''
                          const contentLength = content.length
                          return (
                            <div
                              key={blockId || JSON.stringify(content)}
                              className={cn([
                                ...contentLayout,
                                `lg:col-span-${getWidth(width)}`,
                                layout === 'horizontal' && 'flex-end lg:h-full',
                                justify
                              ])}
                            >
                              {content.length &&
                                content.map(({label, link, type, content: innerContent, id: contentId}, idx) => {
                                  return (
                                    <div key={contentId || JSON.stringify(innerContent)}>
                                      {(() => {
                                        switch (type) {
                                          case 'NavigationDropdownChild':
                                            return (
                                              <div className={cn(['dark', 'flex', 'flex-col', 'gap-y-4'])} aria-label={label}>
                                                {label && (
                                                  <h3 className={cn(['fontStyle-xs', 'uppercase', 'strong', 'text-gray-300'])}>{label}</h3>
                                                )}
                                                {innerContent.map(({label: innerLabel, link: innerLink}) => {
                                                  const {url, target} = parseLink(innerLink)
                                                  return (
                                                    <a key={`${innerLabel}${url}`} href={url} target={target} className="fontStyle-sm">
                                                      {innerLabel}
                                                    </a>
                                                  )
                                                })}
                                              </div>
                                            )
                                          case 'link': {
                                            const Alink = () => {
                                              const {url, target} = parseLink(link)
                                              return (
                                                <a href={url} target={target} className="fontStyle-sm">
                                                  {label}
                                                </a>
                                              )
                                            }
                                            if (layout === 'horizontal') {
                                              const lClass = idx + 1 < contentLength ? 'after-content after:mr-2 after:ml-2' : ''
                                              return (
                                                <div className={lClass} data-content-after="-">
                                                  <Alink />
                                                </div>
                                              )
                                            }
                                            if (layout === 'vertical') {
                                              return <Alink />
                                            }
                                            return null
                                          }
                                          case 'button':
                                            return (
                                              <div className="dark">
                                                <Button
                                                  label={label}
                                                  link={link}
                                                  type="primary"
                                                  size="default"
                                                  forceDark={true}
                                                  className="lg:ml-6 lg:first:ml-0"
                                                />
                                              </div>
                                            )
                                          case 'NavigationDynamicList':
                                            const dataSource = innerContent.data_source
                                            if (dataSource === 'languages') {
                                              return (
                                                <NavItem
                                                  styles="default"
                                                  popup="elevated"
                                                  padding={false}
                                                  label={locales.current ? locales.current : 'English'}
                                                  listNavContent={locales.content}
                                                  dropdownTop={true}
                                                />
                                              )
                                            }
                                            console.error('unrecognized dataSource in Footer', dataSource, typeof dataSource)
                                            return null
                                          case 'NavigationLogo':
                                            return innerContent ? (
                                              <a href={homeLink}>
                                                <Media media={innerContent?.image ? innerContent.image : null} className="h-8 w-auto" fit />
                                              </a>
                                            ) : null
                                          default:
                                            console.error('Unrecognized content type in footer', type)
                                            return null
                                        }
                                      })()}
                                    </div>
                                  )
                                })}
                            </div>
                          )
                        })}
                    </div>
                  )
                })}
            </section>
          )
        })}
      </nav>
    </footer>
  )
}
