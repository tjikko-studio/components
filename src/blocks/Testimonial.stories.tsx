import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {Testimonial, TestimonialProps} from './Testimonial'

export default {
  title: 'Tjikko/Blocks/Testimonial',
  component: Testimonial,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The Testimonial'
  }
} as Meta

const Template: Story<TestimonialProps> = (args) => {
  return <Testimonial {...args} />
}

export const Default = Template.bind({})
const imgSpaceSize = 1000
Default.args = {
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  image: {
    url: `https://i.pravatar.cc/${Math.ceil(imgSpaceSize * Math.random())}`
  },
  title: 'Maria Lopez, VP of Design at Meshery'
}
