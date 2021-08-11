import {Text, TextProps} from './Text'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Blocks/Text',
  component: Text,
  argTypes: {
    
  },
  parameters: {
    componentSubtitle: 'The Text'
  }
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Hello',
}
