import React, {FC, HTMLAttributes, useState, useEffect} from 'react'
import {Header, HeaderProps} from './Header'
import useBreakpoint from '../../utilities/useBreakpoint'

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  /**
   * image or video
   */
  bgType: 'image' | 'video'
  /**
   * background image url
   */
  bgImage?: string
  /**
   * background video url
   */
  bgVideo?: string
  /**
   * header text information
   */
  headerInfo: HeaderProps

  /**
   * Additional space-separated class names to append
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Hero: FC<HeroProps> = ({
  bgImage,
  bgVideo,
  headerInfo,
  className,
  bgType
}) => {
  const sm = useBreakpoint('sm')

  return (
    <header
      className={`min-h-568 lg:h-90vh md:h-90vh sm:h-90vh overflow-hidden bg-cover relative ${className ? className : ''}`}
      style={
        {
          backgroundImage: `url(${bgImage})`,
        }
      }
    >
      {
        (bgType === 'video' && sm) && (
          <video id='videoBG' poster={bgImage} autoPlay muted loop className='absolute z-0 top-0 left-0 object-cover w-full h-full hidden sm:block'>
            <source src={bgVideo} type='video/mp4' />
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
        <Header
          {...headerInfo}
          style={{backgroundColor: 'transparent'}}
        />
      </div>
    </header>
  )
}
