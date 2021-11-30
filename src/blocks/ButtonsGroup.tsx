import React, {FC, HTMLAttributes} from 'react'
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
export const ButtonsGroup: FC<ButtonsGroupProps> = ({buttons = [], className = '', columnStart, columnEnd, fullWidth = false}) => {
  return (
    <div
      className={cn('inline-flex items-center gap-x-4', fullWidth ? 'w-full' : 'w-max', className)}
      style={gridAreas('control', columnStart, columnEnd)}
    >
      {buttons.map(({label, link, type, size}) => {
        return (
          <Button
            key={`[${label}](${parseLink(link).url})`}
            link={link}
            label={label}
            type={type}
            fullWidth={fullWidth}
            size={size ? size : 'default'}
            className={cn(fullWidth && 'w-full justify-center')}
          />
        )
      })}
    </div>
  )
}
