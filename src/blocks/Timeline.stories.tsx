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
          title: 'Item A1 header',
          subtitle: 'Item A1 subtitle',
          body: 'Item A1 body. This is usually a bit longer.',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        },
        {
          title: 'Item A2 header',
          subtitle: 'Item A2 subtitle',
          body: 'Item A2 body. This is usually a bit longer.',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        },
        {
          title: 'Item A2 header',
          subtitle: 'Item A2 subtitle',
          body: 'Item A2 body. This is usually a bit longer.',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        },
        {
          title: 'Item A2 header',
          subtitle: 'Item A2 subtitle',
          body: 'Item A2 body. This is usually a bit longer.',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        },
        {
          title: 'Item A2 header',
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
      header: 'Timeline header C',
      items: [
        {
          title: 'Item B1 header',
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
          title: 'Super long header here. Super long header here. Super long header here. Super long header here. Super long header here.',
          subtitle: 'Super long subtitle here. Super long subtitle here. Super long subtitle here. Super long subtitle here.',
          body: 'short',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        },
        {
          title: 'Nothing but an image',
          image: {
            type: 'image',
            url: 'https://via.placeholder.com/1.gif/111827/111827'
          }
        },
        {
          title: 'No image',
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

export const TimelineWithoutImages = Template.bind({})
TimelineWithoutImages.args = {
  content: [
    {
      header: 'Timeline header A',
      items: [
        {
          title: 'Item A1 header',
          subtitle: 'Item A1 subtitle',
          body: 'Item A1 body. This is usually a bit longer.'
        },
        {
          title: 'Item A2 header',
          subtitle: 'Item A2 subtitle',
          body: 'Item A2 body. This is usually a bit longer.'
        },
        {
          title: 'Item A2 header',
          subtitle: 'Item A2 subtitle',
          body: 'Item A2 body. This is usually a bit longer.'
        },
        {
          title: 'Item A2 header',
          subtitle: 'Item A2 subtitle',
          body: 'Item A2 body. This is usually a bit longer.'
        },
        {
          title: 'Item A2 header',
          subtitle: 'Item A2 subtitle',
          body: 'Item A2 body. This is usually a bit longer.'
        }
      ]
    },
    {
      header: 'Timeline header B',
      items: [
        {
          subtitle: 'Item B1 subtitle',
          body: 'Item B1 body. This is usually a bit longer.'
        },
        {
          body: 'Item B2 body. This is usually a bit longer.'
        }
      ]
    },
    {
      header: 'Timeline header C',
      items: [
        {
          title: 'Item B1 header',
          subtitle: 'Item B1 subtitle',
          body: 'Item B1 body. This is usually a bit longer.'
        }
      ]
    }
  ]
}
