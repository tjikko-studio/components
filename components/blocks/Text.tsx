import React, { FC, HTMLAttributes } from 'react'

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * text to show as question
   */
  tag?: 'p' | 'pre' | 'span' | 'div'
  /**
   * text to show as question
   */
  text?: string

  /**
   * Additional space-separated class names to append
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Text: FC<TextProps> = ({
  text,
  className
}) => {
  return (
    <div className={`${className}`} dangerouslySetInnerHTML={{ __html: text }} />
  )
}
