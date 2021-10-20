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
      attrs: {
        no_gap: false
      },
      columns: [
        {
          blocks: [
            {
              isHidden: false,
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
                  isHidden: false,
                  type: 'NavigationLogo'
                }
              ],
              layout: 'vertical',
              rtl: false
            }
          ],
          width: '1/1'
        }
      ]
    },
    {
      attrs: {
        no_gap: false
      },
      columns: [
        {
          blocks: [
            {
              isHidden: false,
              type: 'FooterSection',
              content: [
                {
                  isHidden: false,
                  type: 'NavigationDropdownChild',
                  label: 'Why Acme',
                  content: [
                    {
                      isHidden: false,
                      type: 'link',
                      label: 'The Experience',
                      location: 'internal',
                      link: ''
                    },
                    {
                      isHidden: false,
                      type: 'link',
                      label: 'Art, Tech & Team',
                      location: 'internal',
                      link: ''
                    },
                    {
                      isHidden: false,
                      type: 'link',
                      label: 'Success Stories',
                      location: 'internal',
                      link: '#'
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
              isHidden: false,
              type: 'FooterSection',
              content: [
                {
                  isHidden: false,
                  type: 'NavigationDropdownChild',
                  label: 'Solutions by Event',
                  content: [
                    {
                      isHidden: false,
                      type: 'link',
                      label: 'Sales Gallery',
                      location: 'internal',
                      link: '#'
                    },
                    {
                      isHidden: false,
                      type: 'link',
                      label: 'Remote',
                      location: 'internal',
                      link: '#'
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
              isHidden: false,
              type: 'FooterSection',
              content: [
                {
                  isHidden: false,
                  type: 'NavigationDropdownChild',
                  label: 'Solutions by Industry',
                  content: [
                    {
                      isHidden: false,
                      type: 'link',
                      label: 'Real Estate',
                      location: 'internal',
                      link: '#'
                    },
                    {
                      isHidden: false,
                      type: 'link',
                      label: 'Other Industries',
                      location: 'internal',
                      link: '#'
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
              isHidden: false,
              type: 'FooterSection',
              content: [
                {
                  isHidden: false,
                  type: 'NavigationDropdownChild',
                  label: 'Other Links',
                  content: [
                    {
                      isHidden: false,
                      type: 'link',
                      label: 'Portfolio',
                      location: 'internal',
                      link: ''
                    },
                    {
                      isHidden: false,
                      type: 'link',
                      label: 'Company',
                      location: 'internal',
                      link: ''
                    },
                    {
                      isHidden: false,
                      type: 'link',
                      label: 'Contact us',
                      location: 'internal',
                      link: ''
                    },
                    {
                      isHidden: false,
                      type: 'link',
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
        no_gap: false
      },
      columns: [
        {
          blocks: [
            {
              isHidden: false,
              type: 'FooterSection',
              content: [
                {
                  isHidden: false,
                  type: 'link',
                  label: '© 2021',
                  location: 'internal',
                  link: ''
                },
                {
                  isHidden: false,
                  type: 'link',
                  label: 'Privacy',
                  location: 'internal',
                  link: ''
                },
                {
                  isHidden: false,
                  type: 'link',
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
              isHidden: false,
              type: 'FooterSection',
              content: [
                {
                  isHidden: false,
                  type: 'link',
                  label: 'Facebook',
                  location: 'internal',
                  link: ''
                },
                {
                  isHidden: false,
                  type: 'link',
                  label: 'YouTube',
                  location: 'internal',
                  link: ''
                },
                {
                  isHidden: false,
                  type: 'link',
                  label: 'Twitter',
                  location: 'internal',
                  link: ''
                },
                {
                  isHidden: false,
                  type: 'link',
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
              isHidden: false,
              type: 'FooterSection',
              content: [
                {
                  content: {
                    data_source: 'languages'
                  },
                  isHidden: false,
                  type: 'NavigationDynamicList'
                }
              ],
              layout: 'vertical',
              rtl: false
            }
          ],
          width: '3/12'
        }
      ]
    }
  ]
}
