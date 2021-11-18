import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

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
    <div className={cn('flex flex-col gap-6 text-gray-900 dark:text-gray-50', layout === 'horizontal' && 'sm:flex-row', className)}>
      <div className={cn('flex-shrink-0 w-32')}>
        <Media media={image} className={'w-32 h-32'} />
      </div>
      <div>
        <h2 className="fontStyle-2xl break-words">{title ? title : 'title'}</h2>
        <p className="mt-2">{body}</p>
      </div>
    </div>
  )
}
