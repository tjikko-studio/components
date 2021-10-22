import React, {FC} from 'react'

import {ButtonsGroup} from '../src/blocks/ButtonsGroup'
import {ClientsLogos} from '../src/blocks/ClientsLogos'
import {FAQ} from '../src/blocks/FAQ'
import {Heading} from '../src/blocks/Heading'
import {Icon} from '../src/blocks/Icon'
import {Primary} from '../src/blocks/Primary'
import {Secondary} from '../src/blocks/Secondary'
import {Template} from '../src/blocks/Template'
import {Tertiary} from '../src/blocks/Tertiary'
import {Testimonial} from '../src/blocks/Testimonial'
import {Text} from '../src/blocks/Text'
import {TextGroup} from '../src/blocks/TextGroup'
import {Form} from '../src/collections/Form'
import {Hero} from '../src/collections/Hero'
import {Section} from '../src/collections/Section'
import {Input} from '../src/form/Input'

import {BlockProps, ColumnProps, ComponentsExtraProps, ContentType} from '../shared/types'

type GetPropsFn<P = Record<string, unknown>> = (content: ContentType, id?: string, attrs?: {className: string}) => P

const getCommonProps: GetPropsFn = (content, id, attrs) => {
  return {
    key: id || JSON.stringify(content),
    className: attrs?.className
  }
}

const propsByType: Record<string, GetPropsFn> = {
  ButtonsGroups: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      className: 'mt-8'
    }
  },
  Hero: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      bgColor: content.bg_color,
      bgHasImage: content.bg_has_image,
      bgHasVideo: content.bg_has_video,
      bgImage: content.bg_image?.[0],
      bgVideo: content.bg_video?.[0]
    }
  },
  Primary: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      imagePosition: content.imageposition,
      layout: content.layout
    }
  },
  Secondary: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      imagePosition: content.imageposition,
      layout: content.layout
    }
  },
  Tertiary: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      imagePosition: content.imageposition,
      layout: content.layout
    }
  },
  Text: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      className: 'fontStyle-lg',
      tag: 'div'
    }
  }
}

function getProps(
  type: string,
  {content, id, attrs}: {content: ContentType; id?: string; attrs?: {className: string}},
  extraProps: ComponentsExtraProps = {},
  templatesContent: Record<string, ColumnProps> = {}
) {
  const specificProps = propsByType[type] ? propsByType[type](content, id, attrs) : getCommonProps(content, id, attrs)
  const baseProps = {
    ...content,
    templatesContent,
    ...specificProps
  }
  return {
    ...baseProps,
    ...(extraProps[type] ? extraProps[type](baseProps) : {})
  }
}

const ValidComponents: Record<string, FC> = {
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

export default function getComponent(templatesContent: Record<string, ColumnProps> = {}) {
  return function SelectedComponent(component: BlockProps, extraProps: ComponentsExtraProps): React.ReactElement {
    const Component = ValidComponents[component.type]
    try {
      return <Component {...getProps(component.type, component, extraProps, templatesContent)} />
    } catch (ex) {
      console.error('Unrecognized component type in getComponents', component)
      console.error(ex)
      return null
    }
  }
}
