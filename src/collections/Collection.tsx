import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import {Gallery} from '../blocks/Gallery'
import {Heading} from '../blocks/Heading'
import {Primary} from '../blocks/Primary'
import {Button} from '../Button'
import {ImageProps, Media} from '../parts/Media'
import {JobItem, JobsCollection, JobsTags} from './collectionsLists/JobsCollection'

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

type JobItems = {
  jobs: JobItem[]
  tags: JobsTags[]
}

export interface CollectionProps extends HTMLAttributes<HTMLDivElement> {
  items?: CollectionItem[] & JobItems
  datasource?: 'success-stories' | 'portfolio' | 'jobs'
}

let classes = [
  'grid',
  'text-gray-900',
  'dark:text-gray-50',
  'w-full',
  'h-full',
  'max-w-screen-xl',
  'mx-auto',
  'px-4',
  'sm:px-8',
  'md:px-12',
  'xl:px-0',
  'py-20',
  'sm:py-28',
  'md:py-36',
  'gap-16'
]

const SuccessStoriesCollection: FC<CollectionProps> = ({items} = {items: null}) => {
  classes.push('sm:grid-cols-2')
  return (
    <section className={cn(classes)}>
      {items?.map((item) => (
        <>
          <Primary
            key={item.id}
            image={item.content.images?.[0]}
            imagePosition="right"
            title={item.content.title}
            body={item.content.description}
            textPositionVertical="top"
            textSize="small"
            buttons={[
              {
                label: `Read about ${item.content.title}`,
                type: 'tertiary',
                link: {
                  type: 'page',
                  popup: false,
                  value: item.url
                }
              }
            ]}
          />
        </>
      ))}
    </section>
  )
}

const PortfolioCollection: FC<CollectionProps> = ({items}) => {
  return (
    <section className={cn(classes)}>
      {items?.map((item) => {
        const ReadMoreButton = ({hideOnSm = false}) => {
          return (
            <Button
              className={`mt-4 w-fit ${hideOnSm ? 'inline-flex sm:hidden' : 'hidden sm:inline-flex'}`}
              type="tertiary"
              link={{type: 'link', value: item.url, popup: false}}
              label={`Read about ${item.content.title}`}
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
    </section>
  )
}

export const Collection: FC<CollectionProps> = ({items, datasource} = {items: null}) => {
  if (datasource === 'success-stories') {
    return <SuccessStoriesCollection items={items} />
  }

  if (datasource === 'portfolio') {
    return <PortfolioCollection items={items} />
  }

  if (datasource === 'jobs') {
    console.log(items)
    return <JobsCollection content={items} />
  }

  return null
}
