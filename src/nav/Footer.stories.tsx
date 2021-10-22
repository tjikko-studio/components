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
      columns: [
        {
          blocks: [
            {
              type: 'FooterSection',
              content: [
                {
                  type: 'NavigationLogo',
                  content: {
                    image: {
                      url: './images/company_logo_placeholder.svg'
                    }
                  }
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
                      link: '#experience'
                    },
                    {
                      type: 'link',
                      label: 'Art, Tech & Team',
                      link: '#art-tech-team'
                    },
                    {
                      type: 'link',
                      label: 'Success Stories',
                      link: '#success-stories'
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
                      link: '#sales-gallery'
                    },
                    {
                      type: 'link',
                      label: 'Remote',
                      link: ''
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
                      link: '#real-estate'
                    },
                    {
                      type: 'link',
                      label: 'Other Industries',
                      link: '#other-industries'
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
                      link: '#portfolio'
                    },
                    {
                      type: 'link',
                      label: 'Company',
                      link: '#company'
                    },
                    {
                      type: 'link',
                      label: 'Contact us',
                      link: '#contact-us'
                    },
                    {
                      type: 'link',
                      label: 'Career',
                      link: '#career'
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
                  link: '#copyright'
                },
                {
                  type: 'link',
                  label: 'Privacy',
                  link: '#privacy'
                },
                {
                  type: 'link',
                  label: 'Terms',
                  link: '#terms'
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
                  link: '#facebook'
                },
                {
                  type: 'link',
                  label: 'YouTube',
                  link: '#youtube'
                },
                {
                  type: 'link',
                  label: 'Twitter',
                  link: '#twitter'
                },
                {
                  type: 'link',
                  label: 'LinkedIn',
                  link: '#linkedIn'
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
                  type: 'NavigationDynamicList',
                  content: {
                    data_source: 'languages'
                  }
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
