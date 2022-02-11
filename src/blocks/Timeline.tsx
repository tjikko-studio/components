import React, {MutableRefObject, useEffect, useRef, useState} from 'react'
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
  timelineRef: MutableRefObject<any>
  snaps?: boolean
  lineColor?: string
}
const defaultLineColor = 'black'
const TimelineItem: React.VFC<TimelineComponentProps> = ({
  card,
  content,
  contentGap,
  reverse,
  timelineRef,
  snaps = false,
  lineColor = defaultLineColor
}) => {
  if (!lineColor || lineColor === '') {
    lineColor = defaultLineColor
  }
  const containerRef = useRef(null)
  const trackerRef = useRef(null)
  const [trackerHeight, setTrackerHeight] = useState('0')

  useEffect(() => {
    function onScroll() {
      if (containerRef.current && trackerRef.current && timelineRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const rect = trackerRef.current.getBoundingClientRect()
        const target = window.innerHeight / 2
        const gap = parseFloat(window.getComputedStyle(timelineRef.current).gap.slice(0, -2))
        const margin = parseFloat(window.getComputedStyle(containerRef.current).marginBottom.slice(0, -2))
        const newHeight = rect.y > target ? '0' : `${Math.min(target - rect.y, containerRect.height + gap + margin)}px`
        setTrackerHeight(newHeight)
      }
    }
    window.addEventListener('scroll', onScroll, true)
    return () => {
      window.removeEventListener('scroll', onScroll, true)
    }
  }, [timelineRef])
  const toComponent = getComponent({})
  const cardClassName = 'sticky top-0 sm:top-8 lg:top-24 xl:top-32 z-20'
  const mobileCardClassName = 'mb-5'
  const mobileCardProps = {allowRoundedCorners: false}
  const snapClasses = 'scroll-mt-0 sm:scroll-mt-8 lg:scroll-mt-24 xl:scroll-mt-32'
  const contentStyle = {gap: contentGap}
  return (
    <div className={cn('w-full', snapClasses)} style={{scrollSnapAlign: snaps ? 'start' : 'none'}}>
      {card && card[0] ? (
        <Card {...card[0]?.content} className={cn('sm:hidden', cardClassName, mobileCardClassName)} {...mobileCardProps} />
      ) : (
        <Card className={cn('sm:hidden', cardClassName, mobileCardClassName)} {...mobileCardProps} />
      )}
      <div className={cn('flex w-full', {'flex-row-reverse': reverse})}>
        {card && card[0] ? (
          <Card {...card[0]?.content} className={cn('hidden sm:flex', cardClassName)} />
        ) : (
          <Card className={cn('hidden sm:visible', cardClassName)} />
        )}
        <div className="relative mx-4 sm:mx-6">
          <div className="box-content bg-gray-700 rounded-full relative z-10" style={{width: '21px', height: '21px'}} />
          <div className={cn('absolute top-0 bg-gray-400 left-1/2 -bottom-48')} style={{width: '1px', marginLeft: '-0.5px'}} />
          <div
            ref={trackerRef}
            className={cn('absolute top-0 left-1/2')}
            style={{width: '3px', marginLeft: '-1.5px', height: trackerHeight, backgroundColor: lineColor}}
          />
        </div>
        <div className={cn('flex flex-col w-full z-10 mb-5 sm:mb-0')} style={contentStyle} ref={containerRef}>
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
  snaps?: boolean
  lineColor?: string
}

export const Timeline: React.FC<TimelineProps> = ({
  content = [],
  contentGap,
  alignment = false,
  alternates = false,
  snaps = false,
  lineColor = 'black'
}) => {
  const timelineRef = useRef(null)
  return (
    <div className="relative mx-auto mb-48 w-full max-w-screen-lg flex flex-col gap-28">
      <section>
        <div className="flex flex-col items-center gap-48 pt-12" ref={timelineRef}>
          {content?.map(({card, content: innerContent}, idx) => {
            return (
              <TimelineItem
                key={idx}
                card={card}
                content={innerContent}
                contentGap={contentGap}
                reverse={alternates ? (alignment ? idx % 2 === 0 : idx % 2 !== 0) : alignment}
                timelineRef={timelineRef}
                snaps={snaps}
                lineColor={lineColor}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
