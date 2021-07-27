import {Divider, DividerProps} from "./Divider"
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/nav/Divider',
  component: Divider,
  argTypes: {
  },
  parameters: {
    componentSubtitle: 'The Divider'
  },
  decorators : [
    (Story) => (
      <div className='max-w-screen-sm h-96'>
        <Story />
        <Story />
        <Story />
      </div>
    ),
  ]
} as Meta

const Template: Story<DividerProps> = (args) => <Divider {...args} />

export const Horizontal = Template.bind({})

Horizontal.args = {
  direction : "horizontal"
}

export const HorizontalDark = Template.bind({})
HorizontalDark.args = {
  direction : "horizontal",
  dark : true
}
HorizontalDark.parameters = {
  themes: { default: "Dark Mode" }
}

export const Vertical = Template.bind({})
Vertical.args = {
  direction : "vertical"
}

export const VerticalDark = Template.bind({})
VerticalDark.args = {
  direction : "vertical",
  dark : true
}
VerticalDark.parameters = {
  themes: { default: "Dark Mode" }
}