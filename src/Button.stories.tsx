import React from 'react'
import {Button, ButtonProps} from './Button'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Buttons',
  component: Button,
  argTypes: {
    type: {options: ['primary', 'secondary', 'tertiary'], control: {type: 'select'}},
    size: {options: ['small', 'default', 'large'], control: {type: 'select'}},
    forceDark: {control: {type: 'boolean'}}
  },
  parameters: {
    componentSubtitle: 'The Buttons'
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  text: 'Primary Button',
  url: '',
  icon: 'none',
  size: 'default',
  forceDark: false
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  type: 'secondary',
  text: 'Secondary Button'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  ...Primary.args,
  type: 'tertiary',
  text: 'Tertiary Button'
}
