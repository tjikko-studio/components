import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import parseLink from '../utilities/parseLink'

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

  color?: string
  hover_color?: string
  text_color?: string
  hover_text?: string
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
  onClick,
  color,
  hover_color,
  text_color,
  hover_text
}) => {
  const buttonType = type || 'primary'
  const buttonClasses = ['inline-flex items-center gap-x-3 my-1']
  const contentClasses = ['']
  const styles = {
    primary: (isForceDark: boolean) => {
      const newClasses = ['rounded-lg']
      if (isForceDark) {
        newClasses.push(cn({'bg-primary-400': !color, 'hover:bg-primary-200': !hover_color}))
        newClasses.push(cn({'text-primary-900': !text_color}))
      } else {
        newClasses.push(
          cn({
            'bg-primary-600': !color,
            'hover:bg-primary-700': !hover_color,
            'dark:bg-primary-400': !color,
            'dark:hover:bg-primary-200': !hover_color
          })
        )
        newClasses.push(cn({'text-white': !text_color, 'dark:text-primary-900': !text_color}))
      }
      return newClasses
    },
    secondary: (isForceDark: boolean) => {
      const newClasses = ['bg-none rounded-lg border border-solid']
      if (isForceDark) {
        newClasses.push(cn({'border-primary-400': !color, 'hover:border-primary-200': !hover_color}))
        newClasses.push(cn({'text-primary-400': !text_color, 'hover:text-primary-200': !hover_text}))
      } else {
        newClasses.push(
          cn({
            'border-primary-600': !color,
            'hover:border-primary-800': !hover_color,
            'dark:border-primary-300': !color,
            'dark:hover:border-primary-100': !hover_color
          })
        )
        newClasses.push(
          cn({
            'text-primary-600': !text_color,
            'hover:text-primary-800': !hover_text,
            'dark:text-primary-300': !text_color,
            'dark:hover:text-primary-100': !hover_text
          })
        )
      }
      return newClasses
    },
    tertiary: (isForceDark: boolean) => {
      const newClasses = ['bg-none']
      if (isForceDark) {
        newClasses.push(cn({'text-primary-400': !text_color, 'hover:text-primary-200': !hover_text}))
      } else {
        newClasses.push(
          cn({
            'text-primary-600': !text_color,
            'hover:text-primary-700': !hover_text,
            'dark:text-primary-400': !text_color,
            'dark:hover:text-primary-200': !hover_text
          })
        )
      }
      return newClasses
    }
  }
  fullWidth && buttonClasses.push('w-full justify-center')
  buttonClasses.push(...styles[buttonType](forceDark))
  switch (size) {
    case 'small':
      buttonClasses.push('min-h-8 py-2.5')
      contentClasses.push('fontStyle-button-sm')
      if (buttonType !== 'tertiary') {
        buttonClasses.push('px-3.5')
      }
      break
    case 'large':
      buttonClasses.push('min-h-12 py-4')
      if (buttonType !== 'tertiary') {
        buttonClasses.push('px-5')
      }
      contentClasses.push('fontStyle-button-lg')
      break
    case 'default':
    default:
      buttonClasses.push('xs:min-h-10 py-3.5')
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
  buttonClasses.push('hoverColorFix', 'hoverTextFix', 'hoverBorderFix')
  const buttonStyle = {
    '--hover-color': buttonType === 'primary' ? hover_color : undefined,
    '--hover-text': hover_text,
    '--hover-border': buttonType !== 'tertiary' ? hover_color : undefined,
    color: text_color,
    backgroundColor: buttonType === 'primary' ? color : undefined,
    borderColor: buttonType !== 'tertiary' ? color : undefined
  }
  if (link?.value) {
    const {url, target} = parseLink(link)
    return (
      <a onClick={onClick} href={url} target={target} className={cn(buttonClasses)} style={buttonStyle}>
        <Content />
      </a>
    )
  }
  return (
    <button onClick={onClick} className={cn(buttonClasses)} style={buttonStyle}>
      <Content />
    </button>
  )
}
