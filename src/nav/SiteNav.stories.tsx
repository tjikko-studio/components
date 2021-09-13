import React from 'react'
import {SiteNav, SiteNavProps} from './SiteNav'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Nav Elements/SiteNav',
  component: SiteNav,
  parameters: {
    componentSubtitle: 'The Buttons SiteNav',
  }
} as Meta

const Template: Story<SiteNavProps> = (args) => <SiteNav {...args} />

export const Desktop = Template.bind({})
Desktop.args = {
  styles: 'opaque',
  locales: {
    current: 'En',
    content: [
      {
        label: [],
        content: [
          {
            label: 'De',
            link: '/de',
          },
          {
            label: 'Afr',
            link: '/afr',
          }
        ]
      }
    ]
  },
  menuData: [
    {
      label: 'Why SmartPixel',
      content: [
        {
          label: [],
          content: [
            {
              label: 'Features',
              link: '/features',
            },
            {
              label: 'Customer Success Stories',
              link: '/customer',
            },
            {
              label: 'Quality and reliability',
              link: '/quality'
            },
            {
              label: 'Contact Sales team',
              link: '/contact',
              type: 'button'
            }
          ]
        }
      ]
    },
    {
      label: 'Solutions',
      content: [
        {
          label: 'BY INDUSTRY',
          content: [
            {
              label: 'Real estate',
              link: '/real',
            },
            {
              label: 'Others',
              link: '/others',
            }
          ]
        },
        {
          label: 'BY USE CASE',
          content: [
            {
              label: 'Sales Office',
              link: '/sale',
            },
            {
              label: 'Presentation',
              link: '/presentation'
            },
            {
              label: 'Remote',
              link: '/remote'
            },
            {
              label: 'Contact Sales team',
              link: '/contact',
              type: 'button'
            }
          ]
        }
      ]
    },
    {
      label: 'Portfolio',
      link: '/portfolio',
      content: []
    }
  ]
}

export const DesktopTransparent = Template.bind({})
DesktopTransparent.args = {
  ...Desktop.args,
  styles: 'transparent'
}
DesktopTransparent.parameters = {
  themes: { default: 'Dark Background' }
}

export const Mobile = Template.bind({})
Mobile.args = {
  ...Desktop.args,
  mobileExpandDefault: true
}
Mobile.parameters = {
  viewport: { defaultViewport: 'tablet' }
};

export const MobileTransparent = Template.bind({})
MobileTransparent.args = {
  ...Mobile.args,
  styles: 'transparent'
}
MobileTransparent.parameters = {
  ...Mobile.parameters,
  themes: { default: 'Dark Background' }
};
