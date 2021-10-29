import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import {Button, ButtonProps} from '../Button'

export interface GroupButtonProps extends ButtonProps {
  fullWidth: boolean
}

export interface ButtonsGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Buttons object that will be parsed through to build the component
   */
  buttons?: GroupButtonProps[]

  /**
   * className override
   */
  className?: string

  /**
   * className override
   */
  fullWidth?: boolean

  columnIndex?: number
}

const DEFAULT_COLUMN_INDEX = 1

/**
 * Primary UI component for user interaction
 */
export const ButtonsGroup: FC<ButtonsGroupProps> = (
  {buttons, className, columnIndex, fullWidth} = {
    buttons: [],
    className: '',
    columnIndex: DEFAULT_COLUMN_INDEX,
    fullWidth: false
  }
) => {
  return (
    <div
      className={cn('inline-flex items-center space-x-4', fullWidth ? 'w-full' : 'w-max', className)}
      style={{gridArea: `control-${columnIndex}`}}
    >
      {buttons.map(({label, link, type, iconPos, size}) => {
        return (
          <Button
            key={`[${label}](${link})`}
            link={link}
            label={label}
            type={type}
            iconPos={iconPos}
            fullWidth={fullWidth}
            size={size ? size : 'default'}
            className={cn(fullWidth && 'w-full justify-center')}
          />
        )
      })}
    </div>
  )
}
