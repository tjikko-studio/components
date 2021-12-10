import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import getComponent from '../../utilities/getComponent'
import {Card} from '../blocks/Card'
import {Gallery} from '../blocks/Gallery'
import {Heading} from '../blocks/Heading'
import {Button} from '../Button'
import {ImageProps, Media} from '../parts/Media'
import {JobsCollection, JobsCollectionProps} from './collectionsLists/JobsCollection'

import {BlockProps, ColumnProps} from '../../shared/types'

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

  /**
   * Is elevated (Will have a drop shadow)
   */
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
  }
}

interface CollectionItems extends BaseProps {
  items: CollectionItem[]
  link_cta: string
}

export interface CollectionProps extends BaseProps {
  header?: BlockProps[]
  templatesContent?: Record<string, ColumnProps>
  content?: CollectionItems & JobsCollectionProps
  datasource?: 'success-stories' | 'portfolio' | 'jobs'
}

let sectionClasses = [
  'grid',
  'text-gray-900',
  'dark:text-gray-50',
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

let contentClasses = ['grid', 'w-full', 'px-4', 'gap-16']

const SuccessStoriesCollection: FC<CollectionItems> = ({
  items = null,
  link_cta,
  layout = 'horizontal',
  imagePosition = 'right',
  hasBackground = false,
  bgColor,
  isElevated = false,
  columns = 3
}) => {
  const label = link_cta ? link_cta : 'Read about {title}'

  const gridColumns = columns === 2 ? 'sm:grid-cols-2' : columns === 3 ? 'sm:grid-cols-3' : ''

  return (
    <div className={cn(contentClasses, gridColumns)}>
      {items?.map((item) => (
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
                type: 'page',
                popup: false,
                value: item.url
              }
            }
          ]}
        />
      ))}
    </div>
  )
}

const PortfolioCollection: FC<CollectionItems> = ({items = null, link_cta}) => {
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
        return (
          <div key={item.id} className="flex flex-col w-full gap-6 lg:gap-4">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
              <div className="flex flex-col lg:w-1/2">
                <Heading text={item.content.title} />
                <p className="mt-2">{item.content.description}</p>

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

export const Collection: FC<CollectionProps> = (
  {header, content, templatesContent = {}, datasource, layout, imagePosition, hasBackground, bgColor, isElevated, columns} = {content: null}
) => {
  const toComponent = getComponent(templatesContent)
  return (
    <section className={cn(sectionClasses)}>
      {header.length ? (
        <header>
          {header.map((block) => {
            return <div key={JSON.stringify(block.content)}>{toComponent(block)}</div>
          })}
        </header>
      ) : null}
      {datasource === 'success-stories' && content && (
        <SuccessStoriesCollection
          key={JSON.stringify(content)}
          items={content.items}
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
        <PortfolioCollection key={JSON.stringify(content.items)} items={content.items} link_cta={content.link_cta} />
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
    </section>
  )
}
