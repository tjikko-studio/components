import React, { FC, HTMLAttributes } from 'react'
import { Button } from '../Button'

export interface ButtonsGroupType {
  type?:  'primary' | 'secondary' | 'tertiary'
  label?: string
  iconPos?: 'right' | 'left' | 'only' | 'none'
  icon?: string
  size?: 'default' | 'large' | 'small'
  link?:  string
  forceDark?: boolean
}

export interface ButtonsGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Action buttons / links
   */
  buttons?: ButtonsGroupType[]
}

/**
 * Primary UI component for user interaction
 */
export const ButtonsGroup: FC<ButtonsGroupProps> = ({
  buttons = []
}) => {
  return (
    <div className="inline-flex space-x-4">
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
