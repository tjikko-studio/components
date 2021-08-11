import {Text, TextProps} from './Text'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Blocks/Text',
  component: Text,
  argTypes: {
    
  },
  parameters: {
    componentSubtitle: 'Simple text'
  }
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const SimpleParagraph = Template.bind({})
SimpleParagraph.args = {
  tag: 'p',
  text: 'I am some text in a p tag',
}

export const PreCode = Template.bind({})
PreCode.args = {
  tag: 'pre',
  text: 'I am some code in a pre tag',
}

export const FormatedParagraph = Template.bind({})
FormatedParagraph.args = {
  tag: 'p',
  text: 'I am some <span class="underline bg-red-200" >formated text</span > in a p tag',
}

export const RenderedHtml = Template.bind({})
RenderedHtml.args = {
  tag: 'div',
  text: '<p>I am some <strong>formated html text</strong></p> <p>in a div tag</p>',
}
