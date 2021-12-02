import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

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
  return <Card {...args} />
}

export const VerticalLayout = Template.bind({})
VerticalLayout.args = {
  title: 'Some awesome title',
  body: `Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue.`,
  buttons: [
    {
      label: 'Action Button',
      type: 'tertiary',
      link: {
        value: 'https://perdu.com'
      }
    }
  ],
  layout: 'vertical',
  image_position: ''
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
  bgColor: '#171a22'
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
