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
    type: 'image',
    id: 'portfolio/sp-condos/my-image-01.png',
    link: '/pages/portfolio+sp-condos/files/my-image-01.png',
    url: 'http://127.0.0.1:8000/media/pages/portfolio/sp-condos/f711f48074-1635204716/my-image-01.png',
    extension: 'png',
    content: {
      caption: '<p>Image 01 caption text</p>',
      alt: 'Image 01 alt text',
      creator: '',
      license: '',
      link: ''
    },
    dimensions: {
      width: 4000,
      height: 2400,
      ratio: 1.6666666666666667,
      orientation: 'landscape'
    },
    gallery: true
  },
  {
    type: 'image',
    id: 'portfolio/sp-condos/my-image-02.png',
    link: '/pages/portfolio+sp-condos/files/my-image-02.png',
    url: 'http://127.0.0.1:8000/media/pages/portfolio/sp-condos/42a5a4accd-1635204716/my-image-02.png',
    extension: 'png',
    content: {
      caption: '<p>Image 02 caption text</p>',
      alt: 'Image 02 alt text',
      creator: '',
      license: '',
      link: ''
    },
    dimensions: {
      width: 4000,
      height: 2400,
      ratio: 1.6666666666666667,
      orientation: 'landscape'
    },
    gallery: true
  },
  {
    type: 'image',
    id: 'portfolio/sp-condos/my-image-03.png',
    link: '/pages/portfolio+sp-condos/files/my-image-03.png',
    url: 'http://127.0.0.1:8000/media/pages/portfolio/sp-condos/7a4944e872-1635204716/my-image-03.png',
    extension: 'png',
    content: {
      caption: '<p>Image 03 caption text</p>',
      alt: 'Image 03 alt text',
      creator: '',
      license: '',
      link: ''
    },
    dimensions: {
      width: 4000,
      height: 2400,
      ratio: 1.6666666666666667,
      orientation: 'landscape'
    },
    gallery: true
  },
  {
    type: 'image',
    id: 'portfolio/sp-condos/my-image-04.png',
    link: '/pages/portfolio+sp-condos/files/my-image-04.png',
    url: 'http://127.0.0.1:8000/media/pages/portfolio/sp-condos/614f34d975-1635204716/my-image-04.png',
    extension: 'png',
    content: {
      caption: '<p>Image 04 caption text</p>',
      alt: 'Image 04 alt text',
      creator: '',
      license: '',
      link: ''
    },
    dimensions: {
      width: 4000,
      height: 2400,
      ratio: 1.6666666666666667,
      orientation: 'landscape'
    },
    gallery: true
  }
]
const oneImage = images.slice(0, 1)
const twoImages = images.slice(0, 2)
const threeImages = images.slice(0, 3)
const fourImages = images

export const FourImages = Template.bind({})
FourImages.args = {
  images: fourImages,
  caption: 'Four images layout'
}

export const ThreeImages = Template.bind({})
ThreeImages.args = {
  images: threeImages,
  caption: 'Three images layout'
}

export const TwoImages = Template.bind({})
TwoImages.args = {
  images: twoImages,
  caption: 'Two images layout'
}

export const OneImage = Template.bind({})
OneImage.args = {
  images: oneImage,
  caption: 'One images layout'
}
