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
  images?: MediaProps[]

  /**
   * alt text
   */
  caption?: string

  /**
   * Columns on mobile
   */
  mobileColumns?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Gallery: FC<GalleryProps> = ({images = [], className = '', caption = '', mobileColumns = false}) => {
  let gridLayout = null
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

  gridLayout = !mobileColumns && gridLayout ? `xs:${gridLayout}` : gridLayout

  return (
    <figure role="group" className={cn('h-full', className)}>
      <div className={cn('grid gap-2 h-full', gridLayout)}>
        {images.length ? (
          images.map((image) => {
            return (
              <Media
                key={image.id}
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
        ) : (
          <Media media={null} />
        )}
      </div>
      <figcaption
        className="relative mt-4 fontStyle-sm bg-opacity-60 text-gray:500 dark:text-gray-400"
        dangerouslySetInnerHTML={{__html: caption}}
      />
    </figure>
  )
}
