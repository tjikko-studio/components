import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import {gridAreas} from '../../utilities/gridAreas'
import parseLink from '../../utilities/parseLink'
import {Button, ButtonProps} from '../Button'

export interface ButtonsGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Buttons object that will be parsed through to build the component
   */
  buttons?: ButtonProps[]

  /**
   * className override
   */
  className?: string

  /**
   * className override
   */
  fullWidth?: boolean

  columnStart?: number
  columnEnd?: number
}

/**
 * Primary UI component for user interaction
 */
export const ButtonsGroup = ({buttons = [], className = '', columnStart, columnEnd, fullWidth = false}: ButtonsGroupProps) => {
  return (
    <div className={cn('inline-flex flex-wrap items-center gap-x-4', className)} style={gridAreas('control', columnStart, columnEnd)}>
      {buttons.map(({label, link, type, size, color, hover_color, text_color, hover_text}) => {
        return (
          <Button
            key={`[${label}](${parseLink(link).url})`}
            link={link}
            label={label}
            type={type}
            fullWidth={fullWidth}
            size={size ? size : 'default'}
            className={cn(fullWidth && 'w-full justify-center')}
            color={color}
            hover_color={hover_color}
            text_color={text_color}
            hover_text={hover_text}
          />
        )
      })}
    </div>
  )
}
