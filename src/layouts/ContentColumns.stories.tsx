import React from 'react'
import { ContentColumns, ContentColumnsProps } from './ContentColumns'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Layouts/ContentColumns',
  component: ContentColumns,
  argTypes: {

  },
  parameters: {
    componentSubtitle: 'ContentColumns'
  }
} as Meta

const Template: Story<ContentColumnsProps> = (args) => <ContentColumns {...args} />

export const Default = Template.bind({})
Default.args = {
  content: [
    {
      columns: [
        {
          width: "1/1",
          blocks: [
            {
              type: 'Primary',
              content: {
                type: 'default',
                imagePosition: 'auto',
                image: {
                  url: 'https://source.unsplash.com/random',
                  type: 'image'
                },
                title: 'Heading',
                body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.',
                buttons: [
                  {
                    label: 'Primary button',
                    link: '#',
                    type: 'primary'
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
                  url: 'https://source.unsplash.com/random',
                  type: 'image'
                },
                title: 'Heading 2',
                body: 'Different!',
                buttons: [
                  {
                    label: 'Primary button but different',
                    link: '#',
                    type: 'primary'
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
