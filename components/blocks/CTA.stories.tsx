import { CTA, CTAProps } from "./CTA"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/blocks/CTA',
  component: CTA,
  parameters: {
    componentSubtitle: 'The CTA'
  }
} as Meta

const Template: Story<CTAProps> = (args) => <CTA {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "Title or Caption",
  body: "Body or Description of the proposed action",
  ctas: [
    { label: "Call To Action", link: "#" }
  ]
}
