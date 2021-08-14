import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {Input, InputProps} from './Input'

export default {
  title: 'Tjikko/Form Elements/Input',
  component: Input,
  parameters: {
    componentSubtitle: 'The Forms/Input',
  }
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Text = Template.bind({})
Text.args = {
  text: 'Input Text',
  placeholder: 'Placeholder',
  information: 'information',
  error: 'Error Message',
  label: 'Label',
}

export const Focused = Template.bind({})
Focused.args = {
  ...Text.args,
  isFocussed: true,
}

export const Error = Template.bind({})
Error.args = {
  ...Text.args,
  isError: true
}
export const Validate = Template.bind({})
Validate.args = {
  ...Text.args,
  isValidating: true
}
export const Success = Template.bind({})
Success.args = {
  ...Text.args,
  isSuccess: true
}
export const Disabled = Template.bind({})
Disabled.args = {
  ...Text.args,
  text: "",
  isDisabled: true
}
