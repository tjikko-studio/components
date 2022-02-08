import React, {FC, HTMLAttributes} from 'react'

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
  /**
   * customer name to display on Testimonial
   */
  title?: string
}

/**
 * Primary UI component for user interaction
 */
export const Testimonial: FC<TestimonialProps> = ({body = '', image = {}, title = ''}) => {
  if (Array.isArray(image)) {
    image = image[0]
  }
  return (
    <div className="flex flex-col items-center">
      <p className="fontStyle-lg italic text-center" dangerouslySetInnerHTML={{__html: `"${body}"`}} />
      <Media media={image} className="w-28 h-28 mxl:x-auto rounded-full mt-4" ratio="1/1" />
      <p className="fontStyle-xs uppercase text-center mt-6">{title}</p>
    </div>
  )
}
