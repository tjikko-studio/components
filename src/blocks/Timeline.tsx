import React from 'react'
import cn from 'classnames'

import getComponent from '../../utilities/getComponent'
import {extractCombo} from '../../utilities/stringUtils'
import {ImageProps, Media} from '../parts/Media'
import {Text} from './Text'

import {BlockProps} from '../../shared/types'

type TimelineItemProps = {
  title: string
  subtitle: string
  body: string
  image: ImageProps[]
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
      <div className="w-1/4">{item.image?.[0] && <Media media={item.image[0]} className="w-full rounded-xl" />}</div>
    </div>
  )
}

type TimelineProps = {
  className?: string
  header?: BlockProps[]
  items: TimelineItemProps[]
  bgColor?: string
}

export const Timeline: React.FC<TimelineProps> = ({className, bgColor, header, items = []}) => {
  const toComponent = getComponent()
  const [theme, background] = extractCombo(bgColor)

  return (
    <div className={cn(theme, className)} style={{backgroundColor: background}}>
      <div className="pt-8 pb-20 dark:text-gray-50">
        {header?.map((block) => {
          return toComponent(block)
        })}
      </div>
      <div className="flex flex-col items-center">
        {items?.map((item, idx) => (
          <TimelineItem key={idx} last={idx === items.length - 1} item={item} />
        ))}
      </div>
    </div>
  )
}
