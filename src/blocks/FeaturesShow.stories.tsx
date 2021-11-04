import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {FeaturesShow, FeaturesShowProps} from './FeaturesShow'

export default {
  title: 'Tjikko/Blocks/FeaturesShow',
  component: FeaturesShow,
  argTypes: {},
  parameters: {
    componentSubtitle: 'FAQ'
  }
} as Meta

const Template: Story<FeaturesShowProps> = (args) => {
  return <FeaturesShow {...args} />
}

export const Default = Template.bind({})
Default.args = {
  header: [
    {
      content: {level: 'h2', alignment: '', text: 'All the right features for your sales team'},
      id: '136c0707-a321-4531-b798-b18691e0c0de',
      type: 'Heading'
    }
  ],
  items: [
    {
      image: [
        {
          id: 'first-image',
          url: 'https://via.placeholder.com/1.gif'
        }
      ],
      info_boxes: [
        {
          title: '<p>A/01. Some great feature</p>',
          body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do eiusmod tempor incididunt ut labore.</p>',
          position: 'top|right'
        },
        {
          title: '<p>A/02. Some bigger feature</p>',
          body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do eiusmod tempor incididunt ut labore.</p>',
          position: 'center|left'
        },
        {
          title: '<p>A/03. Some amazing feature</p>',
          body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do eiusmod tempor incididunt ut labore.</p>',
          position: 'bottom|right'
        }
      ]
    },
    {
      image: [
        {
          id: 'second-image',
          url: 'https://via.placeholder.com/1.gif'
        }
      ],
      info_boxes: [
        {
          title: '<p>B/01. Some great feature</p>',
          body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do eiusmod tempor incididunt ut labore.</p>',
          position: 'top|right'
        },
        {
          title: '<p>B/02. Some bigger feature</p>',
          body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do eiusmod tempor incididunt ut labore.</p>',
          position: 'center|left'
        },
        {
          title: '<p>B/03. Some amazing feature</p>',
          body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do eiusmod tempor incididunt ut labore.</p>',
          position: 'bottom|right'
        }
      ]
    }
  ]
}
