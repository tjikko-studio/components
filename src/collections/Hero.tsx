import React, {FC, HTMLAttributes} from 'react'
import {ButtonsGroup} from '../blocks/ButtonsGroup'
import {Heading} from '../blocks/Heading'
import {Text} from '../blocks/Text'
import {Form} from './Form'
import {ImageProps} from '../parts/Media'

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  /**
   * Background data
   */
  bgColor?: string
  bgHasImage ?: boolean
  bgHasVideo ?: boolean
  bgImage ?: ImageProps | null
  bgVideo ?: ImageProps | null

  /**
   * Content Position
   */
  contentPosition ?: 'top|left' | 'top|center' | 'top|right' | 'center|left' | 'center|center' | 'center|right' | 'bottom|left' | 'bottom|center' | 'bottom|right'
  heroHeight?: string,


  /**
   * Hero object that will be parsed through to build the component
   */
  content?: []
}

const getHorPos = (v: string) => {
  switch(v) {
    case 'left' :
      return 'left-0'
    case 'center' :
      return 'left-1/2 transform -translate-x-1/2'
    case 'right' :
      return 'right-0'
    default :
      return  ''
  }
} 

const getVerPos = (v: string) => {
  switch(v) {
    case 'top' :
      return 'top-0'
    case 'center' :
      return 'top-1/2 transform -translate-y-1/2'
    case 'bottom' :
      return 'bottom-0'
    default :
      return  ''
  }
} 

function extractCombo (thing: string) {
  return thing ? thing.split('|') : [null, null]
}

export const Hero: FC<HeroProps> = ({
  bgColor = 'transparent',
  bgHasImage = false,
  bgHasVideo = false,
  bgImage = null,
  bgVideo = null,
  contentPosition = 'bottom|left',
  heroHeight = '90vh',
  content = []
}) => {

  contentPosition = 'bottom|left';
  const [verPosVal, horPosVal] = extractCombo(contentPosition)
  const [theme, background] = extractCombo(bgColor)
  const verPos = getVerPos(verPosVal)
  const horHor = getHorPos(horPosVal);
  return (
    <header
      className={`
        overflow-hidden bg-cover relative text-gray-50
        ${theme ? theme : ''}
      `}
      style={{
        backgroundColor: background,
        backgroundImage: `url(${bgHasImage && bgImage ? bgImage.url : '' })`
      }}
    >
      {
        /* TODO: Hide video if user prefers reduced motion, see https://github.com/tjikko-studio/components/issues/72 */
        bgHasVideo && (
          <video id='heroVideo' poster={bgImage.url} autoPlay muted loop className='absolute z-0 top-0 left-0 object-cover w-full h-full hidden sm:block'>
            <source src={bgVideo.url} type='video/mp4' />
          </video>
        )
      }
      <div
        className='absolute z-1 h-2/6 -top-1/6 left-0 w-full bg-gradient-to-b from-gray-900 to-transparent opacity-40'
      />
      <div
        className='absolute z-1 h-full -bottom-1/6 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent opacity-60'
      />
      <div className={`h-${heroHeight} max-w-screen-xl mx-auto relative`}>
        <div
            className={`absolute z-20 p-6 lg:p-12 md:p-12 sm:p-12 flex flex-col space-y-5 ${verPos} ${horHor}`}
        >
          {
            content.map(getComponent)
          }
        </div>
      </div>
    </header>
  )
}

function getComponent (component: {
  type: string,
  content: any
}) {
  switch (component.type) {
    case 'Heading':
      return <Heading key={JSON.stringify(component.content)} {...component.content} level='h1' />
    case 'Text':
      return <Text key={JSON.stringify(component.content)} {...component.content} tag='div' />
    case 'ButtonsGroup':
      return <ButtonsGroup key={JSON.stringify(component.content)} {...component.content} />
    case 'Form':
      return <Form key={JSON.stringify(component.content)} {...component.content} />
    default:
      return null
  }
}
