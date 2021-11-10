import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {Timeline, TimelineProps} from './Timeline'

export default {
  title: 'Tjikko/Blocks/Timeline',
  component: Timeline
} as Meta

const Template: Story<TimelineProps> = (args) => {
  return <Timeline {...args} />
}

export const SimpleTimeline = Template.bind({})
SimpleTimeline.args = {
  content: [
    {
      header: 'Timeline header A',
      items: [
        {
          header: 'Item A1 header',
          subtitle: 'Item A1 subtitle',
          body: 'Item A1 body. This is usually a bit longer.',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        },
        {
          header: 'Item A2 header',
          subtitle: 'Item A2 subtitle',
          body: 'Item A2 body. This is usually a bit longer.',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        },
        {
          header: 'Item A2 header',
          subtitle: 'Item A2 subtitle',
          body: 'Item A2 body. This is usually a bit longer.',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        },
        {
          header: 'Item A2 header',
          subtitle: 'Item A2 subtitle',
          body: 'Item A2 body. This is usually a bit longer.',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        },
        {
          header: 'Item A2 header',
          subtitle: 'Item A2 subtitle',
          body: 'Item A2 body. This is usually a bit longer.',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        }
      ]
    },
    {
      header: 'Timeline header B',
      items: [
        {
          subtitle: 'Item B1 subtitle',
          body: 'Item B1 body. This is usually a bit longer.',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        },
        {
          body: 'Item B2 body. This is usually a bit longer.',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        }
      ]
    },
    {
      header: 'Timeline header B',
      items: [
        {
          header: 'Item B1 header',
          subtitle: 'Item B1 subtitle',
          body: 'Item B1 body. This is usually a bit longer.',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        }
      ]
    }
  ]
}

export const CornerCasesTimeline = Template.bind({})
CornerCasesTimeline.args = {
  content: [
    {
      header: 'Super long header here. Super long header here. Super long header here. Super long header here. Super long header here.',
      items: [
        {
          header: 'Super long header here. Super long header here. Super long header here. Super long header here. Super long header here.',
          subtitle: 'Super long subtitle here. Super long subtitle here. Super long subtitle here. Super long subtitle here.',
          body: 'short',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        },
        {
          header: 'Nothing but an image',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        },
        {
          header: 'No image',
          subtitle: 'Subtitle',
          body: 'But a rather long body. But a rather long body. But a rather long body. But a rather long body. But a rather long body.'
        },
        {
          subtitle: 'Subtitle',
          body: 'This one is without a header!',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        }
      ]
    }
  ]
}
