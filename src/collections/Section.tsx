import React, {FC, HTMLAttributes} from 'react'
import {Form} from './Form'

import {FAQ} from '../blocks/FAQ'
import {Icon} from '../blocks/Icon'
import {ClientsLogos} from '../blocks/ClientsLogos'
import {Primary, PrimaryProps} from '../blocks/Primary'
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

export interface SectionItemProps {
  columns: ColumnProps[]
}

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Background color
   */
  bgColor?: string

  /**
   * Sections object that will be parsed through to build the component
   */
  content?: SectionItemProps[]
}

export const Section: FC<SectionProps> = ({
  bgColor,
  content
}) => {

  return (
    <div
      className={`
      flex flex-col
      py-16 xs:py-20 md:py-24 lg:py-32
      space-y-12 xs:space-y-14 md:space-y-16 lg:space-y-24
    `}
      style={{backgroundColor: `${bgColor}`}}
    >
      {
        content.map(({columns}) => (
          <section className="grid grid-cols-12">
            {
              columns.map(({
                width,
                blocks
              }) => (
                <div className={`col-span-${getWidth(width)}`}>
                  {
                    blocks.map(getComponent)
                  }
                </div>
              ))
            }
          </section>
        ))
      }
    </div>
  )
}

function getComponent (component: {
  type: string,
  content: any
}) {
  switch (component.type) {
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
      return <Heading key={JSON.stringify(component.content)} {...component.content} level="h2" className='fontStyle-4xl' />
    case 'Text':
      return <Text key={JSON.stringify(component.content)} {...component.content} className='fontStyle-lg' tag='div' />
    default:
      return ('')
  }
}
