import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {Footer, FooterProps} from './Footer'

export default {
  title: 'Tjikko/blocks/Footer',
  component: Footer,
  argTypes: {
    // type: { options: ['default', 'header', 'button', 'special'], control: { type: 'select' }},
  },
  parameters: {
    componentSubtitle: 'The Footer'
  }
} as Meta

const Template: Story<FooterProps> = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  footerMenu: [
    {
      caption: 'Why Smart Pixel',
      menuList: [
        {
          name: 'Features',
          url: '/Features'
        },
        {
          name: 'Customers Success Stories',
          url: '/customers'
        },
        {
          name: 'Quality & Reliability',
          url: '/quality'
        }
      ]
    },
    {
      caption: 'Solutions by INDUSTRY',
      menuList: [
        {
          name: 'Real estate',
          url: '/real'
        },
        {
          name: 'Others',
          url: '/others'
        }
      ]
    },
    {
      caption: 'Solutions BY USE CASE',
      menuList: [
        {
          name: 'Sales Office',
          url: '/sale'
        },
        {
          name: 'Presentation',
          url: '/presentation'
        },
        {
          name: 'Remote',
          url: '/remote'
        }
      ]
    },
    {
      caption: 'Other links',
      menuList: [
        {
          name: 'Portfolio',
          url: '/portfolio'
        },
        {
          name: 'Company',
          url: '/company'
        },
        {
          name: 'Contact us',
          url: '/contact'
        },
        {
          name: 'Career',
          url: '/career'
        }
      ]
    }
  ]
}
