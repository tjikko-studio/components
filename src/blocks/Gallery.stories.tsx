import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

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
  }
} as Meta

const Template: Story<GalleryProps> = (args) => {
  return <Gallery {...args} />
}

const images = [
  {
    mediatype: 'image',
    image: {
      type: 'image',
      id: 'portfolio/sp-condos/my-image-01.png',
      url: 'https://via.placeholder.com/1.gif/111827/111827',
      extension: 'png',
      content: {
        caption: '<p>Image 01 caption text</p>',
        alt: 'Image 01 alt text',
        creator: '',
        license: '',
      },
      dimensions: {
        width: 4000,
        height: 2400,
        ratio: 1.6666666666666667,
        orientation: 'landscape'
      },
      gallery: true
    }
  },
  {
    mediatype: 'image',
    image: {
      type: 'image',
      id: 'portfolio/sp-condos/my-image-02.png',
      url: 'https://via.placeholder.com/1.gif/111827/111827',
      extension: 'png',
      content: {
        caption: '<p>Image 02 caption text</p>',
        alt: 'Image 02 alt text',
        creator: '',
        license: ''
      },
      dimensions: {
        width: 4000,
        height: 2400,
        ratio: 1.6666666666666667,
        orientation: 'landscape'
      },
      gallery: true
    }
  },
  {
    mediatype: 'image',
    image: {
      type: 'image',
      id: 'portfolio/sp-condos/my-image-03.png',
      url: 'https://via.placeholder.com/1.gif/111827/111827',
      extension: 'png',
      content: {
        caption: '<p>Image 03 caption text</p>',
        alt: 'Image 03 alt text',
        creator: '',
        license: ''
      },
      dimensions: {
        width: 4000,
        height: 2400,
        ratio: 1.6666666666666667,
        orientation: 'landscape'
      },
      gallery: true
    }
  },
  {
    mediatype: 'image',
    image: {
      type: 'image',
      id: 'portfolio/sp-condos/my-image-04.png',
      url: 'https://via.placeholder.com/1.gif/111827/111827',
      extension: 'png',
      content: {
        caption: '<p>Image 04 caption text</p>',
        alt: 'Image 04 alt text',
        creator: '',
        license: ''
      },
      dimensions: {
        width: 4000,
        height: 2400,
        ratio: 1.6666666666666667,
        orientation: 'landscape'
      },
      gallery: true
    }
  }
]

const simpleVideo = [
  {
    mediatype: 'video',
    autoplay: false,
    controls: true,
    loop: false,
    muted: false,
    image: {
      type: 'video',
      id: 'BigBuckBunny.png',
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      extension: 'mp4',
      content: {
        caption: '',
        alt: 'Big Buck Bunny animation video',
        creator: '',
        license: ''
      },
      dimensions: {
        width: 4000,
        height: 2400,
        ratio: 1.6666666666666667,
        orientation: 'landscape'
      },
      gallery: true
    }
  }
]

const oneImage = images.slice(0, 1)
const twoImages = images.slice(0, 2)
const threeImages = images.slice(0, 3)
const fourImages = images

export const FourImages = Template.bind({})
FourImages.args = {
  content: fourImages,
  caption: 'Four images layout'
}

export const ThreeImages = Template.bind({})
ThreeImages.args = {
  content: threeImages,
  caption: 'Three images layout'
}

export const TwoImages = Template.bind({})
TwoImages.args = {
  content: twoImages,
  caption: 'Two images layout'
}

export const OneImage = Template.bind({})
OneImage.args = {
  content: oneImage,
  caption: 'One images layout'
}

export const SingleVideo = Template.bind({})
SingleVideo.args = {
  content: simpleVideo,
  caption: 'A simple video'
}
