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
    <div className="flex w-1/2 pt-12 pb-24">
      <div className="flex w-3/4 pr-8">
        <div className="relative mt-1 mr-4">
          <div className="w-6 h-6 bg-gray-500 rounded-full" />
          {!last && <div className="absolute top-0 w-px bg-gray-500 -bottom-40 left-1/2" />}
        </div>
        <div className="flex flex-col w-full dark:text-gray-50">
          <div className="m-0 font-bold" dangerouslySetInnerHTML={{__html: item.body}} />
          <div className="m-0 italic font-bold" dangerouslySetInnerHTML={{__html: item.subtitle}} />
          <div className="m-0" dangerouslySetInnerHTML={{__html: item.body}} />
        </div>
      </div>
      <div className="w-1/4">
        {console.log(item.image)}
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
    </div>
  )
}

type TimelineProps = {
  content: {
    header: string
  }[]
}

export const Timeline: React.FC<TimelineProps> = ({content = []}) => {
  return (
    <div className="flex flex-col items-center">
      {content?.map(({header, items}) => (
        <>
          <h4>{header}</h4>
          {items?.map((item, idx) => (
            <TimelineItem key={idx} last={idx === content.length - 1} item={item} />
          ))}
        </>
      ))}
    </div>
  )
}
