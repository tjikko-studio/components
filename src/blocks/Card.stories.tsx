import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {ImageProps} from '../parts/Media'
import {Card, CardProps} from './Card'

export default {
  title: 'Tjikko/Blocks/Card',
  component: Card,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The card block'
  }
} as Meta

const Template: Story<CardProps> = (args) => {
  const key = Math.random().toString(36).slice(2)
  return <Card key={key} {...args} />
}

const image: ImageProps = {
  type: 'image',
  id: 'https://via.placeholder.com/1.gif/111827/111827',
  link: 'https://via.placeholder.com/1.gif/111827/111827',
  url: 'https://via.placeholder.com/1.gif/111827/111827',
  extension: 'gif',
  info: '{"alt": "Image alt text", "caption": "<p>Image caption text</p>"}'
}

export const VerticalLayout = Template.bind({})
VerticalLayout.args = {
  title: 'Some awesome title',
  body: `Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue.`,
  image: image,
  buttons: [
    {
      label: 'Action Button',
      type: 'tertiary',
      link: {
        value: 'https://perdu.com'
      }
    }
  ],
  layout: 'vertical'
}

VerticalLayout.decorators = [
  (Story: any) => (
    <div className="w-full max-w-screen-sm">
      <Story />
    </div>
  )
]

export const HorizontalLayout = Template.bind({})
HorizontalLayout.args = {
  ...VerticalLayout.args,
  layout: 'horizontal'
}
HorizontalLayout.decorators = VerticalLayout.decorators

export const HorizontalLayoutImageRight = Template.bind({})
HorizontalLayoutImageRight.args = {
  ...VerticalLayout.args,
  layout: 'horizontal',
  imagePosition: 'right'
}
HorizontalLayoutImageRight.decorators = VerticalLayout.decorators

export const Elevated = Template.bind({})
Elevated.args = {
  ...VerticalLayout.args,
  isElevated: true
}
Elevated.decorators = VerticalLayout.decorators

export const ElevatedWithoutBackground = Template.bind({})
ElevatedWithoutBackground.args = {
  ...VerticalLayout.args,
  isElevated: true,
  hasBackground: false
}
ElevatedWithoutBackground.decorators = VerticalLayout.decorators

export const DarkBackground = Template.bind({})
DarkBackground.args = {
  ...VerticalLayout.args,
  bgColor: '#171a22',
  image: {
    ...image,
    url: 'https://via.placeholder.com/1.gif/D1D5DB/D1D5DB'
  }
}
DarkBackground.decorators = VerticalLayout.decorators
DarkBackground.parameters = {
  themes: {default: 'Dark Background'}
}

export const VerCardsGrid = Template.bind({})
VerCardsGrid.args = {
  ...VerticalLayout.args
}
VerCardsGrid.decorators = [
  (Story: any) => (
    <div className="w-full">
      <div className="grid p-4 gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    </div>
  )
]

export const HorCardsGrid = Template.bind({})
HorCardsGrid.args = {
  ...VerticalLayout.args,
  layout: 'horizontal'
}
HorCardsGrid.decorators = [
  (Story: any) => (
    <div className="w-full p-4 grid gap-8 sm:grid-cols-2">
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  )
]

export const CardsWithoutImages = Template.bind({})
CardsWithoutImages.args = {
  ...VerticalLayout.args,
  layout: 'horizontal',
  image: null
}
CardsWithoutImages.decorators = [
  (Story: any) => (
    <div className="w-full p-4 grid gap-8 sm:grid-cols-2">
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  )
]

