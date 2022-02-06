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
  reverse: boolean
}

const TimelineItem: React.VFC<TimelineComponentProps> = ({card, content, contentGap, reverse}) => {
  const toComponent = getComponent({})
  const cardClassName = 'sticky top-0 sm:top-28 z-20'
  return (
    <div className="w-full">
      {card[0] ? (
        <Card {...card[0].content} className={cn('sm:hidden', cardClassName)} />
      ) : (
        <Card className={cn('sm:hidden', cardClassName)} />
      )}
      <div className={cn('flex w-full', {'flex-row-reverse': reverse})}>
        {card[0] ? (
          <Card {...card[0].content} className={cn('hidden sm:flex', cardClassName)} />
        ) : (
          <Card className={cn('hidden sm:visible', cardClassName)} />
        )}
        <div className="relative mx-4 sm:mx-6">
          <div className="box-content bg-gray-700 rounded-full relative z-10" style={{width: '21px', height: '21px'}} />
          <div className={cn('absolute top-0 bg-gray-400 left-1/2 -bottom-48')} style={{width: '3px', marginLeft: '-1.5px'}} />
        </div>
        <div
          className={cn('flex flex-col w-full z-10')}
          style={{
            gap: contentGap
          }}
        >
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
    </div>
  )
}

export type TimelineProps = {
  content: {
    card: CardEntry[]
    content: []
  }[]
  contentGap?: string
  alignment?: boolean
  alternates?: boolean
}

export const Timeline: React.FC<TimelineProps> = ({content = [], contentGap, alignment = false, alternates = false}) => {
  return (
    <div className="relative mx-auto mb-48 w-full max-w-screen-lg flex flex-col gap-28">
      <section>
        <div className="flex flex-col items-center gap-48 pt-12">
          {content?.map(({card, content: innerContent}, idx) => {
            return (
              <TimelineItem
                key={idx}
                card={card}
                content={innerContent}
                contentGap={contentGap}
                reverse={alternates ? (alignment ? idx % 2 === 0 : idx % 2 !== 0) : alignment}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
