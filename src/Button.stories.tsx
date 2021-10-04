import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {Button, ButtonProps} from './Button'

export default {
  title: 'Tjikko/Buttons',
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {type: 'select'}
    },
    size: {
      options: ['small', 'default', 'large'],
      control: {type: 'select'}
    },
    forceDark: {
      control: {type: 'boolean'}
    }
  },
  parameters: {
    componentSubtitle: 'The Buttons'
  }
} as Meta

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  label: 'Primary Button',
  size: 'default',
  icon: '',
  iconPos: 'left',
  link: '',
  className: '',
  forceDark: false
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  type: 'secondary',
  label: 'Secondary Button'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  ...Primary.args,
  type: 'tertiary',
  label: 'Tertiary Button'
}
