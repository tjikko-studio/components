import {Divider, DividerProps} from "./Divider"
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/nav/Divider',
  component: Divider,
  argTypes: {
  },
  parameters: {
    componentSubtitle: 'The Divider'
  }
} as Meta

const Template: Story<DividerProps> = (args) => <Divider {...args} />

export const Default = Template.bind({})