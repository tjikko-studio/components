import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {GenericMediaProps} from '../parts/Media'
import {Gallery, GalleryProps} from './Gallery'

export default {
  title: 'Tjikko/Blocks/Gallery',
  component: Gallery,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The gallery block',
    backgrounds: {
      default: 'dark background',
      values: [
        {
          name: 'dark background',
          value: '#000'
        }
      ]
    }
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-screen-lg">
        <Story />
      </div>
    )
  ]
} as Meta

const Template: Story<GalleryProps> = (args) => {
  return <Gallery {...args} />
}

const image: GenericMediaProps = {
  media: {
    type: 'image',
    id: 'https://via.placeholder.com/1.gif/111827/111827',
    link: 'https://via.placeholder.com/1.gif/111827/111827',
    url: 'https://via.placeholder.com/1.gif/111827/111827',
    extension: 'png',
    info: '{"alt": "Image alt text", "caption": "<p>Image caption text</p>"}'
  }
}

const video: GenericMediaProps = {
  media: {
    type: 'video',
    id: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    extension: 'mp4',
    info: '{"alt": "Video alt text", "caption": "<p>Video caption text</p>"}'
  },
  autoplay: false,
  muted: false,
  loop: false,
  controls: true
}

export const FourImages = Template.bind({})
FourImages.args = {
  content: [image, image, image, image],
  caption: 'Four images layout'
}

export const ThreeImages = Template.bind({})
ThreeImages.args = {
  content: [image, image, image],
  caption: 'Three images layout'
}

export const TwoImages = Template.bind({})
TwoImages.args = {
  content: [image, image],
  caption: 'Two images layout'
}

export const OneImage = Template.bind({})
OneImage.args = {
  content: [image],
  caption: 'One images layout'
}

export const SingleVideo = Template.bind({})
SingleVideo.args = {
  content: [video],
  caption: 'A simple video'
}
