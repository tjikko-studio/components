// eslint-disable-next-line no-use-before-define
import React, {FC, HTMLAttributes} from 'react'

export interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Text semantic tag
   * (It won't be the same for a hero as for section)
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  /**
   * text alignment
   */
  alignment?: 'left' | 'center' | 'right'

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
export const Heading: FC<HeadingProps> = ({
  level = 'h3',
  alignment = 'left',
  text = '',
  className = ''
}) => {
  const finalAlignment = alignment || 'left'

  const HeaderTag: keyof JSX.IntrinsicElements = level || 'h3'
  return (
    <HeaderTag className={
      `${
        finalAlignment === 'left' && 'w-full'
      } text-${finalAlignment ? finalAlignment : 'left'} ${className}`
    } >
      {text}
    </HeaderTag>
  )
}
