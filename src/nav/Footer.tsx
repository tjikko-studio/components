/* eslint-disable no-magic-numbers */
// eslint-disable-next-line no-use-before-define
import React, {FC, HTMLAttributes} from 'react'
import getWidth from '../../utilities/getWidth'
import {NavItem} from './NavItem'
import {Button} from '../Button'
import {Media, ImageProps} from '../parts/Media'
import {MenuType, MenuItemType} from '../../shared/types'

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
  attrs: {'no_gap': string}
  columns: NavColumn[]
}

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * menu json data same as NavItem
   */
  menuData: NavColumns[]

  /**
   *  logo url to show
   */
  logo?: ImageProps | null

  /**
   * language list
   */
  locales?: LocalesType
}

/**
 * Primary UI component for user interaction
 */
export const Footer: FC<FooterProps> = ({
  logo,
  menuData = [],
  locales = null
}) => {
  const border = 'border-b border-gray-600 last:border-b-0'

  return (
    <div className={[
      'lg:flex',
      'flex-col',
      'bg-gray-900',
      'text-gray-50',
      'px-4',
      'pb-4',
      'sp_ace-y-12'
    ].join('')}>
      {logo ? (
        <section className={`flex items-center h-16 ${border}`}>
          <Media media={logo} />
        </section>
      ) : null}
      {menuData.map(({id, columns, attrs}) => {
        return (
          <section
            key={id || JSON.stringify(columns)}
            className={[
              'grid',
              'grid-flow-row',
              'lg:grid-cols-12',
              'gap-x-4',
              'mt-12',
              attrs.no_gap ? 'gap-y-4' : 'gap-y-12'
            ].join(' ')}
          >
            {columns.length && columns.map(({width, blocks, id: columnId}) => {
              return (
                <div
                  key={columnId || JSON.stringify(blocks)}
                  className={`lg:col-span-${getWidth(width)} h-full`}
                >
                  {blocks.length >= 1 && blocks.map(
                    ({content, layout, rtl, id: blockId}) => {
                      const contentLayout = layout === 'horizontal'
                        ? ['flex', 'lg:mt-0', 'items-center', 'h-full']
                        : [
                          'lg:flex',
                          'items-start',
                          'flex-col',
                          'first:mt-0',
                          'lg:mt-0',
                          'space-y-4'
                        ]
                      const justify = rtl ? 'lg:justify-end' : ''
                      const contentLength = content.length
                      return (
                        <div
                          key={blockId || JSON.stringify(content)}
                          className={[
                            'contentLayout',
                            `lg:col-span-${getWidth(width)}`,
                            layout === 'horizontal'
                              ? 'flex flex-end h-full'
                              : '',
                            justify
                          ].join(' ')}
                        >
                          {content.length && content.map(({
                            label,
                            link,
                            type,
                            content: innerContent,
                            dataSource,
                            id: contentId
                          }, idx) => {
                            return (
                              <div
                                key={contentId || JSON.stringify(innerContent)}
                              >{(() => {
                                  switch (type) {
                                  case 'NavigationDropdownChild':
                                    return (
                                      <div
                                        className={[
                                          'dark',
                                          'flex',
                                          'flex-col',
                                          'space-y-4'
                                        ].join(' ')}>
                                        {label && (
                                          <div
                                            className={[
                                              'fontStyle-xs',
                                              'uppercase',
                                              'text-gray-300'
                                            ].join(' ')}
                                          >
                                            {label}
                                          </div>
                                        )}
                                        {
                                          content.map(({
                                            label: innerLabel,
                                            link: innerLink
                                          }) => {
                                            return (
                                              <a
                                                key={`${
                                                  innerLabel
                                                }${
                                                  innerLink
                                                }`}
                                                href={innerLink}
                                                className='fontStyle-sm'>
                                                {label}
                                              </a>
                                            )
                                          })
                                        }
                                      </div>
                                    )
                                  case 'link': {
                                    const Alink = () => {
                                      return (
                                        <a
                                          href={link}
                                          className='fontStyle-sm'
                                        >
                                          {label}
                                        </a>
                                      )
                                    }
                                    if (layout === 'horizontal') {
                                      const lClass = (idx + 1 < contentLength)
                                        ? 'after-content after:mr-2 after:ml-2'
                                        : ''
                                      return (
                                        <div
                                          className={lClass}
                                          data-content-after='-'
                                        >
                                          <Alink />
                                        </div>
                                      )
                                    }
                                    if (layout === 'vertical') {
                                      return (
                                        <Alink />
                                      )
                                    }
                                    return null
                                  }
                                  case 'button':
                                    return (
                                      <div className='dark'>
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
                                  case 'NavigationDynamicList':
                                    if (dataSource === 'language') {
                                      return (
                                        <NavItem
                                          styles='default'
                                          popup='elevated'
                                          padding={false}
                                          label={locales.current
                                            ? locales.current
                                            : 'English'
                                          }
                                          listNavContent={locales.content}
                                          dropdownTop={true}
                                        />
                                      )
                                    }
                                    console.error(
                                      'unrecognized dataSource',
                                      dataSource,
                                      typeof dataSource
                                    )
                                    return null
                                  default:
                                    console.error(
                                      'Unrecognized footer type',
                                      type
                                    )
                                    return null
                                  }
                                })()
                                }</div>
                            )
                          })}
                        </div>
                      )
                    })
                  }
                </div>
              )
            })}
          </section>
        )
      })}
    </div>
  )
}
