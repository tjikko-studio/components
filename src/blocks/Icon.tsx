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

  /**
   * className override
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Icon: FC<IconProps> = ({layout = 'horizontal', image = null, title = '', body = '', className = ''}) => {
  return (
    <div className={cn('text-gray-900 dark:text-gray-50', layout === 'horizontal' && 'sm:flex', className)}>
      <div className={cn('flex-shrink-0 w-32', layout !== 'horizontal' && 'sm:pb-14 pb-6')}>
        <Media media={image} className={'w-32 h-32'} />
      </div>
      <div className={layout === 'horizontal' ? 'mt-4 sm:mt-0 sm:ml-6' : 'mt-6'}>
        <h2 className="fontStyle-2xl break-words">{title ? title : 'title'}</h2>
        <p className="mt-2">{body}</p>
      </div>
    </div>
  )
}
