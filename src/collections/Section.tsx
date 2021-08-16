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
  contentPosition?: string

  /**
   * Layout width
   */
   layoutWidth?: string

   /**
    * Layout vertical spacing
    */
    layoutSpacing?: string

  /**
   * Sections object that will be parsed through to build the component
   */
  content?: SectionItemProps[]
}

export const Section: FC<SectionProps> = ({
  bgColor,
  layoutWidth,
  layoutSpacing,
  contentPosition,
  content
}) => {
  const verAlign = contentPosition.split('|')[0];
  const horAlign = contentPosition.split('|')[1];
  const theme = bgColor.split('|')[0]
  const background = bgColor.split('|')[1];
  let align = '';
  let spacing = '';

  if (layoutWidth === 'full' || layoutWidth === ''){
    layoutWidth = `px-4 xs:px-8 md:px-12`
  } else if  (layoutWidth === 'tight'){
    layoutWidth = `px-4 xs:px-24 md:px-32`
  }

  if (layoutSpacing === 'full' || layoutSpacing === ''){
    layoutSpacing = `py-16 sm:py-20 md:py-32
               space-y-12 sm:space-y-24 md:space-y-24`
  } else if  (layoutSpacing === 'tight'){
    layoutSpacing = `py-8 sm:py-10 md:py-16
               space-y-6 sm:space-y-12 md:space-y-12`
  }
  
  if (horAlign && verAlign)
    align = `justify-${horAlign} items-${verAlign}`;
  
  return (
    <div
      className={`
      flex flex-col
      ${layoutWidth}
      ${layoutSpacing}
      ${align}
      ${theme} 
    `}
      style={{backgroundColor: `${ background }`}}
    >
      {
        content.map(({columns}) => (
          <section key={JSON.stringify(columns)} className="grid grid-cols-12 gap-12 xs:gap-14 md:gap-24 w-full">
            {
              columns.map(({
                width,
                blocks
              }) => (
                <div key={JSON.stringify(blocks)} className={`col-span-${getWidth(width)} flex flex-col ${align}`}>
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
  if (component.type === 'Primary')
    imagePosPrimary = getNewPos(imagePosPrimary, component.content.imageposition);
  if (component.type === 'Secondary')
    imagePosSecondary = getNewPos(imagePosSecondary, component.content.imageposition);
  if (component.type === 'Tertiary')
    imagePosTertiary = getNewPos(imagePosTertiary, component.content.imageposition);   
  switch (component.type) {
    case 'FAQ':
      return <FAQ key={JSON.stringify(component.content)} {...component.content} />
    case 'Icon':
      return <Icon key={JSON.stringify(component.content)} {...component.content} />
    case 'ClientsLogos':
      return <ClientsLogos key={JSON.stringify(component.content)} {...component.content} />
    case 'Primary':
      return <Primary key={JSON.stringify(component.content)} {...component.content} imagePosition={imagePosPrimary} layout={component.content.cardlayout} />
    case 'Secondary':
      return <Secondary key={JSON.stringify(component.content)} {...component.content} imagePosition={imagePosSecondary} layout={component.content.cardlayout} />
    case 'Tertiary':
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
      return <Heading key={JSON.stringify(component.content)} {...component.content} className='text-gray-900 dark:text-gray-50 mb-4' level={!component.content.level ? 'h2' : component.content.level}
    />
    case 'Text':
      return <Text key={JSON.stringify(component.content)} {...component.content} className='text-gray-900 dark:text-gray-50 fontStyle-lg' tag='div' />
    default:
      console.error('Unrecognized section item type', component)
      return null
  }
}
