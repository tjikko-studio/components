import React, {FC, HTMLAttributes} from 'react'

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
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Text: FC<TextProps> = ({
  tag = 'p',
  alignment = 'left',
  text = '',
  className = ''
}) => {
  const TextTag = tag

  return (
    <TextTag className={`${alignment === 'left' && `w-max`} text-${alignment} ${className}`} dangerouslySetInnerHTML={{ __html: text }} />
  )
}
