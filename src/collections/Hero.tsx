import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import {nonThrowingJsonParse} from '../../kirbyDatasCleaner'
import extractCombo from '../../utilities/extractCombo'
import getComponent from '../../utilities/getComponent'
import lightOrDark from '../../utilities/lightOrDark'
import makeRandomId from '../../utilities/makeRandomId'
import {ImageProps} from '../parts/Media'

import {ColumnProps, ContentPosition} from '../../shared/types'

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  textColor?: string
  darkTextColor?: string

  /**
   * Background data
   */
  bgColor?: string
  bgType?: 'image' | 'video'
  bgImage?: ImageProps
  bgVideo?: ImageProps
  bgVideoFallback?: ImageProps

  /**
   * Content Position
   */
  contentPosition?: ContentPosition
  heroHeight?: 'h-80vh' | 'h-screen'

  /**
   * Hero object that will be parsed through to build the component
   */
  content?: []
  templatesContent?: Record<string, ColumnProps>
}

const getHorPos = (value: string) => {
  switch (value) {
    case 'left':
      return 'left-0'
    case 'center':
      return 'left-1/2 transform -translate-x-1/2'
    case 'right':
      return 'right-0'
    default:
      return ''
  }
}

const getVerPos = (value: string) => {
  switch (value) {
    case 'top':
      return 'top-0'
    case 'center':
      return 'top-1/2 transform -translate-y-1/2'
    case 'bottom':
      return 'bottom-36 xl:bottom-24'
    default:
      return ''
  }
}

const DEFAULT_TEXT_COLOR = 'gray-900'
const DEFAULT_DARK_TEXT_COLOR = 'gray-50'

export const Hero: FC<HeroProps> = ({
  textColor = DEFAULT_TEXT_COLOR,
  darkTextColor = DEFAULT_DARK_TEXT_COLOR,
  bgColor = 'transparent',
  bgType = '',
  bgImage = {},
  bgVideo = {},
  bgVideoFallback = {},
  contentPosition = 'bottom|left',
  heroHeight = 'h-80vh',
  content = [],
  templatesContent = {},
  className
}) => {
  const HeroHeadingId = makeRandomId()
  const finalHeroHeight = heroHeight || 'h-80vh'
  const toComponent = getComponent(templatesContent)
  const [verPosVal, horPosVal] = extractCombo(contentPosition)
  const theme = !bgColor || bgColor === 'transparent' ? 'light' : lightOrDark(bgColor)
  const verPos = getVerPos(verPosVal)
  const horPos = getHorPos(horPosVal)
  const bgImageOutput = bgType === 'image' && bgImage ? bgImage.url : bgType === 'video' && bgVideoFallback ? bgVideoFallback.url : ''
  const parsedInfo = nonThrowingJsonParse(bgVideo?.info)
  return (
    <header
      className={cn('overflow-hidden relative text-gray-50', bgImageOutput && 'bg-cover', theme ? theme : 'dark', className)}
      style={{backgroundColor: bgColor, backgroundImage: `url(${bgImageOutput})`}}
      aria-labelledby={HeroHeadingId}
    >
      {bgType === 'video' && (
        <figure>
          <video
            role="img"
            autoPlay
            muted
            loop
            className={cn(['absolute', 'z-0', 'top-0', 'left-0', 'object-cover', 'w-full', 'h-full', 'hidden', 'sm:block'])}
            aria-label="Background video"
          >
            <source src={bgVideo.url} type="video/mp4" />
          </video>
          {parsedInfo?.caption && <figcaption className="hidden" dangerouslySetInnerHTML={{__html: parsedInfo.caption}} />}
        </figure>
      )}
      {bgType && (
        <>
          <div
            aria-hidden="true"
            className={cn([
              'absolute',
              'z-1',
              'h-2/6',
              '-top-1/6',
              'left-0',
              'w-full',
              'bg-gradient-to-b',
              'from-gray-900',
              'to-transparent',
              'opacity-40'
            ])}
          />
          <div
            aria-hidden="true"
            className={cn([
              'absolute',
              'z-1',
              'h-full',
              '-bottom-1/6',
              'left-0',
              'w-full',
              'bg-gradient-to-t',
              'from-gray-900',
              'to-transparent',
              'opacity-80'
            ])}
          />
        </>
      )}
      {/* See the tailwind hacks in src/index.tsx */}
      <div className={`${finalHeroHeight}  -mb-36 pb-36 xl:-mb-24 xl:pb-24 max-w-screen-xl xl:mx-auto relative`}>
        <div
          className={cn([
            `text-${textColor || DEFAULT_TEXT_COLOR}`,
            `dark:text-${darkTextColor || DEFAULT_DARK_TEXT_COLOR}`,
            'absolute',
            'z-20',
            'w-full',
            'p-6',
            'lg:pb-24',
            'md:pb-16',
            'sm:pb-12',
            'px-4',
            'sm:px-8',
            'md:px-12',
            'xl:px-0',
            'flex',
            'flex-col',
            'gap-y-5',
            verPos,
            horPos
          ])}
        >
          {content.length >= 1 ? (
            content.map((block) => {
              return toComponent(block, {
                Heading: () => {
                  return {
                    level: 'h1',
                    id: HeroHeadingId
                  }
                }
              })
            })
          ) : (
            <div>No content yet</div>
          )}
        </div>
      </div>
    </header>
  )
}
