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
  return (
    <div className="flex flex-col gap-y-6 text-gray-900 dark:text-gray-50">
      <p className="fontStyle-lg text-center text-brand-900 dark:text-brand-50">“{body}”</p>
      <Media media={image} className="w-20 h-20 mx-auto rounded-full" ratio="1/1" />
      <p className="fontStyle-xs uppercase text-center">{title}</p>
    </div>
  )
}
