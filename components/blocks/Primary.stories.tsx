import {Primary, PrimaryProps} from "./Primary"
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/blocks/Primary',
  component: Primary,
  argTypes: {
    type: {options: ["default", "vertical"], control: {type: "select"}},
    mirror: {control: {type: "boolean"}},
  },
  parameters: {
    componentSubtitle: 'The Primary block'
  }
} as Meta

const Template: Story<PrimaryProps> = (args) => <Primary {...args} />

export const Default = Template.bind({})
Default.args = {
  type: "default",
  mirror: false,
  imageUrl: "https://source.unsplash.com/random",
  head: "Heading",
  text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.",
  cta_name: 'cta text',
  cta_url: '/ctatext'
}
export const WidthControl = Template.bind({})
WidthControl.args = {
  className: "w-full",
  ...Default.args
}
