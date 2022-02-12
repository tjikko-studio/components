import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * HTML to use as container
   */
  tag?: 'p' | 'pre' | 'span' | 'div'

  /**
   * text alignment
   */
  alignment?: 'left' | 'center' | 'right'

  /**
   * text to show as question
   */
  text?: string
}

/**
 * Primary UI component for user interaction
 */
export const Text = ({tag = 'p', alignment = 'left', text = '', className = ''}: TextProps) => {
  const TextTag = tag

  const finalAlignment =
    alignment === 'left' ? 'md:w-full' : alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : ''

  // See safelist in tailwind.safelist.js
  return <TextTag className={cn(finalAlignment, className, 'text-block-container')} dangerouslySetInnerHTML={{__html: text}} />
}
