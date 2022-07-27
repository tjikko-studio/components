import React, {HTMLAttributes} from 'react'

import {ImageProps, Media} from '../parts/Media'

export interface TestimonialProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * body to display on Testimonial
   */
  body?: string
  /**
   * avatar to display on Testimonial
   */
  image?: ImageProps
  image_srcset_small?: string
  /**
   * customer name to display on Testimonial
   */
  title?: string
}

/**
 * Primary UI component for user interaction
 */
export const Testimonial = ({body = '', image = {}, image_srcset_small = null, title = ''}: TestimonialProps) => {
  if (Array.isArray(image)) {
    image = image[0]
  }
  return (
    <div className="flex flex-col items-center">
      <div className="fontStyle-lg italic text-center" dangerouslySetInnerHTML={{__html: body}} />
      <Media media={image} image_srcset={image_srcset_small} className="w-28 h-28 mxl:x-auto rounded-full mt-4" ratio="1/1" />
      <span className="fontStyle-xs uppercase text-center mt-6" dangerouslySetInnerHTML={{__html: title}} />
    </div>
  )
}
