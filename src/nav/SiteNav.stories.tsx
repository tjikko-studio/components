// eslint-disable-next-line no-use-before-define
import React from 'react'
import {SiteNav, SiteNavProps} from './SiteNav'
import {Story, Meta} from '@storybook/react/types-6-0'

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
  locales: {
    current: 'En',
    content: [
      {
        label: [],
        content: [
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
              label: 'Why SmartPixel',
              content: [
                {
                  type: 'NavigationDropdownChild',
                  label: '',
                  content: [
                    {
                      type: 'default',
                      label: 'Features',
                      location: 'internal',
                      link: ''
                    },
                    {
                      type: 'default',
                      label: 'Customer Success Stories',
                      location: 'internal',
                      link: ''
                    },
                    {
                      type: 'default',
                      label: 'Quality and reliability',
                      location: 'internal',
                      link: ''
                    },
                    {
                      type: 'button',
                      label: 'Contact Sales team',
                      location: 'internal',
                      link: ''
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
                      location: 'internal',
                      link: ''
                    },
                    {
                      type: 'default',
                      label: 'Others',
                      location: 'internal',
                      link: ''
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
                      location: 'internal',
                      link: ''
                    },
                    {
                      type: 'default',
                      label: 'Presentation',
                      location: 'internal',
                      link: ''
                    },
                    {
                      type: 'default',
                      label: 'Remote',
                      location: 'internal',
                      link: ''
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
              location: 'internal',
              link: ''
            }
          ],
          // eslint-disable-next-line camelcase
          mobile_position: 'default',
          // eslint-disable-next-line camelcase
          mobile_layout: 'vertical'
        },
        {
          type: 'NavigationSection',
          content: [
            {
              type: 'button',
              label: 'Free demo',
              location: 'internal',
              link: ''
            },
            {
              dataSource: 'language',
              type: 'NavigationDynamicList'
            }
          ],
          // eslint-disable-next-line camelcase
          mobile_position: 'start',
          // eslint-disable-next-line camelcase
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
