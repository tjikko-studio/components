import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import getLink, {getTarget} from '../utilities/getLink'

import {LinkObject} from '../shared/types'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  /**
   * button type
   */
  type?: 'primary' | 'secondary' | 'tertiary'
  /**
   * text to display on button
   */
  label?: string

  /**
   * button size
   */
  size?: 'default' | 'large' | 'small'

  /**
   * Is the button full width
   */
  fullWidth?: boolean

  /**
   * button link
   */
  link?: LinkObject

  /**
   * apply the dark theme whether in dark or light mode
   */
  forceDark?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
  type = 'primary',
  label = 'Button',
  size = 'default',
  link = null,
  className = '',
  forceDark = false,
  fullWidth = false,
  onClick
}) => {
  const buttonType = type || 'primary'
  const buttonClasses = ['inline-flex items-center gap-x-3 whitespace-nowrap']
  const contentClasses = ['']
  const styles = {
    primary: (isForceDark: boolean) => {
      const newClasses = ['rounded-lg']
      if (isForceDark) {
        newClasses.push('bg-primary-400', 'hover:bg-primary-200')
        newClasses.push('text-primary-900')
      } else {
        newClasses.push('bg-primary-600', 'hover:bg-primary-700', 'dark:bg-primary-400', 'dark:hover:bg-primary-200')
        newClasses.push('text-white', 'dark:text-primary-900')
      }
      return newClasses
    },
    secondary: (isForceDark: boolean) => {
      const newClasses = ['bg-none rounded-lg border border-solid']
      if (isForceDark) {
        newClasses.push('border-primary-400 hover:border-primary-200')
        newClasses.push('text-primary-400 hover:text-primary-200')
      } else {
        newClasses.push('border-primary-600', 'hover:border-primary-800', 'dark:border-primary-300', 'dark:hover:border-primary-100')
        newClasses.push('text-primary-600', 'hover:text-primary-800', 'dark:text-primary-300', 'dark:hover:text-primary-100')
      }
      return newClasses
    },
    tertiary: (isForceDark: boolean) => {
      const newClasses = ['bg-none']
      if (isForceDark) {
        newClasses.push('text-primary-400 hover:text-primary-200')
      } else {
        newClasses.push('text-primary-600', 'hover:text-primary-700', 'dark:text-primary-400', 'dark:hover:text-primary-200')
      }
      return newClasses
    }
  }
  fullWidth && buttonClasses.push('w-full justify-center')
  buttonClasses.push(...styles[buttonType](forceDark))
  switch (size) {
    case 'small':
      buttonClasses.push('h-8 max-h-8 py-2.5')
      contentClasses.push('fontStyle-button-sm')
      if (buttonType !== 'tertiary') {
        buttonClasses.push('px-3.5')
      }
      break
    case 'large':
      buttonClasses.push('h-12 max-h-12 py-4')
      if (buttonType !== 'tertiary') {
        buttonClasses.push('px-5')
      }
      contentClasses.push('fontStyle-button-lg')
      break
    case 'default':
    default:
      buttonClasses.push('h-10 max-h-10 py-3.5')
      if (buttonType !== 'tertiary') {
        buttonClasses.push('px-4')
      }
      contentClasses.push('fontStyle-button-base')
  }
  buttonClasses.push(className)
  const Content = () => {
    if (label) {
      return <span className={cn(contentClasses)}>{label}</span>
    }
    return null
  }
  if (link?.value) {
    return (
      <a onClick={onClick} href={getLink(link)} target={getTarget(link)} className={cn(buttonClasses)}>
        <Content />
      </a>
    )
  }
  return (
    <button onClick={onClick} className={cn(buttonClasses)}>
      <Content />
    </button>
  )
}
