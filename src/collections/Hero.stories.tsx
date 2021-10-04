import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {Hero, HeroProps} from './Hero'

export default {
  title: 'Tjikko/Collections/Hero',
  component: Hero,
  argTypes: {},
  parameters: {
    componentSubtitle: 'Hero'
  }
} as Meta

const Template: Story<HeroProps> = (args) => {
  return <Hero {...args} />
}

export const Default = Template.bind({})
Default.args = {
  bgColor: 'dark|#171A22',
  bgType: 'video',
  bgHasImage: true,
  bgImage: {
    url: 'https://source.unsplash.com/random'
  },
  bgHasVideo: true,
  bgVideo: {
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  content: [
    {
      type: 'Heading',
      content: {
        level: 'h1',
        text: 'Hello you'
      }
    },
    {
      type: 'Text',
      content: {
        text: 'wonderful people'
      }
    },
    {
      type: 'ButtonsGroup',
      content: {
        buttons: [
          {
            label: 'Book a demo',
            link: '#'
          }
        ]
      }
    }
  ]
}
