import React, {FC} from 'react'

import {ButtonsGroup} from '../src/blocks/ButtonsGroup'
import {Divider} from '../src/blocks/Divider'
import {Gallery} from '../src/blocks/Gallery'
import {Heading} from '../src/blocks/Heading'
import {Text} from '../src/blocks/Text'
import {Input} from '../src/form/Input'
import {TextArea} from '../src/form/Textarea'

import {BlockProps, ComponentsExtraProps, ContentType} from '../shared/types'

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
  extraProps: ComponentsExtraProps = {}
) {
  const specificProps = propsByType[type] ? propsByType[type](content, id, attrs) : getCommonProps(content, id, attrs)
  const baseProps = {
    ...content,
    ...specificProps
  }
  return {
    ...baseProps,
    ...(extraProps[type] ? extraProps[type](baseProps) : {})
  }
}

const ValidComponents: Record<string, FC> = {
  ButtonsGroup,
  Divider,
  Heading,
  Input,
  TextArea,
  Gallery,
  Text
}

export default function getComponentLite() {
  return function SelectedComponent(component: BlockProps, extraProps?: ComponentsExtraProps): React.ReactElement {
    const Component = ValidComponents[component.type]
    try {
      return <Component {...getProps(component.type, component, extraProps)} />
    } catch (ex) {
      console.error('Unrecognized component type in getComponents', component)
      console.error(ex)
      return null
    }
  }
}
