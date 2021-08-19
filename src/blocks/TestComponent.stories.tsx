import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {TestComponent, TestComponentProps} from './TestComponent'

export default {
  title: 'Tjikko/Blocks/TestComponent',
  component: TestComponent,
  parameters: {
    componentSubtitle: 'The TestComponent'
  }
} as Meta

const Template: Story<TestComponentProps> = (args) => <TestComponent {...args} />

export const Default = Template.bind({})
Default.args = {}
