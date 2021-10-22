import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {Calendly, CalendlyProps} from './Calendly'

export default {
  title: 'Tjikko/Blocks/Calendly',
  component: Calendly,
  argTypes: {},
  parameters: {
    componentSubtitle: 'Calendly'
  }
} as Meta

const Template: Story<CalendlyProps> = (args) => {
  return <Calendly {...args} />
}

export const Default = Template.bind({})
Default.args = {}
