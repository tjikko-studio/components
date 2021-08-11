import {Form, FormProps} from './Form'
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

const Template: Story<FormProps> = (args) => <Form {...args} />

export const Default = Template.bind({})
Default.args = {
  layout: 'compact',
  content: [
    {
      columns: [
        {
          width: "1/2",
          blocks: [
            {
              type: 'Input',
              content: {
                label: 'Name',
                placeholder: ''
              }
            }
          ]
        },
        {
          width: "1/2",
          blocks: [
            {
              type: 'Input',
              content: {
                label: 'Email',
                placeholder: ''
              }
            }
          ]
        }
      ]
    },
    {
      columns: [
        {
          width: "1/1",
          blocks: [
            {
              type: 'ButtonsGroup',
              content: {
                buttons: [
                  {
                    label: 'Send',
                    link: '#',
                    type: 'primary'
                  },
                ]
              }
            }
          ]
        }
      ]
    }
  ]
}