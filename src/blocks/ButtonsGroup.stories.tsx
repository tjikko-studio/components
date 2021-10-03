import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {ButtonsGroup, ButtonsGroupProps} from './ButtonsGroup'

export default {
  title: 'Tjikko/Blocks/Buttons Group',
  component: ButtonsGroup,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The Button Group'
  }
} as Meta

const Template: Story<ButtonsGroupProps> = (args) => {
  return <ButtonsGroup {...args} />
}

export const Default = Template.bind({})

Default.args = {
  buttons: [
    {
      label: 'Primary button',
      link: '#'
    },
    {
      label: 'Secondary button',
      link: '#',
      type: 'secondary'
    }
  ]
}
