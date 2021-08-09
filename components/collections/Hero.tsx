import React, {FC, HTMLAttributes, useState, useEffect} from 'react'
import {ButtonsGroup} from '../blocks/ButtonsGroup'
import {Form} from './Form'
import {useMediaPredicate} from 'react-media-hook'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
const tailwind = resolveConfig(tailwindConfig);

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  /**
   * image or video
   */
  bgType: "image" | "video"
  /**
   * background color
   */
  bgColor?: string
  /**
   * background image url
   */
  bgImage?: string
  /**
   * background video url
   */
  bgVideo?: string
  /**
   * background video url
   */
  items?: {}
}

const getComponent = (component) => {
  switch (component.type) {
    case 'buttons-group':
      return <ButtonsGroup key={JSON.stringify(component.content)} {...component.content} />
    case 'form':
      return <Form key={JSON.stringify(component.content)} {...component.content} />
    default:
      return ('')
  }
}

export const Hero: FC<HeroProps> = ({
  bgType,
  bgColor,
  bgImage,
  bgVideo,
  items
}) => {
  const sm = useMediaPredicate(`(min-width: ${tailwind.theme.screens.sm})`)
  return (
    <header
      className={`min-h-hero lg:h-90vh md:h-90vh sm:h-90vh overflow-hidden bg-cover relative`}
      style={{
        backgroundColor: `${bgColor}`,
        backgroundImage: `url(${bgImage})`,
      }}
    >

      {
        (bgType === "video" && sm) && (
          <video id="videoBG" poster={bgImage} autoPlay muted loop className='absolute z-0 top-0 left-0 object-cover w-full h-full'>
            <source src={bgVideo} type="video/mp4" />
          </video>
        )
      }
    
      <div
        className='absolute z-10 h-2/6 -top-1/6 left-0 w-full bg-gradient-to-b from-gray-900 to-transparent opacity-40'
      />
      <div
        className='absolute z-10 h-full -bottom-1/6 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent opacity-60'
      />
      <div
          className='absolute z-20 bottom-0 left-0 p-6 lg:p-12 md:p-12 sm:p-12'
      >
        {items.map((item) => {
          switch (item.component) {
            case 'Form':
              return <Form key={JSON.stringify(item.items)} {...item.items} />
            case 'ButtonsGroup':
              return <ButtonsGroup key={JSON.stringify(item.items)} {...item.items} />
            default:
              return ('')
          }
        })}
      </div>
    </header>
  )
}
