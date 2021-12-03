import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'
import {Heading} from '../blocks/Heading'

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /**
   * text to display for heading
   */
  title: string

  /**
   * text to display for paragraph
   */
  subtitle: string

  /**
   * Styles
   */
  headerType?: 'hero' | 'section_big' | 'section_small'
  headerAlign?: 'left' | 'center'
}

/**
 * Primary UI component for user interaction
 */
export const Header: FC<HeaderProps> = ({title = '', subtitle = '', className = '', headerType = 'section_big', headerAlign = 'left'}) => {
  const titleTag = headerType === 'hero' ? 'h1' : 'h2'
  const [titleClasses, subtitleClasses] =
    headerType === 'hero'
      ? ['', 'fontStyle-2xl mt-3']
      : headerType === 'section_big'
      ? ['', 'fontStyle-lg uppercase mt-1.5']
      : headerType === 'section_small'
      ? ['fontStyle-4xl', 'fontStyle-base mt-2']
      : ['', '']
  const align = headerAlign === 'center' ? 'text-center' : ''

  return (
    <header className={cn('w-full', align, className)}>
      <Heading level={titleTag} text={title} className={titleClasses} alignment={headerAlign} />
      {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
    </header>
  )
}
