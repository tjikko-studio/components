import React, {FC, HTMLAttributes} from 'react'

import {Heading} from '../blocks/Heading'
import {Button} from '../Button'
import {ImageProps, Media} from '../parts/Media'

type CollectionItem = {
  id: string
  url: string
  content: {
    title: string
    description: string
    images: ImageProps[]
  }
}

export interface CollectionProps extends HTMLAttributes<HTMLDivElement> {
  items?: CollectionItem[]
}

export const Collection: FC<CollectionProps> = ({items} = {items: []}) => {
  return (
    <div className="flex flex-wrap m-8">
      {items?.map((item) => (
        <div key={item.id} className="flex w-full p-8 lg:w-1/2">
          <div className="flex flex-col w-1/2 mr-4">
            <Heading text={item.content.title} className="pb-4" />
            <p className="pb-4 text-left">{item.content.description}</p>
            <Button type="tertiary" link={item.url} label="Learn more" />
          </div>

          <div className="w-1/2">
            <Media media={item.content.images[0]} className="h-full rounded-xl" wrapperClassName="h-full" />
          </div>
        </div>
      ))}
    </div>
  )
}
