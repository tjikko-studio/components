import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {Header, HeaderProps} from './Header'

export default {
  title: 'Tjikko/Blocks/Header',
  component: Header,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The text group block',
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

const Template: Story<HeaderProps> = (args) => {
  return <Header {...args} />
}

export const Hero = Template.bind({})
Hero.args = {
  title: 'Board the cows!',
  subtitle: "We've come to enslave your marigolds.",
  headerType: 'hero'
}

export const SectionBig = Template.bind({})
SectionBig.args = {
  ...Hero.args,
  headerType: 'section_big'
}

export const SectionSmall = Template.bind({})
SectionSmall.args = {
  ...Hero.args,
  headerType: 'section_small'
}

export const SectionCentered = Template.bind({})
SectionCentered.args = {
  ...Hero.args,
  headerType: 'section_big',
  headerAlign: 'center'
}
