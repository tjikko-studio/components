import {Form} from './Form'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Collections/Form',
  component: Form,
  argTypes: {

  },
  parameters: {
    componentSubtitle: 'Form'
  }
} as Meta

const Template = ({Component, items}) => <Form Component={Component} items={items} />

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      component: 'Input',
      items: {
        label: 'My input text',
        placeholder: 'Enter some text'
      }
    },
    {
      component: 'ButtonsGroup',
      items: {
        buttons: [{
          label: 'First Button',
          link: 'https://perdu.com'
        },{
          label: 'Second Button',
          link: 'https://perdu.com'
        }]
      }
    }
  ]
}
