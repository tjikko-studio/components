import React, {FC, HTMLAttributes} from 'react'

import {Gallery} from '../blocks/Gallery'
import {Heading} from '../blocks/Heading'
import {Tertiary} from '../blocks/Tertiary'
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

const SuccessStoriesCollection: FC<CollectionProps> = ({items} = {items: null}) => {
  return (
    <div className="grid gap-8 py-8 px-4 sm:grid-cols-2 sm:gap-8 sm:p-8">
      {items?.map((item) => (
        <Tertiary
          key={item.id}
          image={item.content.images[0]}
          imagePosition="right"
          title={item.content.title}
          body={item.content.description}
        />
      ))}
    </div>
  )
}

const PortfolioCollection: FC<CollectionProps> = ({items}) => {
  return (
    <div className="flex flex-wrap gap-16 py-12 px-4 sm:gap-8 sm:p-8 lg:m-8">
      {items?.map((item) => (
        <div key={item.id} className="flex flex-col w-full lg:p-8 jus">
          <div className="lg:flex lg:gap-x-4">
            <div className="flex flex-col lg:w-1/2">
              <Heading text={item.content.title} className="pb-4" />
              <p className="pb-4 text-left">{item.content.description}</p>
            </div>

            <div className="lg:w-1/2">
              <Gallery images={item.content.images} mobileColumns={true} />
            </div>
          </div>

          {item.content.video?.[0] && <Media media={item.content.video[0]} className="w-full rounded-xl" wrapperClassName="w-full" />}

          <Button className="mt-4 w-fit" type="tertiary" link={item.url} label={`Read about ${item.content.title}`} />
        </div>
      ))}
    </div>
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
