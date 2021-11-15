import classNames from 'classnames'
import React, {FC, HTMLAttributes} from 'react'

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
  'gap-16',
  'sm:gap-8'
]

const SuccessStoriesCollection: FC<CollectionProps> = ({items} = {items: null}) => {
  classes.push('sm:grid-cols-2')
  return (
    <section className={classNames(classes)}>
      {items?.map((item) => (
        <>
          <Primary
            key={item.id}
            image={item.content.images?.[0]}
            imagePosition="right"
            title={item.content.title}
            body={item.content.description}
            //link={{type: 'link', value: item.url, popup: false}}
            //label={`Read about ${item.content.title}`}
          />
        </>
      ))}
    </section>
  )
}

const PortfolioCollection: FC<CollectionProps> = ({items}) => {
  return (
    <section className={classNames(classes)}>
      {items?.map((item) => (
        <div key={item.id} className="flex flex-col w-full lg:p-8">
          <div className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-6">
            <div className="flex flex-col lg:w-1/2">
              <Heading text={item.content.title} />
              <p className="mt-2">{item.content.description}</p>

              <Button
                className="mt-4 w-fit hidden sm:block"
                type="tertiary"
                link={{type: 'link', value: item.url, popup: false}}
                label={`Read about ${item.content.title}`}
              />

            </div>

            <div className="lg:w-1/2">
              <Gallery images={item.content.images} mobileColumns={true} />
            </div>
          </div>

          {item.content.video?.[0] && <Media media={item.content.video[0]} className="w-full rounded-xl" wrapperClassName="w-full" />}

          <Button
            className="mt-4 w-fit block sm:hidden"
            type="tertiary"
            link={{type: 'link', value: item.url, popup: false}}
            label={`Read about ${item.content.title}`}
          />
        </div>
      ))}
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
    return <JobsCollection content={items} />
  }

  return null
}
