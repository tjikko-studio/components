import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import {GenericMediaProps, Media} from '../parts/Media'

export interface GalleryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * default/horizontal (left to right) or vertical (image above)
   */
  layout?: 'default' | 'vertical'

  /**
   *  Block image
   */
  content?: GenericMediaProps[]

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
export const Gallery = ({content = [], className = '', caption = '', mobileColumns = false}: GalleryProps) => {
  let gridLayout = null
  switch (content.length) {
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
    <figure role="group" className={cn(className)}>
      <div className={cn('grid gap-2', gridLayout)}>
        {content.length ? (
          content.map((img) => {
            return (
              <Media
                key={img.media ? img.media.id : img.id}
                media={img.media ? img.media : img}
                autoplay={img.autoplay}
                muted={img.muted}
                controls={img.controls}
                loop={img.loop}
                ratio="16/9"
                className={'rounded-lg shadow-2xl w-full h-full overflow-hidden'}
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
