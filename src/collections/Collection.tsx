import React, {FC, HTMLAttributes} from 'react'

import {Gallery} from '../blocks/Gallery'
import {Heading} from '../blocks/Heading'
import {Tertiary} from '../blocks/Tertiary'
import {Button} from '../Button'
import {ImageProps, Media} from '../parts/Media'

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

export interface CollectionProps extends HTMLAttributes<HTMLDivElement> {
  items?: CollectionItem[]
  datasource?: 'success-stories' | 'portfolio'
}

const SuccessStoriesCollection: FC<CollectionProps> = ({items} = {items: []}) => {
  return (
    <div className="grid gap-12 py-12 sm:grid-cols-2 sm:gap-8 sm:p-8">
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
    <div className="flex flex-wrap gap-12 py-12 sm:gap-8 sm:p-8 md:m-8">
      {items?.map((item) => (
        <div className="flex flex-col w-full md:p-8">
          <div key={item.id} className="md:flex md:gap-x-4">
            <div className="flex flex-col md:w-1/2">
              <Heading text={item.content.title} className="pb-4" />
              <p className="pb-4 text-left">{item.content.description}</p>
            </div>

            <div className="md:w-1/2">
              <Gallery images={item.content.images} />
            </div>
          </div>

          {item.content.video?.[0] && <Media media={item.content.video[0]} className="w-full rounded-xl" wrapperClassName="w-full" />}

          <Button className="mt-4" type="tertiary" link={item.url} label={`Read about ${item.content.title}`} />
        </div>
      ))}
    </div>
  )
}

export const Collection: FC<CollectionProps> = ({items, datasource} = {items: []}) => {
  if (datasource === 'success-stories') {
    return <SuccessStoriesCollection items={items} />
  }

  if (datasource === 'portfolio') {
    return <PortfolioCollection items={items} />
  }

  return null
}
