import {ClientsLogos, ClientsLogosProps} from './ClientsLogos'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Blocks/Clients Logos',
  component: ClientsLogos,
  argTypes: {
  },
  parameters: {
    componentSubtitle: 'The Clients Logos'
  }
} as Meta

const Template: Story<ClientsLogosProps> = (args) => <ClientsLogos {...args} />

export const Default = Template.bind({})
Default.args = {
  companyArr: [
    {imgUrl: './images/test_logo_01.png', href: '#'},
    {imgUrl: './images/test_logo_02.png', href: '#'},
    {imgUrl: './images/test_logo_03.png', href: '#'},
    {imgUrl: './images/test_logo_04.png', href: '#'},
    {imgUrl: './images/test_logo_05.png', href: '#'},
    {imgUrl: './images/test_logo_06.png', href: '#'},
    {imgUrl: './images/test_logo_07.png', href: '#'},
    {imgUrl: './images/test_logo_08.png', href: '#'},
    { imgUrl: './images/test_logo_09.png', href: '#' }
  ],
  size: 'Default'
}

export const Compact = Template.bind({})
Compact.args = {
  ...Default.args,
  size: 'Compact'
}
