import React, { FC, HTMLAttributes, useEffect, useState } from 'react'

import {Section} from '../collections/Section'
import {Hero} from '../collections/Hero'
import {Form} from '../collections/Form'

import {FAQ} from '../blocks/FAQ'
import {Icon} from '../blocks/Icon'
import {ClientsLogos} from '../blocks/ClientsLogos'
import {Primary} from '../blocks/Primary'
import {Secondary} from '../blocks/Secondary'
import {Tertiary} from '../blocks/Tertiary'
import {Testimonial} from '../blocks/Testimonial'
import {TextGroup} from '../blocks/TextGroup'

import {ButtonsGroup} from '../blocks/ButtonsGroup'
import {Heading} from '../blocks/Heading'
import {Text} from '../blocks/Text'

import getWidth from '../../utilities/getWidth'

export interface BlockProps {
  type: string
  content: any
}

export interface ColumnProps {
  width: string
  blocks: BlockProps[]
}

export interface TemplateItemProps {
  columns: ColumnProps[]
}

export interface TemplateProps extends HTMLAttributes<HTMLElement> {
  /**
   * Sections object that will be parsed through to build the component
   */
  pageId ?: "string"
  fetchedContent?: TemplateItemProps[]
  content?: {}
}

/**
 * Primary UI component for user interaction
 */
export const Template: FC<TemplateProps> = ({
  pageId,
  content,
  fetchedContent
}) => {
  return (
    <div>
    {pageId}
      {
        !fetchedContent ? <div>No template yet</div> : (
          fetchedContent.map(({columns}) => (
            <section key={JSON.stringify(columns)} className="grid grid-cols-12">
              {
                columns.map(({
                  width,
                  blocks
                }) => (
                  <div key={JSON.stringify(blocks)} className={`col-span-${getWidth(width)}`}>
                    {
                      blocks.map(getComponent)
                    }
                  </div>
                ))
              }
            </section>
          ))
        )
      }
    </div>
  );
}

function getComponent (component: {
  type: string,
  content: any
}) {
  switch (component.type) {
    case 'Section':
      return <Section key={JSON.stringify(component.content)} {...component.content} />
    case 'Hero':
      return <Hero 
        key={JSON.stringify(component.content)} {...component.content}
        bgColor={component.content.bg_color} bgHasImage={component.content.bg_has_image} bgHasVideo={component.content.bg_has_video} bgImage={component.content.bg_image[0]} bgVideo={component.content.bg_video[0]}
        />
    case 'Form':
      return <Form key={JSON.stringify(component.content)} {...component.content} />
    case 'FAQ':
      return <FAQ key={JSON.stringify(component.content)} {...component.content} />
    case 'Icon':
      return <Icon key={JSON.stringify(component.content)} {...component.content} />
    case 'ClientsLogos':
      return <ClientsLogos key={JSON.stringify(component.content)} {...component.content} />
    case 'Primary':
      return <Primary key={JSON.stringify(component.content)} {...component.content} />
    case 'Secondary':
      return <Secondary key={JSON.stringify(component.content)} {...component.content} />
    case 'Tertiary':
      return <Tertiary key={JSON.stringify(component.content)} {...component.content} />
    case 'Testimonial':
      return <Testimonial key={JSON.stringify(component.content)} {...component.content} />
    case 'TextGroup':
      return <TextGroup key={JSON.stringify(component.content)} {...component.content} />
    case 'ButtonsGroup':
      return <ButtonsGroup key={JSON.stringify(component.content)} {...component.content} />
    case 'Form':
      return <Form key={JSON.stringify(component.content)} {...component.content} />
    case 'Heading':
      return <Heading key={JSON.stringify(component.content)} {...component.content} level='h2' />
    case 'Text':
      return <Text key={JSON.stringify(component.content)} {...component.content} className='fontStyle-lg' tag='div' />
    default:
      console.error('Unrecognized section item type', component)
      return null
  }
}
