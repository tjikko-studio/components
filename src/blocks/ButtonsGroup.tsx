import React, {FC, HTMLAttributes} from 'react'
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
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const ButtonsGroup: FC<ButtonsGroupProps> = ({
  buttons,
  className = ''
}) => {
  return (
    <div className={`inline-flex space-x-4  ${className}`}>
      {buttons.map(({link, label, type, iconPos, size, fullWidth}, index) => (
        <Button
          link={link}
          label={label}
          type={(index === 0) ? type ? type : 'primary' : type ? type : 'tertiary'}
          iconPos={iconPos}
          size={size ? size : 'default'}
          className={`${fullWidth && 'w-full justify-center'}`}
        />
      ))}
    </div>
  )
}
