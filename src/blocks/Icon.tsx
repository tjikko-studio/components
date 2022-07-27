import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import {Heading, HeadingAlignment, HeadingLevel, HeadingSize} from '../blocks/Heading'
import {ImageProps, Media} from '../parts/Media'

/*
 * In production mode, show dynamic image and video with url
 */
export interface IconProps extends HTMLAttributes<HTMLElement> {
  /**
   * layout of Icon ('horizontal' | 'vertical')
   */
  layout?: 'horizontal' | 'vertical'

  /**
   *  image url to show
   */
  image?: ImageProps | null
  image_srcset_small?: string

  heading_text?: string
  heading_level?: HeadingLevel
  heading_size?: HeadingSize
  heading_alignment?: HeadingAlignment

  /**
   * content text
   */
  body?: string
}

/**
 * Primary UI component for user interaction
 */
export const Icon = ({
  layout = 'horizontal',
  image = null,
  image_srcset_small = null,
  heading_text = '',
  heading_level = 'h3',
  heading_size,
  heading_alignment,
  body = '',
  className = ''
}: IconProps) => {
  if (heading_level === '') {
    heading_level = 'h3'
  }
  return (
    <div className={cn('flex flex-col gap-6', {'sm:flex-row': layout === 'horizontal'}, className)}>
      <div className={cn('flex-shrink-0 w-32')}>
        <Media media={image} image_srcset={image_srcset_small} className={'w-32 h-32'} />
      </div>
      <div>
        <Heading
          heading_text={heading_text ? heading_text : 'title'}
          heading_level={heading_level}
          heading_size={heading_size}
          heading_alignment={heading_alignment}
          className="fontStyle-2xl break-words"
        />
        <div className="mt-2" dangerouslySetInnerHTML={{__html: body}} />
      </div>
    </div>
  )
}
