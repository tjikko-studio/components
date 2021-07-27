import {SiteNav, SiteNavProps} from "./SiteNav"
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/nav/SiteNav',
  component: SiteNav,
  argTypes: {
    styles: {control: {type: "select", options: ["black", "transWhite"]}},
  },
  parameters: {
    componentSubtitle: 'The Buttons SiteNav'
  }
} as Meta

const Template: Story<SiteNavProps> = (args) => <SiteNav {...args} />

export const Default = Template.bind({})
Default.args = {
  styles: "black",
  languageList: {
    current: "En",
    submenu: [
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
      submenu: [
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
      submenu: [
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
      captionLink: "/portfolio",
      submenu: null
    }
  ]
}
