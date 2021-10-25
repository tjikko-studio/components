import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import getComponent from '../../utilities/getComponent'
import {ImageProps} from '../parts/Media'

import {ColumnProps, ContentPosition} from '../../shared/types'

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  textColor?: string
  darkTextColor?: string

  /**
   * Background data
   */
  bgColor?: string
  bgHasImage?: boolean
  bgHasVideo?: boolean
  bgImage?: ImageProps
  bgVideo?: ImageProps

  /**
   * Content Position
   */
  contentPosition?: ContentPosition
  heroHeight?: string

  /**
   * Hero object that will be parsed through to build the component
   */
  content?: []
  templatesContent?: Record<string, ColumnProps>

  className?: string
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
      return 'bottom-0'
    default:
      return ''
  }
}

function extractCombo(thing: string) {
  return thing ? thing.split('|') : [null, null]
}

const DEFAULT_TEXT_COLOR = 'gray-900'
const DEFAULT_DARK_TEXT_COLOR = 'gray-50'

export const Hero: FC<HeroProps> = ({
  textColor = DEFAULT_TEXT_COLOR,
  darkTextColor = DEFAULT_DARK_TEXT_COLOR,
  bgColor = 'transparent',
  bgHasImage = false,
  bgHasVideo = false,
  bgImage = {},
  bgVideo = {},
  contentPosition = 'bottom|left',
  heroHeight = '80vh',
  content = [],
  templatesContent = {},
  className
}) => {
  const finalHeroHeight = heroHeight || '80vh'
  const toComponent = getComponent(templatesContent)
  const [verPosVal, horPosVal] = extractCombo(contentPosition)
  const [theme, background] = extractCombo(bgColor)
  const verPos = getVerPos(verPosVal)
  const horPos = getHorPos(horPosVal)

  return (
    <header
      className={cn('overflow-hidden bg-cover relative text-gray-50', theme ? theme : 'dark', className)}
      style={{backgroundColor: background, backgroundImage: `url(${bgHasImage && bgImage && !bgHasVideo ? bgImage.url : ''})`}}
    >
      {bgHasVideo && (
        <video
          id="heroVideo"
          autoPlay
          muted
          loop
          className={cn(['absolute', 'z-0', 'top-0', 'left-0', 'object-cover', 'w-full', 'h-full', 'hidden', 'sm:block'])}
        >
          <source src={bgVideo.url} type="video/mp4" />
        </video>
      )}
      {(bgHasImage || bgHasVideo) && (
        <>
          <div
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
              'opacity-60'
            ])}
          />
        </>
      )}
      {/* See the tailwind hacks in src/index.tsx */}
      <div className={`h-${finalHeroHeight} max-w-screen-xl mx-auto relative`}>
        <div
          className={cn([
            `text-${textColor || DEFAULT_TEXT_COLOR}`,
            `dark:text-${darkTextColor || DEFAULT_DARK_TEXT_COLOR}`,
            'absolute',
            'z-20',
            'p-6',
            'lg:p-12',
            'md:p-12',
            'sm:p-12',
            'flex',
            'flex-col',
            'space-y-5',
            verPos,
            horPos
          ])}
        >
          {content.length >= 1 ? (
            content.map((block) => {
              return toComponent(block, {
                Heading: () => {
                  return {
                    level: 'h1'
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
