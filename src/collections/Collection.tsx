import React, {HTMLAttributes, useState} from 'react'
import cn from 'classnames'

import categoryNameFromId from '../../utilities/categoryNameFromId'
import getComponent from '../../utilities/getComponent'
import {Card} from '../blocks/Card'
import {Gallery} from '../blocks/Gallery'
import {Heading} from '../blocks/Heading'
import {Button} from '../Button'
import {SideNav} from '../nav/SideNav'
import {ImageProps, Media} from '../parts/Media'
import {JobsCollection, JobsCollectionProps} from './collectionsLists/JobsCollection'

import {BlockProps, CategoriesType, ColumnProps} from '../../shared/types'

interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * default/horizontal (left to right) or vertical (image above)
   */
  layout?: 'horizontal' | 'vertical'

  /**
   * Image Position
   */
  imagePosition?: 'left' | 'right'

  /**
   * Background color
   */
  hasBackground?: boolean
  bgColor?: string

  /**
   * Is elevated (Will have a drop shadow)
   */
  isElevated?: boolean

  columns?: number
}

type CollectionItem = {
  id: string
  url: string
  content: {
    title: string
    description: string
    images: ImageProps[]
    video?: ImageProps[]
    category?: string
  }
  filteredOut?: boolean
}

interface CollectionItems extends BaseProps {
  items: CollectionItem[]
  link_cta: string
}

export interface CollectionProps extends BaseProps {
  header?: BlockProps[]
  templatesContent?: Record<string, ColumnProps>
  categories?: CategoriesType
  content?: CollectionItems & JobsCollectionProps
  datasource?: 'success-stories' | 'portfolio' | 'jobs'
}

let sectionClasses = [
  'grid',
  'w-full',
  'h-full',
  'max-w-screen-xl',
  'xl:mx-auto',
  'px-4',
  'sm:px-8',
  'md:px-12',
  'xl:px-0',
  'py-20',
  'sm:py-28',
  'md:py-36',
  'gap-16'
]

let contentClasses = ['grid', 'w-full', 'gap-16']

const SuccessStoriesCollection = ({
  items = null,
  link_cta,
  layout = 'horizontal',
  imagePosition = 'right',
  hasBackground = false,
  bgColor = 'unset',
  isElevated = false,
  columns = 3
}: CollectionItems) => {
  const label = link_cta ? link_cta : 'Read about {title}'

  const gridColumns = columns === 2 ? 'sm:grid-cols-2' : columns === 3 ? 'sm:grid-cols-3' : ''

  return (
    <div className={cn(contentClasses, gridColumns)}>
      {items?.map((item) => {
        return (
          <Card
            key={item.id}
            image={item.content.images?.[0]}
            title={item.content.title}
            body={item.content.description}
            layout={layout}
            imagePosition={imagePosition}
            hasBackground={hasBackground}
            bgColor={bgColor}
            isElevated={isElevated}
            buttons={[
              {
                label: label.replace('{title}', item.content.title),
                type: 'tertiary',
                link: {
                  type: 'url',
                  popup: false,
                  value: item.url
                }
              }
            ]}
          />
        )
      })}
    </div>
  )
}

const PortfolioCollection = ({items = null, link_cta}: CollectionItems) => {
  const label = link_cta ? link_cta : 'Read about {title}'
  return (
    <div className={cn(contentClasses)}>
      {items?.map((item) => {
        const ReadMoreButton = ({hideOnSm = false}) => {
          return (
            <Button
              className={`mt-4 w-fit ${hideOnSm ? 'inline-flex sm:hidden' : 'hidden sm:inline-flex'}`}
              type="tertiary"
              link={{type: 'link', value: item.url, popup: false}}
              label={label.replace('{title}', item.content.title)}
            />
          )
        }
        return item.filteredOut ? null : (
          <div key={item.id} className="flex flex-col w-full gap-6 lg:gap-4">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
              <div className="flex flex-col lg:w-1/2">
                <Heading text={item.content.title} />
                <div className="mt-2" dangerouslySetInnerHTML={{__html: item.content.description}} />

                <ReadMoreButton />
              </div>

              <div className="lg:w-1/2">
                <Gallery content={item.content.images} mobileColumns={true} />
              </div>
            </div>

            {item.content.video?.[0] && <Media media={item.content.video[0]} className="w-full rounded-xl" />}

            <ReadMoreButton hideOnSm />
          </div>
        )
      })}
    </div>
  )
}

export const Collection = (
  {
    header,
    content,
    templatesContent = {},
    categories = {},
    datasource,
    layout,
    imagePosition,
    hasBackground,
    bgColor,
    isElevated,
    columns
  }: CollectionProps = {content: null}
) => {
  const [filtered, setFilteredItems] = useState({items: content?.items, filter: null})
  sectionClasses.push('text-gray-900')
  const toComponent = getComponent(templatesContent)

  const onFilter: React.MouseEventHandler = (event) => {
    const categoryId = event.currentTarget.getAttribute('data-category-id')
    const categoryName = categoryNameFromId(categoryId)
    setFilteredItems(
      categoryName === filtered.filter
        ? {items: content.items, filter: null}
        : {
            items: content.items.map((item) => {
              return {...item, filteredOut: item.content.category.toLowerCase() !== categoryName}
            }),
            filter: categoryName
          }
    )
  }

  return (
    <section className={cn(sectionClasses)}>
      {header.length ? (
        <header>
          {header.map((block) => {
            return <div key={block.id || JSON.stringify(block.content)}>{toComponent(block)}</div>
          })}
        </header>
      ) : null}
      <div className="flex gap-32">
        {Object.keys(categories).length > 0 ? (
          <div className="sm:sticky sm:top-8 lg:top-24 xl:top-32 shrink-0">
            <SideNav items={categories} onFilter={onFilter} currentFilter={filtered.filter} />
          </div>
        ) : null}
        {datasource === 'success-stories' && content && (
          <SuccessStoriesCollection
            key={JSON.stringify(content)}
            items={filtered.items}
            link_cta={content.link_cta}
            layout={layout}
            imagePosition={imagePosition}
            hasBackground={hasBackground}
            bgColor={bgColor}
            isElevated={isElevated}
            columns={columns}
          />
        )}
        {datasource === 'portfolio' && content && (
          <PortfolioCollection key={JSON.stringify(filtered.items)} items={filtered.items} link_cta={content.link_cta} />
        )}
        {datasource === 'jobs' && content && (
          <JobsCollection
            key={JSON.stringify(content.jobs)}
            jobs={content.jobs}
            tags={content.tags}
            apply_cta={content.apply_cta}
            show_all={content.show_all}
          />
        )}
      </div>
    </section>
  )
}
