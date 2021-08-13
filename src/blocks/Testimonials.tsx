import React, {FC, HTMLAttributes} from 'react'

export interface TestimonialsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * speech to display on Testimonials
   */
  speech?: string
  /**
   * avatar to display on Testimonials
   */
  avatarUrl?: string
  /**
   * alternate string for avatar
   */
  avatarAlt?: string
  /**
   * customer name to display on Testimonials
   */
  customerName?: string
}

/**
 * Primary UI component for user interaction
 */
export const Testimonials: FC<TestimonialsProps> = ({
  speech = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  avatarUrl = '',
  avatarAlt = '',
  customerName = 'Maria Lopez, VP of Design at Meshery'
}) => {

  return (
    <div className='flex flex-col space-y-6 text-gray-900 dark:text-gray-50'
    >
      <p
        className={`fontStyle-lg text-center text-brand-900 dark:text-brand-50`}

      >“{speech}”</p>
      <img
        className="w-20 h-20 mx-auto rounded-full"
        src={avatarUrl}
        alt={avatarAlt}
      />
      <p className={`fontStyle-xs uppercase text-center`}>{customerName}</p>
    </div>
  )
}
