import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

export interface PopUpNavItemProps extends HTMLAttributes<HTMLElement> {
  /**
   * pop up type
   */
  type: 'default' | 'header' | 'button' | 'special'

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

  /**
   * link to show
   */
  href?: string

  /**
   * child node
   */
  children?: React.ReactNode
}

/**
 * Primary UI component for user interaction
 */
export const PopUpNavItem: FC<PopUpNavItemProps> = ({
  label = 'link',
  type = 'default',
  padding = true,
  href = null,
  isActive = false,
  children = []
}) => {
  const wrapperClasses = ['flex items-center']
  const linkClasses = [!padding && 'py-2.5']
  type === 'header' && linkClasses.push('cursor-default')
  switch (type) {
    case 'special':
      linkClasses.push(...['fontStyle-base text-gray-100'])
      if (isActive) {
        linkClasses.push('text-primary-300 dark:text-primary-300')
      } else {
        linkClasses.push(...['hover:text-primary-300', 'dark:text-gray-100', 'dark:hover:text-primary-300'])
      }

      break
    case 'header':
      linkClasses.push(...['fontStyle-sm', 'uppercase', 'strong', 'text-gray-800', 'dark:text-gray-100', 'py-2.5'])
      break
    case 'button':
      linkClasses.push(...[padding && 'py-3.5', 'fontStyle-xs uppercase strong'])
      if (isActive) {
        linkClasses.push('text-primary-700 dark:text-primary-100')
      } else {
        linkClasses.push(...['text-primary-600', 'hover:text-primary-700', 'dark:text-primary-300', 'dark:hover:text-primary-100'])
      }
      break
    case 'default':
    default:
      linkClasses.push(...['fontStyle-sm', padding && 'py-2.5'])
      if (isActive) {
        linkClasses.push('text-primary-600 dark:text-primary-300')
      } else {
        linkClasses.push(...['hover:text-primary-600', 'dark:text-gray-100', 'dark:hover:text-primary-300'])
      }
      break
  }
  return (
    <div className={cn(wrapperClasses)} role={'navigation'} aria-label={label}>
      {type !== 'header' ? (
        href ? (
          <a className={cn(linkClasses)} href={href}>
            {label}
          </a>
        ) : (
          <span className={cn(linkClasses, 'cursor-pointer')}>{label}</span>
        )
      ) : (
        <h3 className={cn(linkClasses)}>{label}</h3>
      )}
      {children ? children : ''}
    </div>
  )
}
