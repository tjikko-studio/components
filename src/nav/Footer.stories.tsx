import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import companyLogo from '/assets/images/company_logo_placeholder.png'

import {Footer, FooterProps} from './Footer'

export default {
  title: 'Tjikko/Nav Elements/Footer',
  component: Footer,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The Footer'
  }
} as Meta

const Template: Story<FooterProps> = (args) => {
  return <Footer {...args} />
}

export const Default = Template.bind({})
Default.args = {
  logo: {
    type: 'image',
    url: companyLogo
  },
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
      attrs: {
        no_gap: false
      },
      columns: [
        {
          blocks: [
            {
              type: 'FooterSection',
              content: [
                {
                  type: 'NavigationDropdownChild',
                  label: 'Why Smart Pixel',
                  content: [
                    {
                      type: 'default',
                      label: 'Features',
                      location: 'internal',
                      link: ''
                    },
                    {
                      type: 'default',
                      label: 'Customers Success Stories',
                      location: 'internal',
                      link: ''
                    },
                    {
                      type: 'default',
                      label: 'Quality & Reliability',
                      location: 'internal',
                      link: ''
                    }
                  ]
                }
              ],
              layout: 'vertical',
              rtl: false
            }
          ],
          width: '1/4'
        },
        {
          blocks: [
            {
              type: 'FooterSection',
              content: [
                {
                  type: 'NavigationDropdownChild',
                  label: 'Solutions by Industry',
                  content: [
                    {
                      type: 'default',
                      label: 'Real Estate',
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
                }
              ],
              layout: 'vertical',
              rtl: false
            }
          ],
          width: '1/4'
        },
        {
          blocks: [
            {
              type: 'FooterSection',
              content: [
                {
                  type: 'NavigationDropdownChild',
                  label: 'Solutions by Use Case',
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
              ],
              layout: 'vertical',
              rtl: false
            }
          ],
          width: '1/4'
        },
        {
          blocks: [
            {
              type: 'FooterSection',
              content: [
                {
                  type: 'NavigationDropdownChild',
                  label: 'Other Links',
                  content: [
                    {
                      type: 'default',
                      label: 'Portfolio',
                      location: 'internal',
                      link: ''
                    },
                    {
                      type: 'default',
                      label: 'Company',
                      location: 'internal',
                      link: ''
                    },
                    {
                      type: 'default',
                      label: 'Contact us',
                      location: 'internal',
                      link: ''
                    },
                    {
                      type: 'default',
                      label: 'Career',
                      location: 'internal',
                      link: ''
                    }
                  ]
                }
              ],
              layout: 'vertical',
              rtl: false
            }
          ],
          width: '1/4'
        }
      ]
    },
    {
      attrs: {
        no_gap: true
      },
      columns: [
        {
          blocks: [
            {
              type: 'FooterSection',
              content: [
                {
                  type: 'default',
                  label: '© 2021',
                  location: 'internal',
                  link: ''
                },
                {
                  type: 'default',
                  label: 'Privacy',
                  location: 'internal',
                  link: ''
                },
                {
                  type: 'default',
                  label: 'Terms',
                  location: 'internal',
                  link: ''
                }
              ],
              layout: 'horizontal',
              rtl: false
            }
          ],
          width: '3/12'
        },
        {
          blocks: [
            {
              type: 'FooterSection',
              content: [
                {
                  type: 'default',
                  label: 'Facebook',
                  location: 'internal',
                  link: ''
                },
                {
                  type: 'default',
                  label: 'YouTube',
                  location: 'internal',
                  link: ''
                },
                {
                  type: 'default',
                  label: 'Twitter',
                  location: 'internal',
                  link: ''
                },
                {
                  type: 'default',
                  label: 'LinkedIn',
                  location: 'internal',
                  link: ''
                }
              ],
              layout: 'horizontal',
              rtl: false
            }
          ],
          width: '6/12'
        },
        {
          blocks: [
            {
              type: 'FooterSection',
              content: [
                {
                  type: 'NavigationDynamicList',
                  dataSource: 'language'
                }
              ],
              layout: 'horizontal',
              rtl: false
            }
          ],
          width: '3/12'
        }
      ]
    }
  ]
}
