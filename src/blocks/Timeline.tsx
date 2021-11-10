import React from 'react'

import {ImageProps, Media} from '../parts/Media'

type TimelineItemProps = {
  header: string
  subtitle: string
  body: string
  image: ImageProps
}

const TimelineItem: React.VFC<{item: TimelineItemProps; last: boolean}> = ({item, last}) => {
  return (
    <div className="flex w-full">
      <div className="relative mt-1 mr-4 sm:mr-6">
        <div className="w-4 h-4 pt-px pr-px box-content bg-gray-800 rounded-full" />
        {!last && <div className="absolute -z-1 top-0 w-px bg-gray-500 -bottom-24 left-1/2  -ml-px " />}
      </div>
      <div className="flex flex-col sm:flex-row w-full gap-4">
        <div className="sm:w-1/3 sm:order-last">
          {item.image && (
            <Media
              media={item.image}
              autoplay={true}
              muted={true}
              controls={false}
              loop={true}
              className={'rounded-lg shadow-xl w-full h-full'}
            />
          )}
        </div>
        <div className="flex sm:w-2/3 pr-8">
          <div className="flex flex-col w-full dark:text-gray-50">
            <div className="m-0 font-bold" dangerouslySetInnerHTML={{__html: item.body}} />
            <div className="m-0 italic font-bold" dangerouslySetInnerHTML={{__html: item.subtitle}} />
            <div className="m-0" dangerouslySetInnerHTML={{__html: item.body}} />
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
    <div className="mx-auto w-full max-w-screen-md flex flex-col gap-28">
      {content?.map(({header, items}) => (
        <section>
          <h4>{header}</h4>
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
