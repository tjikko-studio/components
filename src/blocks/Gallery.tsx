import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import {ImageProps, Media} from '../parts/Media'

export interface MediaProps extends ImageProps {
  autoplay?: boolean
  muted?: boolean
  controls?: boolean
  loop?: boolean
}

export interface GalleryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * default/horizontal (left to right) or vertical (image above)
   */
  layout?: 'default' | 'vertical'

  /**
   *  Block image
   */
  images?: MediaProps[] | null

  /**
   * alt text
   */
  caption: string

  /**
   * className override
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Gallery: FC<GalleryProps> = ({images = null, className = '', caption = ''}) => {
  let gridLayout = ''
  switch (images.length) {
    case 2:
    case 4:
      gridLayout = 'grid-cols-2'
      break
    case 3:
      gridLayout = 'grid-cols-3'
      break
    default:
      break
  }
  return (
    <figure role="group" className={cn(className)}>
      <div className={cn('grid gap-2', gridLayout)}>
        {images
          ? images.map((image) => {
              return (
                <Media
                  media={image}
                  autoplay={false}
                  muted={false}
                  controls={false}
                  loop={false}
                  className={'relative rounded-lg shadow-xl w-full h-full overflow-hidden'}
                  gallery={true}
                />
              )
            })
          : null}
      </div>
      <figcaption
        className="fontStyle-sm bg-opacity-60 text-gray:500 dark:text-gray-400 mt-4 relative"
        dangerouslySetInnerHTML={{__html: caption}}
      />
    </figure>
  )
}
