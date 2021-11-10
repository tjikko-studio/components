import React, {FC} from 'react'

import {ButtonsGroup} from '../src/blocks/ButtonsGroup'
import {Calendly} from '../src/blocks/Calendly'
import {ClientsLogos} from '../src/blocks/ClientsLogos'
import {Divider} from '../src/blocks/Divider'
import {FAQ} from '../src/blocks/FAQ'
import {Gallery} from '../src/blocks/Gallery'
import {Heading} from '../src/blocks/Heading'
import {Icon} from '../src/blocks/Icon'
import {Primary} from '../src/blocks/Primary'
import {Secondary} from '../src/blocks/Secondary'
import {Template} from '../src/blocks/Template'
import {Tertiary} from '../src/blocks/Tertiary'
import {Testimonial} from '../src/blocks/Testimonial'
import {Text} from '../src/blocks/Text'
import {TextGroup} from '../src/blocks/TextGroup'
import {Timeline} from '../src/blocks/Timeline'
import {Article} from '../src/collections/Article'
import {Collection} from '../src/collections/Collection'
import {Form} from '../src/collections/Form'
import {Hero} from '../src/collections/Hero'
import {Section} from '../src/collections/Section'
import {Input} from '../src/form/Input'
import {TextArea} from '../src/form/TextArea'

import {BlockProps, ColumnProps, ComponentsExtraProps, ContentType} from '../shared/types'

type GetPropsFn<P = Record<string, unknown>> = (content: ContentType, id?: string, attrs?: {className: string}) => P

const getCommonProps: GetPropsFn = (content, id, attrs) => {
  return {
    key: id || JSON.stringify(content),
    className: attrs?.className
  }
}
const propsByType: Record<string, GetPropsFn> = {
  ButtonsGroup: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      fullWidth: content.full_width
    }
  },
  Hero: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      bgColor: content.bg_color,
      wrapperColor: content.wrapper_color,
      aboveColor: content.above_color,
      bgType: content.bg_type,
      bgImage: content.bg_image?.[0],
      bgVideo: content.bg_video?.[0],
      bgVideoFallback: content.bg_video_fallback?.[0]
    }
  },
  Calendly: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      ...content,
      bgColor: content.bg_color
    }
  },
  ClientsLogos: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      logosLayout: content.logos_layout
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
      className: 'fontStyle-base',
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
  Article,
  ButtonsGroup,
  Calendly,
  Collection,
  ClientsLogos,
  Divider,
  FAQ,
  Form,
  Heading,
  Hero,
  Icon,
  Input,
  TextArea,
  Primary,
  Secondary,
  Section,
  Gallery,
  Tertiary,
  Testimonial,
  Timeline,
  TextGroup,
  Template,
  Text
}

export default function getComponent(templatesContent: Record<string, ColumnProps> = {}) {
  return function SelectedComponent(component: BlockProps, extraProps?: ComponentsExtraProps): React.ReactElement {
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
