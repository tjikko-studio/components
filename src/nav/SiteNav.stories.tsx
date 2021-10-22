import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {SiteNav, SiteNavProps} from './SiteNav'

export default {
  title: 'Tjikko/Nav Elements/SiteNav',
  component: SiteNav,
  parameters: {
    componentSubtitle: 'The Buttons SiteNav'
  }
} as Meta

const Template: Story<SiteNavProps> = (args) => {
  return <SiteNav {...args} />
}

export const Desktop = Template.bind({})
Desktop.args = {
  styles: 'opaque',
  logo: {
    type: 'image',
    url: './images/company_logo_placeholder.svg'
  },
  locales: {
    current: 'En',
    content: [
      {
        label: [],
        content: [
          {
            label: 'En',
            link: '/en'
          },
          {
            label: 'De',
            link: '/de'
          },
          {
            label: 'Afr',
            link: '/afr'
          }
        ]
      }
    ]
  },
  menuData: [
    {
      attrs: [],
      columns: [
        {
          type: 'NavigationSection',
          content: [
            {
              type: 'NavigationDropdown',
              label: 'Why Acme',
              content: [
                {
                  type: 'NavigationDropdownChild',
                  label: '',
                  content: [
                    {
                      type: 'default',
                      label: 'Features',
                      link: '#features'
                    },
                    {
                      type: 'default',
                      label: 'Customer Success Stories',
                      link: '#success-stories'
                    },
                    {
                      type: 'default',
                      label: 'Quality and reliability',
                      link: '#quality-reliability'
                    },
                    {
                      type: 'button',
                      label: 'Contact Sales team',
                      link: '#contact-sales'
                    }
                  ]
                }
              ]
            },
            {
              type: 'NavigationDropdown',
              label: 'Solution',
              content: [
                {
                  type: 'NavigationDropdownChild',
                  label: 'By Industry',
                  content: [
                    {
                      type: 'default',
                      label: 'Real estate',
                      link: '#real-estate'
                    },
                    {
                      type: 'default',
                      label: 'Others',
                      link: '#other'
                    }
                  ]
                },
                {
                  type: 'NavigationDropdownChild',
                  label: 'By use case',
                  content: [
                    {
                      type: 'default',
                      label: 'Sales Office',
                      link: '#sales-office'
                    },
                    {
                      type: 'default',
                      label: 'Presentation',
                      link: '#presentation'
                    },
                    {
                      type: 'default',
                      label: 'Remote',
                      link: '#remote'
                    }
                  ]
                }
              ]
            },
            {
              type: 'NavigationDropdown',
              label: 'Portfolio',
              content: []
            },
            {
              type: 'default',
              label: 'Portfolio',
              link: '#portfolio'
            }
          ],
          mobile_position: 'default',
          mobile_layout: 'vertical'
        },
        {
          type: 'NavigationSection',
          content: [
            {
              type: 'button',
              label: 'Free demo',
              link: '#free-demo'
            },
            {
              type: 'NavigationDynamicList',
              dataSource: 'language'
            }
          ],
          mobile_position: 'start',
          mobile_layout: 'horizontal'
        }
      ]
    }
  ]
}

export const DesktopTransparent = Template.bind({})
DesktopTransparent.args = {
  ...Desktop.args,
  styles: 'transparent'
}
DesktopTransparent.parameters = {
  themes: {default: 'Dark Background'}
}

export const Mobile = Template.bind({})
Mobile.args = {
  ...Desktop.args,
  mobileExpandDefault: true
}
Mobile.parameters = {
  viewport: {defaultViewport: 'tablet'}
}

export const MobileTransparent = Template.bind({})
MobileTransparent.args = {
  ...Mobile.args,
  styles: 'transparent'
}
MobileTransparent.parameters = {
  ...Mobile.parameters,
  themes: {default: 'Dark Background'}
}
