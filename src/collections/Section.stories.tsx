import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {Section, SectionProps} from './Section'

export default {
  title: 'Tjikko/Collections/Section',
  component: Section,
  argTypes: {},
  parameters: {
    componentSubtitle: 'Section'
  }
} as Meta

const Template: Story<SectionProps> = (args) => {
  return <Section {...args} />
}

export const Default = Template.bind({})
Default.args = {
  bgColor: '#F3F4F6',
  content: [
    {
      columns: [
        {
          width: '1/1',
          blocks: [
            {
              type: 'Primary',
              content: {
                type: 'default',
                imagePosition: 'auto',
                image: {
                  url: 'https://via.placeholder.com/1.gif/111827/111827',
                  type: 'image'
                },
                title: 'Heading',
                body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.', // eslint-disable-line max-len
                buttons: [
                  {
                    label: 'Primary button',
                    link: '#primary',
                    type: 'tertiary'
                  }
                ]
              }
            },
            {
              type: 'Primary',
              content: {
                type: 'default',
                imagePosition: 'auto',
                image: {
                  url: 'https://via.placeholder.com/1.gif/111827/111827',
                  type: 'image'
                },
                title: 'Heading #2',
                body: 'Different!',
                buttons: [
                  {
                    label: 'Primary button',
                    link: '#tertiary',
                    type: 'tertiary'
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ]
}
