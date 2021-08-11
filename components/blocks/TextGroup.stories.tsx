import { TextGroup, TextGroupProps } from './TextGroup'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Blocks/Text group',
  component: TextGroup,
  argTypes: {
    // type: { options: ['default', 'header', 'button', 'special'], control: { type: 'select' }},
  },
  parameters: {
    componentSubtitle: 'The text group block',
    backgrounds: {
      default: 'dark background',
      values: [
        {
          name: 'dark background',
          value: '#000'
        }
      ]
    }
  }
} as Meta

const Template: Story<TextGroupProps> = (args) => <TextGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  className: 'w-80 h-52',
  title: '01. HEADING',
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscig elit ed do elusmod tempor incidedunt ut laborre et dolore magna aliqua'
}
Default.parameters = {
  themes: { default: 'Dark Mode' }
}
