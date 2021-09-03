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
  languageList: {
    current: 'En',
    subMenu: [
      {
        columnLabel: [],
        columnContent: [
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
      subMenu: [
        {
          columnLabel: [],
          columnContent: [
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
      subMenu: [
        {
          columnLabel: 'BY INDUSTRY',
          columnContent: [
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
          columnLabel: 'BY USE CASE',
          columnContent: [
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
      captionLink: '/portfolio',
      subMenu: []
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
