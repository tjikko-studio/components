import React, {FC, HTMLAttributes} from 'react'
import {Form} from './Form'

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
import containVal from '../../utilities/containVal'

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
   * Content Position
   */
  contentPosition?: 'center|center' | 'bottom|left'

  /**
   * Layout width
   */
  layoutWidth?: 'default' | 'tight'

  /**
   * Layout vertical spacing
   */
  layoutSpacing?: 'default' | 'tight'

  /**
   * Sections object that will be parsed through to build the component
   */
  content?: SectionItemProps[]
}

function extractCombo (thing: string) {
  return thing ? thing.split('|') : [null, null]
}

export const Section: FC<SectionProps> = ({
  bgColor = 'transparent',
  layoutWidth = 'default',
  layoutSpacing = 'default',
  contentPosition = 'center|center',
  content = []
}) => {
  const [verAlign, horAlign] = extractCombo(contentPosition)
  const [theme, background] = extractCombo(bgColor)
  const align = (horAlign && verAlign) ? `justify-${horAlign} items-${verAlign}` : ''
  
  return (
    <div className={`
      overflow-hidden
      ${theme ? theme : ''}
    `}
    style={{ backgroundColor: background}}
    >
      <div
      className={`
      grid gap-y-8 sm:gap-y-12 md:gap-y-16 w-full h-full max-w-screen-xl mx-auto
      ${layoutWidth === 'tight' ? 'px-4 sm:px-8 md:px-24' : 'px-4 sm:px-8 md:px-12'}
      ${layoutSpacing === 'tight' ? 'py-8 sm:py-12 md:py-16' : 'py-16 sm:py-24 md:py-32'}
      ${align ? align : ''}
    `}>
      {
        content.map(({columns}) => {
          let headerClass = content.length >= 2 && containVal(columns[0].blocks, 'type', ['Heading', 'Text']) ? 'mb-4 sm: mb-8' : ''
          return(
              <section key={JSON.stringify(columns)} className="grid sm:grid-cols-12 gap-y-8 sm:gap-y-12 md:gap-y-24 sm:gap-x-12 md:gap-x-16 w-full h-full">
                {
                  columns.map(({
                    width,
                    blocks
                  }) => (
                    <div key={JSON.stringify(blocks)} className={`col-span-${getWidth(width)} flex flex-col ${align} space-y-8 h-full ${headerClass}`}>
                      {
                        blocks.map(getComponent)
                      }
                    </div>
                  ))
                }
              </section>
            )
          }
        )
      }
    </div>
    </div>
  )
}

let imagePosPrimary = 'undefined';
let imagePosSecondary = 'undefined';
let imagePosTertiary = 'undefined';
const getNewPos = (prevPos: string, newPos: string) =>{
  if (newPos === 'top') {
    return 'top'
  } else {
    switch (`${prevPos} | ${newPos}`){
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
      imagePosPrimary = getNewPos(imagePosPrimary, component.content.imageposition);
      return <Primary key={JSON.stringify(component.content)} {...component.content} imagePosition={imagePosPrimary} layout={component.content.cardlayout} />
    case 'Secondary':
      imagePosSecondary = getNewPos(imagePosSecondary, component.content.imageposition);
      return <Secondary key={JSON.stringify(component.content)} {...component.content} imagePosition={imagePosSecondary} layout={component.content.cardlayout} />
    case 'Tertiary':
      imagePosTertiary = getNewPos(imagePosTertiary, component.content.imageposition);
      return <Tertiary key={JSON.stringify(component.content)} {...component.content} imagePosition={imagePosTertiary} layout={component.content.cardlayout} />
    case 'Testimonial':
      return <Testimonial key={JSON.stringify(component.content)} {...component.content} />
    case 'TextGroup':
      return <TextGroup key={JSON.stringify(component.content)} {...component.content} />
    case 'ButtonsGroup':
      return <ButtonsGroup key={JSON.stringify(component.content)} {...component.content}  className='mt-8' />
    case 'Form':
      return <Form key={JSON.stringify(component.content)} {...component.content} />
    case 'Heading':
      return <Heading key={JSON.stringify(component.content)} {...component.content} className='text-gray-900 dark:text-gray-50' level={!component.content.level ? 'h2' : component.content.level}
    />
    case 'Text':
      return <Text key={JSON.stringify(component.content)} {...component.content} className='text-gray-900 dark:text-gray-50 fontStyle-lg' tag='div' />
    default:
      console.error('Unrecognized section item type', component)
      return null
  }
}
