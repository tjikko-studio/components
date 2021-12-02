import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {Primary, PrimaryProps} from './Primary'

export default {
  title: 'Tjikko/Blocks/Primary',
  component: Primary,
  argTypes: {
    layout: {
      options: ['default', 'vertical'],
      control: {layout: 'select'}
    },
    imagePosition: {
      options: ['auto', 'left', 'right'],
      control: {layout: 'select'}
    },
    textPositionVertical: {
      options: ['center', 'top'],
      control: {layout: 'select'}
    },
    textSize: {
      options: ['regular', 'small'],
      control: {layout: 'select'}
    }
  },
  parameters: {
    componentSubtitle: 'The Primary block'
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-screen-lg">
        <Story />
      </div>
    )
  ]
} as Meta

const Template: Story<PrimaryProps> = (args) => {
  return <Primary {...args} />
}

export const Default = Template.bind({})
Default.args = {
  layout: 'default',
  imagePosition: 'left',
  textPositionVertical: 'center',
  image: {
    url: 'https://via.placeholder.com/1.gif/111827/111827',
    type: 'image'
  },
  textSize: 'regular',
  title: 'Heading',
  body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.', // eslint-disable-line max-len
  buttons: [
    {
      label: 'Action Button',
      type: 'secondary',
      link: {
        popup: false,
        value: 'https://perdu.com'
      }
    }
  ]
}

export const TextPositionTopWithSmallText = Template.bind({})
TextPositionTopWithSmallText.args = {
  ...Default.args,
  textPositionVertical: 'top',
  textSize: 'small',
  buttons: [
    {
      label: 'Action Button',
      type: 'tertiary',
      link: {
        popup: false,
        value: 'https://perdu.com'
      }
    }
  ]
}

export const VerticalLayout = Template.bind({})
VerticalLayout.args = {
  ...Default.args,
  layout: 'vertical'
}

export const TwoButtons = Template.bind({})
TwoButtons.args = {
  ...Default.args,
  buttons: [
    {
      label: 'First Button',
      type: 'secondary',
      link: {
        popup: false,
        value: 'https://perdu.com'
      }
    },
    {
      label: 'Second Button',
      type: 'tertiary',
      link: {
        popup: false,
        value: 'https://perdu.com'
      }
    }
  ]
}
