// eslint-disable-next-line no-use-before-define
import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {Text, TextProps} from './Text'

export default {
  title: 'Tjikko/Blocks/Text',
  component: Text,
  argTypes: {

  },
  parameters: {
    componentSubtitle: 'Simple text'
  }
} as Meta

const Template: Story<TextProps> = (args) => {
  return <Text {...args} />
}

export const SimpleParagraph = Template.bind({})
SimpleParagraph.args = {
  tag: 'p',
  text: 'I am some text in a p tag'
}
export const PreCode = Template.bind({})
PreCode.args = {
  tag: 'pre',
  text: 'I am some code in a pre tag'
}

export const FormattedParagraph = Template.bind({})
FormattedParagraph.args = {
  tag: 'p',
  // eslint-disable-next-line max-len
  text: 'I am some <span class="underline bg-red-200" >formatted text</span > in a p tag'
}

export const RenderedHtml = Template.bind({})
RenderedHtml.args = {
  tag: 'div',
  // eslint-disable-next-line max-len
  text: '<p>I am some <strong>formated html text</strong></p> <p>in a div tag</p>'
}
