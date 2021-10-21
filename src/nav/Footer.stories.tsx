import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

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
      columns: [
        {
          blocks: [
            {
              type: 'FooterSection',
              content: [
                {
                  content: {
                    image: {
                      filename: 'logo-smpx-light.svg',
                      info: '',
                      link: './images/company_logo_placeholder.svg',
                      text: 'logo-smpx-light.svg',
                      type: 'image',
                      url: './images/company_logo_placeholder.svg',
                      uuid: 'logo-smpx-light.svg'
                    }
                  },
                  type: 'NavigationLogo'
                }
              ],
              layout: 'vertical'
            }
          ]
        }
      ]
    },
    {
      columns: [
        {
          blocks: [
            {
              type: 'FooterSection',
              content: [
                {
                  type: 'NavigationDropdownChild',
                  label: 'Why Acme',
                  content: [
                    {
                      type: 'link',
                      label: 'The Experience',
                      link: ''
                    },
                    {
                      type: 'link',
                      label: 'Art, Tech & Team',
                      link: ''
                    },
                    {
                      type: 'link',
                      label: 'Success Stories',
                      link: '#'
                    }
                  ]
                }
              ],
              layout: 'vertical'
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
                  label: 'Solutions by Event',
                  content: [
                    {
                      type: 'link',
                      label: 'Sales Gallery',
                      link: '#'
                    },
                    {
                      type: 'link',
                      label: 'Remote',
                      link: '#'
                    }
                  ]
                }
              ],
              layout: 'vertical'
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
                      type: 'link',
                      label: 'Real Estate',
                      link: '#'
                    },
                    {
                      type: 'link',
                      label: 'Other Industries',
                      link: '#'
                    }
                  ]
                }
              ],
              layout: 'vertical'
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
                      type: 'link',
                      label: 'Portfolio',
                      link: ''
                    },
                    {
                      type: 'link',
                      label: 'Company',
                      link: ''
                    },
                    {
                      type: 'link',
                      label: 'Contact us',
                      link: ''
                    },
                    {
                      type: 'link',
                      label: 'Career',
                      link: ''
                    }
                  ]
                }
              ],
              layout: 'vertical'
            }
          ],
          width: '1/4'
        }
      ]
    },
    {
      columns: [
        {
          blocks: [
            {
              type: 'FooterSection',
              content: [
                {
                  type: 'link',
                  label: '© 2021',
                  link: ''
                },
                {
                  type: 'link',
                  label: 'Privacy',
                  link: ''
                },
                {
                  type: 'link',
                  label: 'Terms',
                  link: ''
                }
              ],
              layout: 'horizontal'
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
                  type: 'link',
                  label: 'Facebook',
                  link: ''
                },
                {
                  type: 'link',
                  label: 'YouTube',
                  link: ''
                },
                {
                  type: 'link',
                  label: 'Twitter',
                  link: ''
                },
                {
                  type: 'link',
                  label: 'LinkedIn',
                  link: ''
                }
              ],
              layout: 'horizontal'
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
                  content: {
                    data_source: 'languages'
                  },
                  type: 'NavigationDynamicList'
                }
              ],
              layout: 'vertical'
            }
          ],
          width: '3/12'
        }
      ]
    }
  ]
}
