import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import {Heading} from '../blocks/Heading'
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

  /**
   * title text
   */
  title?: string

  /**
   * content text
   */
  body?: string
}

/**
 * Primary UI component for user interaction
 */
export const Icon: FC<IconProps> = ({layout = 'horizontal', image = null, title = '', body = '', className = ''}) => {
  return (
    <div className={cn('flex flex-col gap-6', layout === 'horizontal' && 'sm:flex-row', className)}>
      <div className={cn('flex-shrink-0 w-32')}>
        <Media media={image} className={'w-32 h-32'} />
      </div>
      <div>
        <Heading level="h3" text={title ? title : 'title'} className="fontStyle-2xl break-words" />
        <p className="mt-2">{body}</p>
      </div>
    </div>
  )
}
