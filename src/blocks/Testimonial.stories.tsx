// eslint-disable-next-line no-use-before-define
import React from 'react'
import {Testimonial, TestimonialProps} from './Testimonial'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Blocks/Testimonial',
  component: Testimonial,
  argTypes: {

  },
  parameters: {
    componentSubtitle: 'The Testimonial'
  }
} as Meta

const Template: Story<TestimonialProps> = (args) => {
  return <Testimonial {...args} />
}

export const Default = Template.bind({})
Default.args = {
  // eslint-disable-next-line max-len
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  image: {
    url: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`
  },
  title: 'Maria Lopez, VP of Design at Meshery'
}
