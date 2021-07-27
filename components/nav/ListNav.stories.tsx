import {ListNav, ListNavProps} from "./ListNav"
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/nav/ListNav',
  component: ListNav,
  argTypes: {
    styles: {control: {type: "select", options: ["flat", "elevated"]}},
  },
  parameters: {
    componentSubtitle: 'The Buttons ListNav'
  }
} as Meta

const Template: Story<ListNavProps> = (args) => <ListNav {...args} />

export const SingleData = Template.bind({})
SingleData.args = {
  linkList:
    [
      {
        groupCaption: "Group 01",
        groups: [
          {
            name: "Link 01",
            url: "/linkURL",
          },
          {
            name: "Link 02",
            url: "/linkURL",
          },
          {
            name: "Link 03",
            url: "/linkURL",
            type: "button"
          }
        ]
      }]
}
export const MultiData = Template.bind({})
MultiData.args = {
  linkList: [
    {
      groupCaption: "Group 01",
      groups: [
        {
          name: "Link 01",
          url: "/linkURL",
        },
        {
          name: "Link 02",
          url: "/linkURL"
        },
        {
          name: "Link 03",
          url: "/linkURL",
          type: "button"
        }
      ]
    },
    {
      groupCaption: "Group 02",
      groups: [
        {
          name: "Link 01",
          url: "/linkURL",
        },
        {
          name: "Link 02",
          url: "/linkURL"
        },
        {
          name: "Link 03",
          url: "/linkURL",
        }
      ]
    },
    {
      groupCaption: "Group 03",
      groups: [
        {
          name: "Link 01",
          url: "/linkURL",
        },
        {
          name: "Link 02",
          url: "/linkURL"
        },
        {
          name: "Link 03",
          url: "/linkURL",
        }
      ]
    }
  ]
}