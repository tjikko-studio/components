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
                  url: 'https://source.unsplash.com/random',
                  type: 'image'
                },
                title: 'Heading',
                body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.', // eslint-disable-line max-len
                buttons: [
                  {
                    label: 'Primary button',
                    link: '#',
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
                  url: 'https://source.unsplash.com/random',
                  type: 'image'
                },
                title: 'Heading #2',
                body: 'Different!',
                buttons: [
                  {
                    label: 'Primary button',
                    link: '#',
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
