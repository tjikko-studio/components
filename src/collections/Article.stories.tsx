/* eslint-disable max-len */
import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {Article, ArticleProps} from './Article'

export default {
  title: 'Tjikko/Collections/Article',
  component: Article,
  argTypes: {},
  parameters: {
    componentSubtitle: 'Article'
  }
} as Meta

const Template: Story<ArticleProps> = (args) => {
  return <Article {...args} />
}

export const Default = Template.bind({})
Default.args = {
  bgColor: '#F3F4F6',
  content: [
    {
      content: {
        level: 'h2',
        text: 'Hello wonderful people!'
      },
      id: 'afd68444-763d-4e3a-a5e1-900471569c14',
      type: 'Heading'
    },
    {
      content: {
        alignment: '',
        text: '<p>Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p><p>Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.</p><p>Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>'
      },
      id: '25c8ff97-349b-48c0-bdf0-5574003a9faa',
      type: 'Text'
    },
    {
      content: {
        images: [
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
          }
        ],
        caption: 'Come caption here'
      },
      id: '6cd41f61-0964-49dc-8c02-3a1243ff59df',
      type: 'Gallery'
    },
    {
      content: [],
      id: '07ed1c3e-7d61-4ca7-ab33-aebc68a2ccd1',
      type: 'Divider'
    },
    {
      content: {
        level: 'h3',
        text: 'Here is a little heading'
      },
      id: '7b22c5a4-8c8e-4a6c-92f2-5e11bc1d87c1',
      type: 'Heading'
    },
    {
      content: {
        alignment: '',
        text: '<p>Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor.</p><p>Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus.</p><p>Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.</p><p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue.</p>'
      },
      id: '4014719d-5899-42df-b337-bd8dc9050689',
      type: 'Text'
    },
    {
      content: {
        images: [
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
          }
        ],
        caption: 'Come caption here'
      },
      id: '6cd41f61-0964-49dc-8c02-3a1243ff59df',
      type: 'Gallery'
    },
  ]
}
