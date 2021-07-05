import { Button, ButtonProps } from "./index"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Buttons',
  component: Button,
  argTypes: {
    type: { control: { type: "select", options: ["primary", "tertiary"] }},
    size: { control: { type: "select", options: ["small", "default", "large"] }}
  },
  parameters: {
    componentSubtitle: 'The Buttons'
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  type: "tertiary",
  text: 'LABEL',
  icon: 'none',
  size: "small"
}