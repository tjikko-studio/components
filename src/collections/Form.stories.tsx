import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {Form, FormProps} from './Form'

export default {
  title: 'Tjikko/Collections/Form',
  component: Form,
  argTypes: {},
  parameters: {
    componentSubtitle: 'Form'
  }
} as Meta

const Template: Story<FormProps> = (args) => {
  return <Form {...args} />
}

export const SimpleFormFullPage = Template.bind({})
SimpleFormFullPage.args = {
  content: [
    {
      columns: [
        {
          width: '1/2',
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
          width: '1/2',
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
          width: '1/2',
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
          width: '1/2',
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
          width: '1/1',
          blocks: [
            {
              type: 'ButtonsGroup',
              content: {
                buttons: [
                  {
                    label: 'Send',
                    link: '#send',
                    type: 'primary',
                    size: 'large'
                  }
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
  content: [
    {
      columns: [
        {
          width: '1/2',
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
          width: '1/2',
          blocks: [
            {
              type: 'Input',
              content: {
                // label: 'Last Name',
                placeholder: 'Last name',
                isError: true,
                error: 'Please enter your last name'
              }
            }
          ]
        },
        {
          width: '1/2',
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
          width: '1/2',
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
          width: '1/1',
          blocks: [
            {
              type: 'ButtonsGroup',
              content: {
                buttons: [
                  {
                    label: 'Send',
                    link: '#send',
                    type: 'primary',
                    size: 'large'
                  }
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
  content: [
    {
      columns: [
        {
          width: '2/3',
          blocks: [
            {
              type: 'Input',
              content: {
                label: 'Email',
                placeholder: 'Enter your email here'
              }
            }
          ]
        },
        {
          width: '1/3',
          blocks: [
            {
              type: 'ButtonsGroup',
              content: {
                buttons: [
                  {
                    label: 'Send',
                    link: '#send',
                    width: 'auto',
                    type: 'primary',
                    size: 'large'
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ]
}

export const AnnotatedFormFullPage = Template.bind({})
AnnotatedFormFullPage.args = {
  content: [
    {
      columns: [
        {
          width: '1/2',
          blocks: [
            {
              type: 'Input',
              content: {
                label: 'Huge field with label on the long side',
                placeholder: 'write here',
                information:
                  'But not before we bombard you with extra instructions and make it very hard for the rest of the form to properly align in all imaginable cases!', // eslint-disable-line max-len
                error: 'Especially if you take errors into account…'
              }
            }
          ]
        },
        {
          width: '1/2',
          blocks: [
            {
              type: 'Input',
              content: {
                label: 'Short & Sweet',
                placeholder: 'optional'
              }
            }
          ]
        }
      ]
    },
    {
      columns: [
        {
          width: '1/2',
          blocks: [
            {
              type: 'Input',
              content: {
                label: 'Email',
                placeholder: 'name@example.com'
              }
            }
          ]
        },
        {
          width: '1/2',
          blocks: [
            {
              type: 'ButtonsGroup',
              content: {
                buttons: [
                  {
                    label: 'OK',
                    link: '#send',
                    type: 'primary',
                    size: 'large'
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ]
}
