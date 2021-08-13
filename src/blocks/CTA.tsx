import React, {FC, HTMLAttributes} from 'react'
import {Button} from '../Button'

export interface CTAType {
  label?: string
  link?: string
}

export interface CTAProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Caption string
   */
  title?: string
  /**
   * Description
   */
  body?: string
  /**
   * Action buttons / links
   */
  ctas?: CTAType[]
}

/**
 * Primary UI component for user interaction
 */
export const CTA: FC<CTAProps> = ({
  title = "",
  body = "",
  ctas = []
}) => {
  return (
    <div className="w-full py-24 text-center bg-gray-900">
      <h2 className='fontStyle-4xl text-gray-50'>{title}</h2>
      <p className="fontStyle-lg text-gray-50 mt-4 mb-7">{body}</p>
      <div className="inline-flex space-x-4">
        {ctas.map((cta, index) => (
          <Button
            key={cta.link}
            text={cta.label}
            url={cta.link}
            type={index === 0 ? 'primary' : 'tertiary'}
            icon='none'
            size='large'
          />
        ))}
      </div>
    </div>
  )
}
