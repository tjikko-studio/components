import {Story, Meta} from '@storybook/react/types-6-0'
import {ButtonsGroup, ButtonsGroupProps} from './ButtonsGroup'


export default {
  title: 'Tjikko/blocks/Buttons Group',
  component: ButtonsGroup,
  argTypes: {

  },
  parameters: {
    componentSubtitle: 'The Button Group'
  }
} as Meta

const Template: Story<ButtonsGroupProps> = (args) => <ButtonsGroup {...args} />

export const Default = Template.bind({})

Default.args = {
  buttons: [
    {
      label: 'Primary button',
      link: '#'
    },
    {
      label: 'Secondary button',
      link: '#',
    }
  ]
}
