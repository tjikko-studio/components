import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

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
}

/**
 * Primary UI component for user interaction
 */
export const Heading: FC<HeadingProps> = ({level = 'h3', alignment = 'left', text = '', className = '', id}) => {
  const HeaderTag: keyof JSX.IntrinsicElements = level || 'h3'

  const finalAlignment =
    alignment === 'left' ? 'w-full' : alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : ''

  const headerSize =
    level === 'h1' && !className.includes('fontStyle')
      ? 'fontStyle-5xl sm:fontStyle-7xl'
      : level === 'h2' && !className.includes('fontStyle')
      ? 'fontStyle-4xl sm:fontStyle-5xl'
      : level === 'h3' && !className.includes('fontStyle')
      ? 'fontStyle-3xl sm:fontStyle-4xl'
      : level === 'h4' && !className.includes('fontStyle')
      ? 'fontStyle-2xl sm:fontStyle-3xl'
      : level === 'h5' && !className.includes('fontStyle')
      ? 'fontStyle-xl sm:fontStyle-2xl'
      : level === 'h6' && !className.includes('fontStyle')
      ? 'fontStyle-lg font-display sm:fontStyle-xl'
      : ''

  return <HeaderTag id={id} className={cn(finalAlignment, headerSize, className)} dangerouslySetInnerHTML={{__html: text}} />
}
