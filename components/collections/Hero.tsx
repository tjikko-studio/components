import React, {FC, HTMLAttributes, useState, useEffect} from 'react'
import {ButtonsGroup} from '../blocks/ButtonsGroup'
import {Heading} from '../blocks/Heading'
import {Text} from '../blocks/Text'
import {Form} from './Form'
import {useMediaPredicate} from 'react-media-hook'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
const tailwind = resolveConfig(tailwindConfig);

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  /**
   * Background datas
   */
  bgColor ?: string
  bgHasImage ?: boolean
  bgHasVideo ?: boolean
  bgImage ?: string
  bgVideo ?: string
  /**
   * Hero object that will be parsed through to build the component
   */
  content?: {}
}

const getComponent = (component) => {
  switch (component.type) {
    case 'Heading':
      return <Heading key={JSON.stringify(component.content)} {...component.content} level="h1" className='fontStyle-6xl' />
    case 'Text':
      return <Text key={JSON.stringify(component.content)} {...component.content} />
    case 'ButtonsGroup':
      return <ButtonsGroup key={JSON.stringify(component.content)} {...component.content} />
    case 'Form':
      return <Form key={JSON.stringify(component.content)} {...component.content} />
    default:
      return ('')
  }
}

export const Hero: FC<HeroProps> = ({
  bgColor,
  bgHasImage = false,
  bgHasVideo = false,
  bgImage,
  bgVideo,
  content
}) => {
  const sm = false;/* useMediaPredicate(`(min-width: ${tailwind.theme.screens.sm})`) */
  const image = bgImage[0];
  const video = bgVideo[0];
  
  return (
    <header
      className={`min-h-hero lg:h-90vh md:h-90vh sm:h-90vh overflow-hidden bg-cover relative text-gray-50 `}
      style={{
        backgroundColor: `${ bgColor ? bgColor : '' }`,
        backgroundImage: `url(${image ? image.url : '' })`,
      }}
    >
      {
        (bgHasVideo && sm) && (
          <video id="videoBG" poster={bgImage} autoPlay muted loop className='absolute z-0 top-0 left-0 object-cover w-full h-full'>
            <source src={bgVideo} type="video/mp4" />
          </video>
        )
      }
    
      <div
        className='absolute z-1 h-2/6 -top-1/6 left-0 w-full bg-gradient-to-b from-gray-900 to-transparent opacity-40'
      />
      <div
        className='absolute z-1 h-full -bottom-1/6 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent opacity-60'
      />
      <div
          className='absolute z-20 bottom-0 left-0 p-6 lg:p-12 md:p-12 sm:p-12 flex flex-col space-y-5'
      >
        {
          content.map((block) => {
            return getComponent(block);
          })
        }
      </div>
    </header>
  )
}
