import {Hero, HeroProps} from './Hero'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Collections/Hero',
  component: Hero,
  argTypes: {

  },
  parameters: {
    componentSubtitle: 'Hero'
  }
} as Meta

const Template: Story<HeroProps> = (args) => <Hero {...args} />

export const Default = Template.bind({})
Default.args = {
  bgColor: '#000',
  bgType: 'video',
  bgImage: 'https://source.unsplash.com/random',
  bgVideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  content: [
    {
      component: 'Form',
      items: [
        {
          component: 'Input',
          props: {
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
