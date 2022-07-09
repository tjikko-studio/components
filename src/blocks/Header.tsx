import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import {Heading, HeadingAlignment, HeadingLevel, HeadingSize} from '../blocks/Heading'

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  heading_text?: string
  heading_level?: HeadingLevel
  heading_size?: HeadingSize
  heading_alignment?: HeadingAlignment

  /**
   * text to display for paragraph
   */
  subtitle: string

  /**
   * Styles
   */
  headerType?: 'hero' | 'section_big' | 'section_small'
}

/**
 * Primary UI component for user interaction
 */
export const Header = ({
  headerType = 'section_big',
  heading_text,
  heading_level = 'h2',
  heading_size = 'h3',
  heading_alignment = 'left',
  subtitle = '',
  className = ''
}: HeaderProps) => {
  if (heading_alignment === '') {
    heading_alignment = 'left'
  }
  const subtitleClasses =
    headerType === 'hero'
      ? 'fontStyle-lg font-display font-medium sm:fontStyle-2xl mt-3'
      : headerType === 'section_big'
      ? 'fontStyle-lg uppercase mt-1.5'
      : headerType === 'section_small'
      ? 'fontStyle-base mt-2'
      : ''

  const finalAlignment = heading_alignment === 'center' ? 'text-center' : heading_alignment === 'right' ? 'text-right' : ''

  return (
    <header className={cn('w-full', {'text-shadow-xl': headerType === 'hero'}, finalAlignment, className)}>
      <Heading
        heading_text={heading_text}
        heading_level={heading_level}
        heading_size={heading_size}
        heading_alignment={heading_alignment}
      />
      {subtitle && <span className={subtitleClasses} dangerouslySetInnerHTML={{__html: subtitle}} />}
    </header>
  )
}
