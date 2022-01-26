import React from 'react'
import cn from 'classnames'

import getComponent from '../../utilities/getComponent'
import {Card, CardProps} from './Card'

type CardEntry = {
  id: string
  content: CardProps
  isHidden: boolean
  type: 'Card'
}

export type TimelineComponentProps = {
  card?: CardEntry[]
  content?: []
  contentGap?: string
  last: boolean
}

const TimelineItem: React.VFC<TimelineComponentProps> = ({card, content, contentGap, last}) => {
  const toComponent = getComponent({})
  const cardClassName = 'sm:mr-4 sticky top-0 sm:top-28 z-20'

  return (
    <>
      {card[0] ? (
        <Card {...card[0].content} className={cn('sm:hidden', cardClassName)} />
      ) : (
        <Card className={cn('sm:hidden', cardClassName)} />
      )}
      <div className="flex w-full">
        {card[0] ? (
          <Card {...card[0].content} className={cn('hidden sm:flex', cardClassName)} />
        ) : (
          <Card className={cn('hidden sm:visible', cardClassName)} />
        )}
        <div className="relative ml-2 sm:ml-3 mr-4 sm:mr-6">
          <div className="w-4 h-4 box-content bg-gray-700 rounded-full relative z-10" />
          <div className={cn('absolute top-0 w-px bg-gray-400 left-1/2 -ml-px -bottom-24')} />
        </div>
        <div className={cn('flex flex-col w-full z-10', contentGap)}>
          {content && content.length >= 1 ? (
            content.map((block) => {
              return toComponent(block, {
                Card: () => {
                  return {fullHeight: false}
                }
              })
            })
          ) : (
            <div>No content yet</div>
          )}
        </div>
      </div>
    </>
  )
}

export type TimelineProps = {
  content: {
    card: CardEntry[]
    content: []
  }[]
  contentGap?: string
}

export const Timeline: React.FC<TimelineProps> = ({content = [], contentGap}) => {
  return (
    <div className="mx-auto mb-24 w-full max-w-screen-lg flex flex-col gap-28">
      <section>
        <div className="flex flex-col items-center gap-20 pt-12">
          {content?.map(({card, content: innerContent}, idx) => {
            return <TimelineItem key={idx} card={card} content={innerContent} contentGap={contentGap} last={idx + 1 === content.length} />
          })}
        </div>
      </section>
    </div>
  )
}
