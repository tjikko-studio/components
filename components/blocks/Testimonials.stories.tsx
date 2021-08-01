import {Testimonials, TestimonialsProps} from "./Testimonials"
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/blocks/Testimonials',
  component: Testimonials,
  argTypes: {

  },
  parameters: {
    componentSubtitle: 'The Testimonials'
  }
} as Meta

const Template: Story<TestimonialsProps> = (args) => <Testimonials {...args} />

export const Default = Template.bind({})
Default.args = {
  speech: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  avatarUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`,
  customerName: "Maria Lopez, VP of Design at Meshery",
}
