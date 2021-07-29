import {HeroBlock, HeroBlockProps} from './HeroBlock'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/blocks/Hero Block',
  component: HeroBlock,
  argTypes: {
    bgType: {options: ['image', 'video'], control: {type: 'select'}},
  },
  parameters: {
    componentSubtitle: 'The Hero Block'
  }
} as Meta

const Template: Story<HeroBlockProps> = (args) => <HeroBlock {...args} />

export const Default = Template.bind({})
Default.args = {
  bgType: 'video',
  bgVideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  headerInfo: {
    styles: {
      type: 'default',
      buttonText: 'Book a demo',
      formPlaceholder: 'Work email',
      caseText: 'SP Architectutes',
      url: '#/header/text',
    },
    title: 'Real-time 3D experiences enabling decision-makers',
    breadcrumb: [
      {
        name: 'breadcrumb',
        url: '/bread1'
      },
      {
        name: 'breadcrumb',
        url: '/bread2'
      }
    ],
    text: 'Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
  }
}
