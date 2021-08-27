import React from 'react'
import {Hero, HeroProps} from './Hero'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Collections/Hero',
  component: Hero,
  argTypes: {

  },
  parameters: {
    componentSubtitle: 'Hero'
  }
} as Meta

const Template: Story<HeroProps> = (args) => <Hero {...args} />

export const Default = Template.bind({})
Default.args = {
  bgColor: '#000',
  bgType: 'video',
  bgHasImage: true,
  bgImage:{
    url: 'https://source.unsplash.com/random'
  },
  bgHasVideo: true,
  bgVideo:{
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  content: [
    {
      type: 'Heading',
      content: {
        level: 'h1',
        text: 'Hello you',
      }
    },
    {
      type: 'Text',
      content: {
        text: 'wonderful people',
      }
    },
    {
      type: 'ButtonsGroup',
      content: {
        buttons: [{
          label: 'Book a demo',
          link: '#'
        }]
      }
    }
  ]
}
