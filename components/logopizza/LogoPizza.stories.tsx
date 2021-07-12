import { LogoPizza, LogoPizzaProps } from "./LogoPizza"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/LogoPizza',
  component: LogoPizza,
  argTypes: {
  },
  parameters: {
    componentSubtitle: 'The LogoPizza'
  }
} as Meta

const Template: Story<LogoPizzaProps> = (args) => <LogoPizza {...args} />

export const Default = Template.bind({})
Default.args = {
    companyArr: [
        { imgUrl: "", href: "#" },
        { imgUrl: "", href: "#" },
        { imgUrl: "", href: "#" },
        { imgUrl: "", href: "#" },
        { imgUrl: "", href: "#" },
        { imgUrl: "", href: "#" },
        { imgUrl: "", href: "#" },
        { imgUrl: "", href: "#" },
    ],
    mode: "Default"
}

export const Compact = Template.bind({})
Compact.args = {
    ...Default.args,
    mode: "Compact"
}