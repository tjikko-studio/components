import {Section, SectionProps} from './Section'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Collections/Section',
  component: Section,
  argTypes: {

  },
  parameters: {
    componentSubtitle: 'Section'
  }
} as Meta

const Template: Story<SectionProps> = (args) => <Section {...args} />

export const Default = Template.bind({})
Default.args = {
  bgColor: '#F3F4F6',
  content: [
    {
      columns: [
        {
          width: "1/1",
          blocks: [
            {
              type: 'Primary',
              content: {
                type: 'default',
                imagePosition: 'automatic',
                image: [{
                  url: 'https://source.unsplash.com/random'
                }],
                title: 'Heading',
                body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.',
                buttons: [
                  {
                    label: 'Primary button',
                    link: '#',
                    type: 'tertiary'
                  },
                ]
              }
            },
            {
              type: 'Primary',
              content: {
                type: 'default',
                imagePosition: 'automatic',
                image: [{
                  url: 'https://source.unsplash.com/random'
                }],
                title: 'Heading',
                body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.',
                buttons: [
                  {
                    label: 'Primary button',
                    link: '#',
                    type: 'tertiary'
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
