import {Heading, HeadingProps} from './Heading'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Blocks/Heading',
  component: Heading,
  argTypes: {
    level: {options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], control: {type: 'select'}},
  },
  parameters: {
    componentSubtitle: 'The Heading'
  }
} as Meta

const Template: Story<HeadingProps> = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  level: 'h1',
  text: 'Hello',
}
