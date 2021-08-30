import React from 'react'
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

export const SimpleFormFullPage = Template.bind({})
SimpleFormFullPage.args = {
  layout: 'Simple form',
  width: "full",
  content: [
    {
      columns: [
        {
          width: "1/2",
          blocks: [
            {
              type: 'Input',
              content: {
                label: 'First Name',
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
                label: 'Last Name',
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
        },
        {
          width: "1/2",
          blocks: [
            {
              type: 'Input',
              content: {
                placeholder: 'Email label (personal, work…)'
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
                    type: 'primary',
                    size: 'large'
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

export const FormWithErrors = Template.bind({})
FormWithErrors.args = {
  layout: 'Simple form',
  width: "full",
  content: [
    {
      columns: [
        {
          width: "1/2",
          blocks: [
            {
              type: 'Input',
              content: {
                label: 'First and last name',
                placeholder: 'First Name',
                text: 'Joan'
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
                //label: 'Last Name',
                placeholder: 'Last name',
                isError: true,
                error: 'Please enter your last name'
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
        },
        {
          width: "1/2",
          blocks: [
            {
              type: 'Input',
              content: {
                placeholder: 'Email label (personal, work…)'
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
                    type: 'primary',
                    size: 'large'
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

export const InlineForm = Template.bind({})
InlineForm.args = {
  layout: 'Simple form',
  width: "1/2",
  content: [
    {
      columns: [
        {
          width: "2/3",
          blocks: [
            {
              type: 'Input',
              content: {
                label: 'Email',
                placeholder: 'Enter your email here',
              }
            }
          ]
        },
        {
          width: "1/3",
          blocks: [
            {
              type: 'ButtonsGroup',
              content: {
                buttons: [
                  {
                    label: 'Send',
                    link: '#',
                    width: 'auto',
                    type: 'primary',
                    size: 'large'
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
