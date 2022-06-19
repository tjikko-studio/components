import React from 'react'

import {ButtonsGroup} from '../src/blocks/ButtonsGroup'
import {Calendly} from '../src/blocks/Calendly'
import {Card} from '../src/blocks/Card'
import {ClientsLogos} from '../src/blocks/ClientsLogos'
import {Divider} from '../src/blocks/Divider'
import {FAQ} from '../src/blocks/FAQ'
import {Figure} from '../src/blocks/Figure'
import {Gallery} from '../src/blocks/Gallery'
import {Header} from '../src/blocks/Header'
import {Heading} from '../src/blocks/Heading'
import {Icon} from '../src/blocks/Icon'
import {Primary} from '../src/blocks/Primary'
import {Template} from '../src/blocks/Template'
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
import {Columns, ColumnsBlockProps} from '../src/layouts/Columns'

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
  Calendly: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      bgColor: content.bg_color
    }
  },
  Card: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      imagePosition: content.imagePosition || content.image_position,
      layout: content.layout,
      hasBackground: typeof content.hasBackground === 'undefined' ? content.has_background : content.hasBackground,
      bgColor: content.bgColor || content.bg_color,
      isElevated: typeof content.isElevated === 'undefined' ? content.is_elevated : content.isElevated
    }
  },
  ClientsLogos: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      logosLayout: content.logos_layout,
      logosGrayscale: content.logos_grayscale
    }
  },
  Collection: (content, id, attrs) => {
    const {
      datasource: dataSource,
      collection_bg_color: bgColor,
      layout: cardLayout,
      image_position: cardImagePosition,
      is_elevated: cardIsElevated,
      has_background: cardHasBackground,
      colors: cardBgColor,
      cards_buttons_size: cardButtonSize,
      cards_buttons_type: cardButtonType,
      ...rest
    } = content
    return {
      ...getCommonProps(content, id, attrs),
      dataSource,
      bgColor,
      cardLayout,
      cardImagePosition,
      cardIsElevated,
      cardHasBackground,
      cardBgColor,
      cardButtonSize,
      cardButtonType,
      ...rest
    }
  },
  Header: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      headerType: content.header_type,
      headerAlign: content.header_align
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
  Primary: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      imagePosition: content.imageposition,
      textPositionVertical: content.text_position_vertical,
      textPositionHorizontal: content.text_position_horizontal,
      textSize: content.text_size,
      layout: content.layout
    }
  },
  Text: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      tag: 'div'
    }
  },
  TextGroup: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      titleSize: content.title_size,
      textAlign: content.text_align,
      mobileIgnoreAlign: content.mobile_ignore_align,
      verticalAlign: content.vertical_align,
      ratio: content.ratio,
      hasSepar: content.has_separ,
      hasBackground: content.has_background,
      contentShadow: content.content_shadow,
      dark: content.dark,
      bgColor: content.bg_color,
      image: content.image,
      isElevated: content.is_elevated,
      fullHeight: content.full_height
    }
  },
  Timeline: (content, id, attrs) => {
    return {
      ...getCommonProps(content, id, attrs),
      lineColor: content.line_color,
      style: {
        marginBottom: content.box_margin_bottom
      }
    }
  }
}

function getProps(
  type: string,
  {content, id, attrs}: {content: ContentType; id?: string; attrs?: {className: string}},
  extraProps: ComponentsExtraProps = {},
  templatesContent: Record<string, ColumnProps> = {},
  locale?: string
) {
  const specificProps = propsByType[type] ? propsByType[type](content, id, attrs) : getCommonProps(content, id, attrs)
  const baseProps = {
    locale,
    ...content,
    templatesContent,
    ...specificProps
  }
  return {
    ...baseProps,
    ...(extraProps[type] ? extraProps[type](baseProps) : {})
  }
}

const ValidComponents: Record<string, any> = {
  Article,
  ButtonsGroup,
  Calendly,
  Card,
  Collection,
  ClientsLogos,
  Divider,
  FAQ,
  Form,
  Figure,
  Header,
  Heading,
  Hero,
  Icon,
  Input,
  TextArea,
  Primary,
  Section,
  Gallery,
  Testimonial,
  Timeline,
  TextGroup,
  Template,
  Text
}

export default function getComponent(templatesContent: Record<string, ColumnProps> = {}, locale?: string) {
  return function SelectedComponent(component: BlockProps | ColumnsBlockProps, extraProps?: ComponentsExtraProps): React.ReactElement {
    const block = component as BlockProps
    if (block.type) {
      const Component = ValidComponents[block.type]
      if (!Component) {
        console.error('Unrecognized component type in getComponents', block)
        return null
      }
      try {
        return <Component {...getProps(block.type, component as BlockProps, extraProps, templatesContent, locale)} />
      } catch (ex) {
        console.error('Unable to render', component)
        console.error(ex)
        return null
      }
    }
    const columnsBlock = component as ColumnsBlockProps
    if (columnsBlock.columns) {
      return <Columns columns={columnsBlock.columns} templatesContent={templatesContent} locale={locale} extraProps={extraProps} />
    }
    console.error('Dunno what to do with this', component)
    return null
  }
}
