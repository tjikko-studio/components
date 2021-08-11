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
  content: [
    {
      image: [{
        url: './images/test_logo_01.png'
      }],
      company: 'Company 01'},
    {
      image: [{
        url: './images/test_logo_02.png'
      }],
      company: 'Company 02'},
    {
      image: [{
        url: './images/test_logo_03.png'
      }],
      company: 'Company 03'},
    {
      image: [{
        url: './images/test_logo_04.png'
      }],
      company: 'Company 04'},
    {
      image: [{
        url: './images/test_logo_05.png'
      }],
      company: 'Company 05'},
    {
      image: [{
        url: './images/test_logo_06.png'
      }],
      company: 'Company 06'},
    {
      image: [{
        url: './images/test_logo_07.png'
      }],
      company: 'Company 07'},
    {
      image: [{
        url: './images/test_logo_08.png'
      }],
      company: 'Company 08'},
    {
      image: [{
        url: './images/test_logo_09.png'
      }],
      company: 'Company 09' }
  ],
  size: 'default'
}

export const Compact = Template.bind({})
Compact.args = {
  ...Default.args,
  size: 'compact'
}
