import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

export type HeadingLevel = '' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type HeadingAlignment = '' | 'left' | 'center' | 'right'
export type HeadingSize = '' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
  heading_text?: string
  heading_level?: HeadingLevel
  heading_size?: HeadingSize
  heading_alignment?: HeadingAlignment
}

/**
 * Primary UI component for user interaction
 */
export const Heading = ({
  id,
  heading_text = '',
  heading_level = 'h3',
  heading_size,
  heading_alignment = 'left',
  className = ''
}: HeadingProps) => {
  if (heading_level === '') {
    heading_level = 'h3'
  }
  if (heading_alignment === '') {
    heading_alignment = 'left'
  }
  const HeaderTag: HeadingLevel = heading_level || 'h3'

  const finalAlignment =
    heading_alignment === 'left'
      ? 'w-full'
      : heading_alignment === 'center'
      ? 'text-center'
      : heading_alignment === 'right'
      ? 'text-right'
      : ''

  const headerSize =
    heading_size === 'h1' && !className.includes('fontStyle')
      ? 'fontStyle-5xl sm:fontStyle-7xl'
      : heading_size === 'h2' && !className.includes('fontStyle')
      ? 'fontStyle-4xl sm:fontStyle-5xl'
      : heading_size === 'h3' && !className.includes('fontStyle')
      ? 'fontStyle-3xl sm:fontStyle-4xl'
      : heading_size === 'h4' && !className.includes('fontStyle')
      ? 'fontStyle-2xl sm:fontStyle-3xl'
      : heading_size === 'h5' && !className.includes('fontStyle')
      ? 'fontStyle-xl sm:fontStyle-2xl'
      : heading_size === 'h6' && !className.includes('fontStyle')
      ? 'fontStyle-lg font-display sm:fontStyle-xl'
      : ''

  return <HeaderTag id={id} className={cn(finalAlignment, headerSize, className)} dangerouslySetInnerHTML={{__html: heading_text}} />
}
