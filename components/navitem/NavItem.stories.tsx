import { NavItem, NavItemProps } from "./NavItem"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/NavItem',
  component: NavItem,
  argTypes: {
    styles: { control: { type: "select", options: ["default", "default/white", "flat"] }},
  },
  parameters: {
    componentSubtitle: 'The Buttons NavItem'
  }
} as Meta

const Template: Story<NavItemProps> = (args) => <NavItem {...args} />

export const None = Template.bind({})
None.args = {
  styles: "default",
  subMenu: null
}

export const Single = Template.bind({})
Single.args = {
  styles: "default",
  subMenu: {
    "default": {
        "Link 01": "/linkURL",
        "Link 02": "/linkURL",
        "Link 03": "/linkURL",
        "Button": "/linkURL"
    }
  }
}
export const Multi = Template.bind({})
Multi.args = {
  styles: "default",
  subMenu: {
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