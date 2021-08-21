import React, {FC, HTMLAttributes} from 'react'
import {ButtonsGroup} from '../blocks/ButtonsGroup'
import {Heading} from '../blocks/Heading'
import {Text} from '../blocks/Text'
import {Form} from './Form'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
const tailwind = resolveConfig(tailwindConfig);

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  /**
   * Background datas
   */
  bgColor?: 'transparent' | 'light|#F3F4F6' | 'dark|#171A22'
  bgHasImage ?: boolean
  bgHasVideo ?: boolean
  bgImage ?: {
    url: string
  }
  bgVideo ?: {
    url: string
  },

  /**
   * Content Position
   */
  contentPosition?: 'center|center' | 'bottom|left',
  heroHeight?: '90vh' | 'full',


  /**
   * Hero object that will be parsed through to build the component
   */
  content?: []
}

export const Hero: FC<HeroProps> = ({
  bgColor = 'transparent',
  bgHasImage = false,
  bgHasVideo = false,
  bgImage = {},
  bgVideo = {url: ''},
  contentPosition = 'bottom|left',
  heroHeight = '90vh',
  content = []
}) => {
  const sm = false;/* useMediaPredicate(`(min-width: ${tailwind.theme.screens.sm})`) */

  return (
    <header
      className={`min-h-hero lg:h-90vh md:h-90vh sm:h-90vh overflow-hidden bg-cover relative text-gray-50 `}
      style={{
        backgroundColor: `${ bgColor ? bgColor : '' }`,
        backgroundImage: `url(${bgHasImage && bgImage ? bgImage.url : '' })`
      }}
    >
      {
        (bgHasVideo && sm) && (
          <video id="videoBG" poster={bgImage.url} autoPlay muted loop className='absolute z-0 top-0 left-0 object-cover w-full h-full'>
            <source src={bgVideo.url} type="video/mp4" />
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
          content.map(getComponent)
        }
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
      return <Heading key={JSON.stringify(component.content)} {...component.content} level="h1" />
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
