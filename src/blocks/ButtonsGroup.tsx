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

  columnIndex?: number
}

const DEFAULT_COLUMN_INDEX = 1

/**
 * Primary UI component for user interaction
 */
export const ButtonsGroup: FC<ButtonsGroupProps> = ({buttons = [], className = '', columnIndex = DEFAULT_COLUMN_INDEX}) => {
  return (
    <div className={cn('inline-flex space-x-4 w-max', className)} style={{gridArea: `control-${columnIndex}`}}>
      {buttons.map(({link, label, type, iconPos, size, fullWidth}) => {
        return (
          <Button
            key={`[${label}](${link})`}
            link={link}
            label={label}
            type={type}
            iconPos={iconPos}
            size={size ? size : 'default'}
            className={cn(fullWidth && 'w-full justify-center')}
          />
        )
      })}
    </div>
  )
}
