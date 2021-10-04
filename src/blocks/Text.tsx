import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * text to show as question
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

  /**
   * className override
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Text: FC<TextProps> = ({tag = 'p', alignment = 'left', text = '', className = ''}) => {
  const TextTag = tag

  // See safelist in tailwind.safelist.js
  return (
    <TextTag className={cn(alignment === 'left' && 'w-max', `text-${alignment}`, className)} dangerouslySetInnerHTML={{__html: text}} />
  )
}
