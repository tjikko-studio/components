import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {FeaturesShow, FeaturesShowProps} from './FeaturesShow'

export default {
  title: 'Tjikko/Blocks/FeaturesShow',
  component: FeaturesShow,
  argTypes: {},
  parameters: {
    componentSubtitle: 'FeaturesShow'
  }
} as Meta

const Template: Story<FeaturesShowProps> = (args) => {
  return <FeaturesShow {...args} />
}

const bodies = [
  '<p>Nullam egestas venenatis risus elementum bibendum. In ut ex nibh. Etiam pellentesque leo eu orci pellentesque fringilla.</p>',
  '<p>Vestibulum egestas urna odio, eu auctor purus bibendum vitae. In felis magna, convallis in urna quis, vulputate cursus nisi.</p>',
  '<p>Cras suscipit dolor velit, porta pharetra est tincidunt ac. Suspendisse id metus eros. Donec vehicula placerat felis in</p>',
  '<p>Donec hendrerit dapibus enim ut aliquet. Morbi blandit egestas massa. Vivamus finibus fringilla ex, vitae feugiat libero</p>',
  '<p>Nam malesuada mollis rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>',
  '<p>Proin ultrices, nisl ut iaculis aliquet, diam lorem volutpat lorem, eget interdum nisi libero mattis sem.</p>',
  '<p>Suspendisse maximus condimentum ipsum, sit amet faucibus sem dapibus congue.</p>',
  '<p>In hac habitasse platea dictumst. Pellentesque eleifend sodales viverra. Vestibulum tristique maximus lectus, at ornare</p>',
  '<p>Quisque dictum mollis consectetur.</p>',
  '<p>Vivamus vel enim a quam luctus dictum eu vitae magna.</p>',
  '<p>Pellentesque luctus velit at dolor pretium blandit. Donec dictum felis et tortor venenatis, a consectetur massa vulputate.</p>',
  '<p>Nunc pellentesque odio viverra consequat blandit. Praesent diam nunc, lacinia quis viverra vitae, dignissim vel elit. </p>'
]

const posListRandom = ['top|left', 'bottom|center', 'top|right', 'center|left', 'bottom|right', 'bottom|left', 'top|center', 'center|right']
const posListRepeat = ['top|left', 'top|left', 'center|right', 'center|right']

function makePopup(parentIdx: number, idx: number, pos: string) {
  return {
    title: `<p>Page ${parentIdx} / popup ${idx + 1}.</p>`,
    body: bodies[idx],
    position: pos
  }
}
function makePages({
  nbPages,
  nbPopups,
  makePopup,
  posList
}: {
  nbPages: number
  nbPopups: number | ((pageIdx: number) => number)
  makePopup: Function
  posList?: string[]
}) {
  const items = []
  for (let i = 0; i < nbPages; i += 1) {
    const page: any = {
      image: [
        {
          id: 'first-image',
          url: 'https://via.placeholder.com/1.gif'
        }
      ],
      info_boxes: []
    }
    const amount = typeof nbPopups === 'function' ? nbPopups(i) : nbPopups
    for (let j = 0; j < amount; j += 1) {
      const pos = posList[j % posList.length]
      page.info_boxes.push(makePopup(i, j, pos))
    }
    items.push(page)
  }
  return {
    header: [
      {
        content: {level: 'h2', alignment: '', text: 'All the right features for your sales team'},
        id: '136c0707-a321-4531-b798-b18691e0c0de',
        type: 'Heading'
      }
    ],
    items
  }
}

export const OnePopupPerPage = Template.bind({})
OnePopupPerPage.args = makePages({nbPages: 1, nbPopups: 1, makePopup, posList: posListRandom})

export const TwoPopupsPerPage = Template.bind({})
TwoPopupsPerPage.args = makePages({nbPages: 2, nbPopups: 2, makePopup, posList: posListRandom})

export const ThreePopupsPerPage = Template.bind({})
ThreePopupsPerPage.args = makePages({nbPages: 2, nbPopups: 3, makePopup, posList: posListRandom})

export const xPopupsOnPageX = Template.bind({})
xPopupsOnPageX.args = makePages({nbPages: 10, nbPopups: (pageIdx) => pageIdx, makePopup, posList: posListRandom})

export const RepeatingPopupPosition = Template.bind({})
RepeatingPopupPosition.args = makePages({nbPages: 2, nbPopups: 4, makePopup, posList: posListRepeat})
