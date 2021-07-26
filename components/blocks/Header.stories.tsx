import {Header, HeaderProps} from "./Header"
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/blocks/Header',
  component: Header,
  argTypes: {
    // type: { control: { type: "select", options: ["default", "header", "button", "special"] }},
  },
  parameters: {
    componentSubtitle: 'The Header',
    backgrounds: {
      default: 'dark background',
      values: [
        {
          name: 'dark background',
          value: '#000',
        }
      ],
    },
  }
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  styles: {
    type: "default",
    buttonText: "Book a demo",
    formPlaceholder: "Work email",
    caseText: "SP Architectutes",
    url: "/Header",
  },
  title: "Some amazing title",
  breadcrumb: [
    {
      name: "breadcrumb",
      url: "/bread1"
    },
    {
      name: "breadcrumb",
      url: "/bread2"
    },
    {
      name: "breadcrumb",
      url: "/bread3"
    }
  ],
  text: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
}

export const NoURL = Template.bind({})
NoURL.args = {
  ...Default.args,
  styles: {
    ...Default.args.styles,
    url: null
  }
}
