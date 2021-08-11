import React, { FC, HTMLAttributes } from 'react'
import { Button } from '../Button'

export interface ButtonsGroupProps extends HTMLAttributes<HTMLDivElement> {
  buttons?: {}
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const ButtonsGroup: FC<ButtonsGroupProps> = ({
  buttons,
  className
}) => {
  return (
    
    <div className={`inline-flex space-x-4  ${className}`}>
    { buttons.map((buttonData, index) => (
      <Button
        link={buttonData.link}
        label={buttonData.label}
        type={(index === 0  ) ? buttonData.type ? buttonData.type : 'primary' : buttonData.type ? buttonData.type : 'tertiary'}
        iconPos={buttonData.iconPos ? buttonData.iconPos : 'none'}
        size={buttonData.size ? buttonData.size : 'default'}
      />
    )) }
    </div>
  )
}

