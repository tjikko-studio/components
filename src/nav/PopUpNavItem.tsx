import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import makeRandomId from '../../utilities/makeRandomId'
import {Heading} from '../blocks/Heading'

export interface PopUpNavItemProps extends HTMLAttributes<HTMLElement> {
  /**
   * pop up type
   */
  type?: 'default' | 'header' | 'button' | 'special'

  /**
   * Force padding
   */
  padding?: boolean

  /**
   * flag to check pop up item is active
   */
  isActive?: boolean

  /**
   * text to show
   */
  label: string

  theme?: string

  /**
   * link to show
   */
  href?: string

  /**
   * Link Target
   */
  target?: string

  /**
   * child node
   */
  children?: React.ReactNode
}

/**
 * Primary UI component for user interaction
 */
export const PopUpNavItem = ({
  label = 'Link',
  theme = 'light',
  type = 'default',
  padding = true,
  href = null,
  target = null,
  isActive = false,
  children = [],
  className = '',
  ...rest
}: PopUpNavItemProps) => {
  const wrapperClasses = ['flex items-center']
  const linkClasses = [!padding && 'py-2.5']
  type === 'header' && linkClasses.push('cursor-default')
  switch (type) {
    case 'special':
      linkClasses.push('text-gray-100')
      if (isActive) {
        linkClasses.push('text-primary-300 dark:text-primary-300')
      } else {
        linkClasses.push('hover:text-primary-300', 'dark:text-gray-100', 'dark:hover:text-primary-300')
      }

      break
    case 'header':
      linkClasses.push('fontStyle-sm', 'uppercase', 'strong', 'text-gray-800', 'dark:text-gray-100', 'py-2.5')
      break
    case 'button':
      linkClasses.push(padding && 'py-3.5', 'fontStyle-xs uppercase strong')
      if (isActive) {
        linkClasses.push('text-primary-700 dark:text-primary-100')
      } else {
        linkClasses.push('text-primary-600', 'hover:text-primary-700', 'dark:text-primary-300', 'dark:hover:text-primary-100')
      }
      break
    case 'default':
    default:
      linkClasses.push('fontStyle-sm', padding && 'py-2.5')
      if (isActive) {
        linkClasses.push('text-primary-600 dark:text-primary-300')
      } else {
        linkClasses.push(theme === 'dark' ? 'text-gray-50' : 'text-gray-900', 'hover:text-primary-600', 'dark:hover:text-primary-300')
      }
      break
  }
  const labelId = makeRandomId()
  return (
    <div className={cn(wrapperClasses, className)} aria-labelledby={labelId} {...rest}>
      {type === 'header' ? (
        <Heading id={labelId} heading_text={label} heading_level="h3" heading_size="h3" className={cn(linkClasses)} />
      ) : href ? (
        <a id={labelId} target={target} className={cn(linkClasses)} href={href} dangerouslySetInnerHTML={{__html: label}} />
      ) : (
        <span id={labelId} className={cn(linkClasses, 'cursor-pointer')} dangerouslySetInnerHTML={{__html: label}} />
      )}
      {children ? children : ''}
    </div>
  )
}
