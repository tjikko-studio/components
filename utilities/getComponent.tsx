import React, {FC} from 'react'

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
import {Template} from '../src/blocks/Template'
import {Text} from '../src/blocks/Text'


function getCommonProps (content: any, id?: string) {
  return {
    key: id || JSON.stringify(content), // TODO: find shorter, better key for each component
  }
}

const propsByType: any = {
  ButtonsGroups: (content: any, id?: string) => {
    return {
      ...getCommonProps(content, id),
      className: 'mt-8'
    }
  },
  Hero: (content: any, id?: string) => {
    return {
      ...getCommonProps(content, id),
      bgColor: content.bg_color,
      bgHasImage: content.bg_has_image,
      bgHasVideo: content.bg_has_video,
      bgImage: content.bg_image?.[0],
      bgVideo: content.bg_video?.[0]
    }
  },
  Primary: (content: any, id?: string) => {
    return {
      ...getCommonProps(content, id),
      imagePosition: content.imageposition,
      layout: content.layout
    }
  },
  Secondary: (content: any, id?: string) => {
    return {
      ...getCommonProps(content, id),
      imagePosition: content.imageposition,
      layout: content.layout
    }
  },
  Tertiary: (content: any, id?: string) => {
    return {
      ...getCommonProps(content, id),
      imagePosition: content.imageposition,
      layout: content.layout
    }
  },
  Text: (content: any, id?: string) => {
    return {
      ...getCommonProps(content, id),
      className: 'fontStyle-lg',
      tag: 'div'
    }
  }
}

function getProps (
  type: string,
  {content, id}: {content:object, id?:string},
  extraProps: Record<string, Function> = {}
) {
  const specificProps = propsByType[type] ? propsByType[type](content, id) : getCommonProps(content, id)
  const basProps = {
    ...content,
    ...specificProps
  }
  return {
    ...basProps,
    ...(extraProps[type] ? extraProps[type](basProps) : {})
  }
}

const ValidComponents:Record<string, FC> = {
  ButtonsGroup,
  ClientsLogos,
  FAQ,
  Form,
  Heading,
  Hero,
  Icon,
  Input,
  Primary,
  Secondary,
  Section,
  Tertiary,
  Testimonial,
  TextGroup,
  Template,
  Text
}

export default function getComponent (
  component: {
    type: string,
    content: any
  },
  extraProps: any
) {
  const Component = ValidComponents[component.type]
  try {
    return <Component {...getProps(component.type, component, extraProps)} />
  } catch (ex) {
    console.error('Unrecognized component type', component)
    console.error(ex)
    return null
  }
}
