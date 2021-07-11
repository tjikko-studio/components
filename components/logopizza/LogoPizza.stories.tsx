import { LogoPizza, LogoPizzaProps } from "./LogoPizza"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/LogoPizza',
  component: LogoPizza,
  argTypes: {
    type: { control: { type: "select", options: ["primary", "tertiary"] }},
    size: { control: { type: "select", options: ["small", "default", "large"] }}
  },
  parameters: {
    componentSubtitle: 'The LogoPizza'
  }
} as Meta

const Template: Story<LogoPizzaProps> = (args) => <LogoPizza {...args} />

export const Default = Template.bind({})
Default.args = {
    companyArr: [
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
    ],
    mode: "Default"
}

export const Compact = Template.bind({})
Compact.args = {
    companyArr: [
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
        { imgUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`, href: "#" },
    ],
    mode: "Compact"
}