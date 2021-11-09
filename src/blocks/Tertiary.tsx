import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import {Button} from '../Button'
import {ImageProps, Media} from '../parts/Media'

import {LinkObject} from '../../shared/types'

export interface TertiaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * default/horizontal (left to right) or vertical (image above)
   */
  layout?: 'default' | 'vertical'

  /**
   * Is mirror
   */
  imagePosition?: 'undefined' | 'auto' | 'left' | 'right'

  /**
   *  Block image
   */
  image?: ImageProps | null

  /**
   *  Video properties
   */
  autoplay?: boolean
  muted?: boolean
  controls?: boolean
  loop?: boolean

  /**
   * text to display for heading
   */
  title: string

  /**
   * text to display for paragraph
   */
  body: string

  /**
   * Button
   */
  link: LinkObject
  label: string
}

/**
 * Primary UI component for user interaction
 */
export const Tertiary: FC<TertiaryProps> = ({
  layout = 'default',
  imagePosition = 'auto',
  image = null,
  autoplay = true,
  muted = true,
  controls = false,
  loop = true,
  title = '',
  body = '',
  link = null,
  label = null
}) => {
  const layoutTypeStaged = layout || 'default'

  const classes = [
    'text-gray-900',
    'dark:text-gray-50',
    {'lg:flex': layout !== 'vertical'},
    {'-lg:space-x-6 flex-row-reverse': layout !== 'vertical' && imagePosition === 'right'},
    {'lg:space-x-6': layout !== 'vertical' && imagePosition === 'left'}
  ]
  return (
    <div className={cn(classes)}>
      <div className={cn(layout === 'vertical' ? 'lg:pb-8' : 'lg:w-1/2')}>
        <Media
          media={image}
          autoplay={autoplay}
          muted={muted}
          controls={controls}
          loop={loop}
          className={'rounded-lg shadow-xl w-full h-full'}
        />
      </div>
      <div className={cn('mt-4 lg:mt-0', layoutTypeStaged !== 'vertical' && 'lg:w-1/2 lg:flex lg:ml-6')}>
        <div>
          <h2 className="fontStyle-2xl break-words block w-full">{title}</h2>
          <p className="fontStyle-base break-words mt-2" dangerouslySetInnerHTML={{__html: body}}></p>
          {link && label && <Button key={`(${link})[${label})]`} label={label} type="tertiary" size="small" link={link} />}
        </div>
      </div>
    </div>
  )
}
