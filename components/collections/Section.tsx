import React from 'react'
import {Faq} from '../blocks/Faq'
import {Icon} from '../blocks/Icon'
import {ClientsLogos} from '../blocks/ClientsLogos'
import {Primary} from '../blocks/Primary'
import {Secondary} from '../blocks/Secondary'
import {Tertiary} from '../blocks/Tertiary'
import {Testimonial} from '../blocks/Testimonial'
import {TextGroup} from '../blocks/TextGroup'
import {Form} from './Form'
import {ButtonsGroup} from '../blocks/ButtonsGroup'
import {Heading} from '../blocks/Heading'
import {Text} from '../blocks/Text'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Background datas
   */
  bgColor ?: string
  
  /**
   * Sections object that will be parsed through to build the component
   */
  content?: {}
}

const getWidth = (args, length = 12) => {
 return length / Number(args[1]) *  Number(args[0])
}

// Syntax With Camelcases (Used in components)
const getComponent = (component) => {
  switch (component.type) {
    case 'Faq':
      return <Faq key={JSON.stringify(component.content)} {...component.content} />
    case 'Icon':
      return <Icon key={JSON.stringify(component.content)} {...component.content} />
    case 'ClientsLogos':
      return <ClientsLogos key={JSON.stringify(component.content)} {...component.content} />
    case 'Primary':
      return <Primary key={JSON.stringify(component.content)} {...component.content}  />
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
      return <Text key={JSON.stringify(component.content)} {...component.content} className='fontStyle-lg' />
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
        content.map((section) => (
          <section className="grid grid-cols-12">
            {
              section.columns.map((column) => (
                <div className={`col-span-${getWidth(column.width.split('/'))}`}>
                  {
                    column.blocks.map((block) => {
                      return getComponent(block);
                    })
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
