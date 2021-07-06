import { ListNav, ListNavProps } from "./ListNav"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/ListNav',
  component: ListNav,
  argTypes: {
    styles: { control: { type: "select", options: ["flat", "elevated"] }},
  },
  parameters: {
    componentSubtitle: 'The Buttons ListNav'
  }
} as Meta

const Template: Story<ListNavProps> = (args) => <ListNav {...args} />

export const SingleData = Template.bind({})
SingleData.args = {
  linkList: {
      "default": {
          "Link 01": "/linkURL",
          "Link 02": "/linkURL",
          "Link 03": "/linkURL",
          "Button": "/linkURL"
      },
  },
}
export const MultiData = Template.bind({})
MultiData.args = {
  linkList: {
    "Group 01": {
        "Link 01": "/linkURL",
        "Link 02": "/linkURL",
        "Link 03": "/linkURL",
        "Link 04": "/linkURL",
        "Button": "/linkURL"
    },
    "Group 02": {
        "Link 01": "/linkURL",
        "Link 02": "/linkURL",
        "Link 03": "/linkURL",
        "Link 04": "/linkURL",
        "Button": "/linkURL"
    },
    "Group 03": {
        "Link 01": "/linkURL",
        "Link 02": "/linkURL",
        "Link 03": "/linkURL",
        "Link 04": "/linkURL",
        "Button": "/linkURL"
    },
    "Group 04": {
        "Link 01": "/linkURL",
        "Link 02": "/linkURL",
        "Link 03": "/linkURL",
        "Link 04": "/linkURL",
        "Button": "/linkURL"
    }
  }
}