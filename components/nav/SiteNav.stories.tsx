import {SiteNav, SiteNavProps} from "./SiteNav"
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/nav/SiteNav',
  component: SiteNav,
  parameters: {
    componentSubtitle: 'The Buttons SiteNav',
  }
} as Meta

const Template: Story<SiteNavProps> = (args) => <SiteNav {...args} />

export const Desktop = Template.bind({})
Desktop.args = {
  styles: "opaque",
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

export const DesktopTransparent = Template.bind({})
DesktopTransparent.args = {
  ...Desktop.args,
  styles: "transparent"
}
DesktopTransparent.parameters = {
  backgrounds: { default: 'dark' },
};

export const Mobile = Template.bind({})
Mobile.args = {
  ...Desktop.args
}
Mobile.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  },
};

export const MobileTransparent = Template.bind({})
MobileTransparent.args = {
  ...Mobile.args,
  styles: "transparent"
}
MobileTransparent.parameters = {
  ...Mobile.parameters,
  backgrounds: { default: 'dark' },
};