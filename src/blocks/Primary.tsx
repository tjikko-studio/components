import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import {ButtonsGroup} from '../blocks/ButtonsGroup'
import {Heading, HeadingAlignment, HeadingLevel, HeadingSize} from '../blocks/Heading'
import {ButtonProps} from '../Button'
import {ImageProps, Media, VideoProps} from '../parts/Media'

export interface PrimaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * default/horizontal (left to right) or vertical (image above)
   */
  layout?: 'default' | 'vertical'

  /**
   * Image Position
   */
  imagePosition?: 'undefined' | 'auto' | 'left' | 'right' | 'top'

  textPositionVertical?: 'center' | 'top'

  textPositionHorizontal?: 'left' | 'center' | 'right' | 'justify'

  media_type?: 'image' | 'video' | ''
  /**
   *  Block image
   */
  image?: ImageProps

  /**
   *  Video properties
   */
  video?: VideoProps
  auto_play?: boolean
  muted?: boolean
  controls?: boolean
  loop?: boolean
  is_youtube?: boolean
  youtube_url?: string
  ratio?: string
  height?: string
  rounded?: boolean
  align?: string
  mobile_ignore_align?: boolean

  heading_text?: string
  heading_level?: HeadingLevel
  heading_size?: HeadingSize
  heading_alignment?: HeadingAlignment

  /**
   * text to display for paragraph
   */
  body: string

  /**
   *  Block buttons list
   */
  buttons?: ButtonProps[]
}

/**
 * Primary UI component for user interaction
 */
export const Primary = ({
  layout = 'default',
  imagePosition = 'auto',
  textPositionVertical = 'center',
  textPositionHorizontal = 'left',
  media_type,
  image = null,
  video = null,
  is_youtube,
  youtube_url,
  auto_play = true,
  muted = true,
  controls = false,
  loop = true,
  rounded = false,
  height,
  heading_text,
  heading_level = 'h3',
  heading_size = 'h3',
  heading_alignment,
  body = '',
  buttons = [],
  className = ''
}: PrimaryProps) => {
  if (heading_level === '') {
    heading_level = 'h3'
  }
  if (heading_size === '') {
    heading_size = 'h3'
  }
  const finalLayout = layout || 'default'
  return (
    <div className={cn('grid gap-6', {'lg:grid-cols-2 lg:gap-12': finalLayout === 'default'})}>
      {(finalLayout === 'default' || finalLayout === 'vertical') && (
        <>
          <Media
            media={media_type === 'video' ? (is_youtube ? {type: 'youtube', url: youtube_url} : video) : image}
            srcsetSize="medium"
            autoplay={auto_play}
            muted={muted}
            controls={controls}
            loop={loop}
            className={cn('rounded-lg shadow-2xl', {
              'lg:col-start-2 lg:row-start-1': imagePosition === 'right' && finalLayout === 'default',
              'lg:col-start-1': imagePosition === 'left' && finalLayout === 'default',
              'rounded-lg': rounded
            })}
            ratio="16/9"
            style={{
              height: !height || height === '' ? 'unset' : height
            }}
          />
          <div
            className={cn(
              'flex flex-col',
              {
                'justify-center': textPositionVertical === 'center',
                'text-left': textPositionHorizontal === 'left',
                'text-center': textPositionHorizontal === 'center',
                'text-right': textPositionHorizontal === 'right',
                'text-justify': textPositionHorizontal === 'justify',
                'lg:col-start-1': imagePosition === 'right' && finalLayout === 'default',
                'lg:col-start-2 lg:row-start-1': imagePosition === 'left' && finalLayout === 'default'
              },
              className
            )}
          >
            <Heading
              heading_text={heading_text}
              heading_level={heading_level}
              heading_size={heading_size}
              heading_alignment={heading_alignment}
              className={cn('break-words')}
            />
            <div className="mt-2" dangerouslySetInnerHTML={{__html: body}} />
            {Object.keys(buttons).length ? <ButtonsGroup key={JSON.stringify(buttons)} buttons={buttons} className="gap-x-4 mt-4" /> : null}
          </div>
        </>
      )}
    </div>
  )
}
