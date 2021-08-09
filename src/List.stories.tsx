import React from 'react'
import {List, ListProps} from './List'
import {FAQ} from './blocks/FAQ'
import {CTA} from './blocks/CTA'
import {Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/List',
  component: List,
  argTypes: {

  },
  parameters: {
    componentSubtitle: 'List'
  }
} as Meta

const Template = ({Component, items}: ListProps<any>) => <List Component={Component} items={items} />

export const FAQList = Template.bind({})
FAQList.args = {
  Component: FAQ,
  items: [{
    question: 'Quite a long question  aenean lacinia bibendum nulla sed consectetur maecenas sed diam eget risus.',
    answer: 'Quite a long answer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor.  Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.'
  }, {
    question: 'Question 2',
    answer: 'Answer 2'
  }]
}

export const CTAList = Template.bind({})
CTAList.args = {
  Component: CTA,
  items: [{
    title: 'CTA title',
    body: 'CTA body',
    ctas: [{
      label: 'link label',
      link: 'https://perdu.com'
    }]
  }, {
    title: 'Second CTA',
    body: 'Description',
    ctas: [{
      label: 'Call To Action',
      link: 'https://perdu.com'
    }]
  }]
}
