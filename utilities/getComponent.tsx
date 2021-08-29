import React from 'react'

import {ButtonsGroup} from '../src/blocks/ButtonsGroup'
import {ClientsLogos} from '../src/blocks/ClientsLogos'
import {FAQ} from '../src/blocks/FAQ'
import {Form} from '../src/collections/Form'
import {Heading} from '../src/blocks/Heading'
import {Hero} from '../src/collections/Hero'
import {Icon} from '../src/blocks/Icon'
import {Input} from '../src/form/Input'
import {Primary} from '../src/blocks/Primary'
import {Secondary} from '../src/blocks/Secondary'
import {Section} from '../src/collections/Section'
import {Tertiary} from '../src/blocks/Tertiary'
import {Testimonial} from '../src/blocks/Testimonial'
import {TextGroup} from '../src/blocks/TextGroup'
import {Text} from '../src/blocks/Text'



let imagePosPrimary = 'undefined'
let imagePosSecondary = 'undefined'
let imagePosTertiary = 'undefined'

function getNewPos (prevPos: string, newPos: string) {
  switch (`${prevPos} | ${newPos}`) {
    case 'undefined | auto':
      return 'left'
    case 'left | auto':
      return 'right'
    case 'right | auto':
      return 'left'
    default:
      return newPos
  }
}

function getCommonProps (content: any) {
  return {
    key: JSON.stringify(content), // TODO: find shorter, better key for each component
  }
}

const propsByType: any = {
  ButtonsGroups: (content: any) => {
    return {
      ...getCommonProps(content),
      className: 'mt-8'
    }
  },
  Hero: (content:any) => {
    return {
      ...getCommonProps(content),
      bgColor: content.bg_color,
      bgHasImage: content.bg_has_image,
      bgHasVideo: content.bg_has_video,
      bgImage: content.bg_image[0],
      bgVideo: content.bg_video[0]
    }
  },
  Primary: (content: any) => {
    imagePosPrimary = getNewPos(imagePosPrimary, content.imageposition)
    return {
      ...getCommonProps(content),
      imagePosition: imagePosPrimary,
      layout: content.cardlayout
    }
  },
  Secondary: (content: any) => {
    imagePosSecondary = getNewPos(imagePosSecondary, content.imageposition)
    return {
      ...getCommonProps(content),
      imagePosition: imagePosSecondary,
      layout: content.cardlayout
    }
  },
  Tertiary: (content: any) => {
    imagePosTertiary = getNewPos(imagePosTertiary, content.imageposition)
    return {
      ...getCommonProps(content),
      imagePosition: imagePosTertiary,
      layout: content.cardlayout
    }
  },
  Text: (content: any) => {
    return {
      ...getCommonProps(content),
      className: 'fontStyle-lg',
      tag: 'div'
    }
  }
}

function getProps (
  type: string,
  {content}: {content:object},
  extraProps: Record<string, Function> = {}
) {
  const specificProps = propsByType[type] ? propsByType[type](content) : getCommonProps(content)
  const basProps = {
    ...content,
    ...specificProps
  }
  return {
    ...basProps,
    ...(extraProps[type] ? extraProps[type](basProps) : {})
  }
}

export default function getComponent (
  component: {
    type: string,
    content: any
  },
  extraProps: any
) {

  switch (component.type) {
    case 'ButtonsGroup':
      return <ButtonsGroup {...getProps('ButtonsGroup', component, extraProps)} />
    case 'ClientsLogos':
      return <ClientsLogos {...getProps('ClientsLogos', component, extraProps)} />
    case 'FAQ':
      return <FAQ {...getProps('FAQ', component, extraProps)} />
    case 'Form':
      return <Form {...getProps('Form', component, extraProps)} />
    case 'Heading':
      return <Heading {...getProps('Heading', component, extraProps)} />
    case 'Hero':
      return <Hero {...getProps('Hero', component, extraProps)} />
    case 'Icon':
      return <Icon {...getProps('Icon', component, extraProps)} />
    case 'Input':
      return <Input {...getProps('Input', component, extraProps)} />
    case 'Primary':
      return <Primary {...getProps('Primary', component, extraProps)} />
    case 'Secondary':
      return <Secondary {...getProps('Secondary', component, extraProps)} />
    case 'Section':
      return <Section {...getProps('Section', component, extraProps)} />
    case 'Tertiary':
      return <Tertiary {...getProps('Tertiary', component, extraProps)} />
    case 'Testimonial':
      return <Testimonial {...getProps('Testimonial', component, extraProps)} />
    case 'TextGroup':
      return <TextGroup {...getProps('TextGroup', component, extraProps)} />
    case 'Text':
      return <Text {...getProps('Text', component, extraProps)} />
    default:
      console.error('Unrecognized component type', component)
      return null
  }
}
