import React, {FC, HTMLAttributes} from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * button type
   */
  type?: 'primary' | 'secondary' | 'tertiary'
  /**
   * text to display on button
   */
   label?: string
   /**
    * icon position
    */
   iconPos?: 'right' | 'left'
   /**
    * icon image
    */
   icon?: string
  /**
   * icon size
   */
  size?: 'default' | 'large' | 'small'
  /**
   * button link
   */
  link?: string
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
  label = 'LABEL',
  size = 'default',
  icon = '',
  link = '',
  forceDark = false
}) => {
  const buttonClasses = ['inline-flex items-center space-x-3']
  const contentClasses = ['']
  switch (type) {
    case 'primary':
      buttonClasses.push('rounded-lg')
      if (forceDark) {
        buttonClasses.push('bg-primary-400 hover:bg-primary-200')
        buttonClasses.push('text-primary-900')
      } else {
        buttonClasses.push('bg-primary-600 hover:bg-primary-700 dark:bg-primary-400 dark:hover:bg-primary-200')
        buttonClasses.push('text-white dark:text-primary-900')
      }
      break
    case 'secondary':
      buttonClasses.push('bg-none rounded-lg border')
      if (forceDark) {
        buttonClasses.push('border-primary-400 hover:border-primary-200')
        buttonClasses.push('text-primary-400 hover:text-primary-200')
      } else {
        buttonClasses.push('border-primary-600 hover:border-primary-800 dark:border-primary-300  dark:hover:border-primary-100')
        buttonClasses.push('text-primary-600 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-100')
      }
      break
    case 'tertiary':
      buttonClasses.push('bg-none')
      if (forceDark) {
        buttonClasses.push('text-primary-400 hover:text-primary-200')
      } else {
        buttonClasses.push('text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-200')
      }
      break
  }
  switch (size) {
    case 'small':
      buttonClasses.push('h-8 max-h-8 py-2.5')
      contentClasses.push('fontStyle-button-sm')
      type != 'tertiary' && buttonClasses.push('px-3.5')
      break
    case 'large':
      buttonClasses.push('h-12 max-h-12 py-4')
      type != 'tertiary' && buttonClasses.push('px-5')
      contentClasses.push('fontStyle-button-lg')
      break
    case 'default':
    default:
      buttonClasses.push('h-10 max-h-10 py-3.5')
      type != 'tertiary' && buttonClasses.push('px-4')
      contentClasses.push('fontStyle-button-base')
  }
  const buttonClassesJoined = buttonClasses.join(' ')
  const Content = () => {
    if (label) {
      return ( 
        <span
          className={contentClasses.join(' ')}
        >{label}</span>
      )
    }
  }
  /* const Icon = () => {
    if (icon) {
      return ( 
        <span />
      )
    } else {
      return ''
    }
  } */
  if (link) {
    return (
      <a
        href={link}
        className={buttonClassesJoined}
      >
        <Content />
      </a>
    )
  } else {
    return (
      <button
        className={buttonClassesJoined}
      >
        <Content />
      </button>
    )
  }
}
