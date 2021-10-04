import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {TextArea, TextAreaProps} from './TextArea'

export default {
  title: 'Tjikko/Form Elements/TextArea',
  component: TextArea,
  parameters: {
    componentSubtitle: 'The Forms/TextArea'
  }
} as Meta

const Template: Story<TextAreaProps> = (args) => {
  return <TextArea {...args} />
}

export const Text = Template.bind({})
Text.args = {
  text: 'Text Area',
  placeholder: 'Placeholder',
  information: 'information',
  error: 'Error Message',
  label: 'Label'
}

export const Focused = Template.bind({})
Focused.args = {
  ...Text.args,
  isFocussed: true
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
  text: '',
  isDisabled: true
}
