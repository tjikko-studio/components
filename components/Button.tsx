import React, {FC, HTMLAttributes} from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * button type
   */
  type: 'primary' | 'secondary' | 'tertiary'
  /**
   * text to display on button
   */
  text?: string
  /**
   * icon position
   * only: show only icon with rounded button
   */
  icon?: 'right' | 'left' | 'only' | 'none'
  /**
   * icon size
   */
  size?: 'small' | 'default' | 'large'
  /**
   * button link
   */
  url?: string
  /**
   * force dark mode
   */
  forceDark?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
  type = 'primary',
  text = 'LABEL',
  size = 'default',
  url = '',
  forceDark = false
}) => {
  const buttonClasses = ['inline-flex', 'items-center', 'space-x-3', 'leading-0']
  const contentClasses = ['font-semibold', 'tracking-wide', 'uppercase']
  switch (type) {
    case 'primary':
      buttonClasses.push('rounded-lg')
      if (forceDark) {
        buttonClasses.push('bg-brand-400', 'hover:bg-brand-200')
        contentClasses.push('text-brand-900')
      } else {
        buttonClasses.push('bg-brand-600', 'hover:bg-brand-700', 'dark:bg-brand-400', 'dark:hover:bg-brand-200')
        contentClasses.push('text-white', 'dark:text-brand-900')
      }
      break
    case 'tertiary':
      buttonClasses.push('bg-none')
      if (forceDark) {
        contentClasses.push('text-brand-400', 'hover:text-brand-200')
      } else {
        contentClasses.push('text-brand-600', 'hover:text-brand-700', 'dark:text-brand-400', 'dark:hover:text-brand-200')
      }
      break
  }
  switch (size) {
    case 'small':
      buttonClasses.push('h-8', 'max-h-8', 'px-3.5', 'py-2.5')
      contentClasses.push('text-xxs')
      break
    case 'large':
      buttonClasses.push('h-12', 'max-h-12', 'py-4', 'px-5')
      contentClasses.push('text-sm')
      break
    case 'default':
    default:
      buttonClasses.push('h-10', 'max-h-10', 'px-4', 'py-3.5')
      contentClasses.push('text-xs')
  }
  const buttonClassesJoined = buttonClasses.join(' ')
  const Content = () => {
    return (
      <span
        className={contentClasses.join(' ')}
      >{text}</span>
    )
  }
  if (url)
    return (
      <a
        href={url}
        className={buttonClassesJoined}
      >
        <Content />
      </a>
    )

  if (!url)
    return (
      <button
        className={buttonClassesJoined}
      >
        <Content />
      </button>
    )

}
