import {FAQ} from '../blocks/FAQ'
import {Icon} from '../blocks/Icon'
import {ClientsLogos} from '../blocks/ClientsLogos'
import {Primary} from '../blocks/Primary'
import {Secondary} from '../blocks/Secondary'
import {Tertiary} from '../blocks/Tertiary'
import {Testimonials} from '../blocks/Testimonials'
import {Text} from '../blocks/Text'
import {Form} from './Form'
import {ButtonsGroup} from '../blocks/ButtonsGroup'

import React from 'react'

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  /**
   * background color
   */
  bgColor?: string
  /**
   * background video url
   */
  items?: {}
}

const getWidth = (args, length = 12) => {
 return length / Number(args[1]) *  Number(args[0])
}


/* // Syntax With dashes (Used in kirby)
const getComponent = (component) => {
  switch (component.type) {
    case 'faq':
      return <FAQ key={JSON.stringify(component.content)} {...component.content} />
    case 'icon':
      return <Icon key={JSON.stringify(component.content)} {...component.content} />
    case 'logos':
      return <ClientsLogos key={JSON.stringify(component.content)} {...component.content} />
    case 'primary':
      return <Primary key={JSON.stringify(component.content)} {...component.content} />
    case 'secondary':
      return <Secondary key={JSON.stringify(component.content)} {...component.content} />
    case 'tertiary':
      return <Tertiary key={JSON.stringify(component.content)} {...component.content} />
    case 'testimonials':
      return <Testimonials key={JSON.stringify(component.content)} {...component.content} />
    case 'text':
      return <Text key={JSON.stringify(component.content)} {...component.content} />
    case 'buttons-group':
      return <ButtonsGroup key={JSON.stringify(component.content)} {...component.content} />
    case 'form':
      return <Form key={JSON.stringify(component.content)} {...component.content} />
    default:
      return ('')
  }
} */


// Syntax With Camelcases (Used in components)
const getComponent = (component) => {
  switch (component.type) {
    case 'Faq':
      return <FAQ key={JSON.stringify(component.content)} {...component.content} />
    case 'Icon':
      return <Icon key={JSON.stringify(component.content)} {...component.content} />
    case 'Logos':
      return <ClientsLogos key={JSON.stringify(component.content)} {...component.content} />
    case 'Primary':
      return <Primary key={JSON.stringify(component.content)} {...component.content} />
    case 'Secondary':
      return <Secondary key={JSON.stringify(component.content)} {...component.content} />
    case 'Tertiary':
      return <Tertiary key={JSON.stringify(component.content)} {...component.content} />
    case 'Testimonials':
      return <Testimonials key={JSON.stringify(component.content)} {...component.content} />
    case 'text':
      return <Text key={JSON.stringify(component.content)} {...component.content} />
    case 'ButtonsGroup':
      return <ButtonsGroup key={JSON.stringify(component.content)} {...component.content} />
    case 'Form':
      return <Form key={JSON.stringify(component.content)} {...component.content} />
    default:
      return ('')
  }
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
      style={ { backgroundColor: `${bgColor}`}}
    >
      {
        content.map((section) => {
          return(
            <section className="grid grid-cols-12">
              {
                 section.columns.map((column) => {
                   return(
                     <div className={`col-span-${getWidth(column.width.split('/'))}`}>
                       {
                         column.blocks.map((block) => {
                           return getComponent(block);
                         })
                       }
                     </div>
                   )
                 })
              }
            </section>
          )
        })
      }
    </div>
  )
}
