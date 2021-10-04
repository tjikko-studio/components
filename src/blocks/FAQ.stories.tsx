import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {FAQ, FAQProps} from './FAQ'

export default {
  title: 'Tjikko/Blocks/FAQ',
  component: FAQ,
  argTypes: {},
  parameters: {
    componentSubtitle: 'FAQ'
  }
} as Meta

const Template: Story<FAQProps> = (args) => {
  return <FAQ {...args} />
}

export const Default = Template.bind({})
Default.args = {
  content: [
    {
      question: "What's a good first question?",
      answer: 'Something polite to break the ice.'
    },
    {
      question:
        "Here is an example of a very long question combined with an extremely small answer which does sometimes happen although I wouldn't really expect it to be that frequent in the end", // eslint-disable-line max-len
      answer: 'Indeed'
    },
    {
      question: 'Short Question',
      answer:
        'Quite a long answer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor.  Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.' // eslint-disable-line max-len
    }
  ]
}
