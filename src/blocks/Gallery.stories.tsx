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

export const Default = Template.bind({})
Default.args = {
  className: 'w-80 h-52',
  title: '01. HEADING',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscig elit ed do elusmod tempor incidedunt ut laborre et dolore magna aliqua'
}
Default.parameters = {
  themes: {default: 'Dark Mode'}
}
