import React from 'react'
import cn from 'classnames'

import {Heading} from '../blocks/Heading'
import {ImageProps, Media} from '../parts/Media'

type TimelineItemProps = {
  title?: string
  subtitle?: string
  body?: string
  image?: ImageProps
}

const TimelineItem: React.VFC<{item: TimelineItemProps; last: boolean}> = ({item, last}) => {
  return (
    <div className="flex w-full">
      <div className="relative mr-4 sm:mr-6">
        <div className="w-4 h-4 pt-px pr-px box-content bg-gray-700 rounded-full relative z-10" />
        {!last && <div className="absolute top-0 w-px bg-gray-400 -bottom-24 left-1/2 -ml-px" />}
      </div>
      <div className={cn('flex w-full gap-4', {'flex-col sm:flex-row': item?.image})}>
        {item?.image && (
          <div className="sm:w-1/2 sm:order-last">
            <Media
              media={item.image}
              autoplay={true}
              muted={true}
              controls={false}
              loop={true}
              className={'rounded-lg shadow-2xl w-full h-full'}
              ratio="16/9"
            />
          </div>
        )}
        <div className={cn('flex pr-8', {'sm:w-1/2 w-full': item?.image})}>
          <div className="flex flex-col w-full dark:text-gray-50">
            {item.title && <Heading level="h4" text={item.title} className="-mt-0.5" />}
            {item.subtitle && <p className="fontStyle-sm uppercase mt-1.5 first:mt-0">{item.subtitle}</p>}
            {item.body && <div className="mt-2 first:-mt-1 text-gray-700" dangerouslySetInnerHTML={{__html: item.body}} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export type TimelineProps = {
  content: {
    header: string
    items: TimelineItemProps[]
  }[]
}

export const Timeline: React.FC<TimelineProps> = ({content = []}) => {
  return (
    <div className="mx-auto w-full max-w-screen-lg flex flex-col gap-28">
      {content?.map(({header, items}) => (
        <section key={header || JSON.stringify(items)}>
          {header && <Heading level="h3" text={header} />}
          <div className="flex flex-col items-center gap-20 pt-12">
            {items?.map((item, idx) => (
              <TimelineItem key={idx} last={idx + 1 === items.length} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
