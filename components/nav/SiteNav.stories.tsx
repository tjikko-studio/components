import {SiteNav, SiteNavProps} from "./SiteNav"
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/nav/SiteNav',
  component: SiteNav,
  parameters: {
    componentSubtitle: 'The Buttons SiteNav',
    argTypes: {
      backgrounds: { control: { disable: true } },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#000' },
      ],
    },
  }
} as Meta

const Template: Story<SiteNavProps> = (args) => <SiteNav {...args} />

export const Default = Template.bind({})
Default.args = {
  styles: "opaque",
  languageList: {
    current: "En",
    subMenu: [
      {
        groupCaption: null,
        groups: [
          {
            name: "De",
            url: "/de",
          },
          {
            name: "Afr",
            url: "/afr",
          }
        ]
      }
    ]
  },
  menuData: [
    {
      caption: "Why SmartPixel",
      subMenu: [
        {
          groupCaption: null,
          groups: [
            {
              name: "Features",
              url: "/features",
            },
            {
              name: "Customer Success Stories",
              url: "/customer",
            },
            {
              name: "Quality and reliability",
              url: "/quality"
            },
            {
              name: "Contact Sales team",
              url: "/contact",
              type: "button"
            }
          ]
        }
      ]
    },
    {
      caption: "Solutions",
      subMenu: [
        {
          groupCaption: "BY INDUSTRY",
          groups: [
            {
              name: "Real estate",
              url: "/real",
            },
            {
              name: "Others",
              url: "/others",
            }
          ]
        },
        {
          groupCaption: "BY USE CASE",
          groups: [
            {
              name: "Sales Office",
              url: "/sale",
            },
            {
              name: "Presentation",
              url: "/presentation"
            },
            {
              name: "Remote",
              url: "/remote"
            },
            {
              name: "Contact Sales team",
              url: "/contact",
              type: "button"
            }
          ]
        }
      ]
    },
    {
      caption: "Portfolio",
      captionLink: "/portfolio"
    }
  ]
}

export const transparent = Template.bind({})
transparent.args = {
  ...Default.args,
  styles: "transparent"
}
transparent.parameters = {
  backgrounds: { default: 'dark' }
};
