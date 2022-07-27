import React, {HTMLAttributes, useEffect, useState} from 'react'
import Marquee from 'react-fast-marquee'
import cn from 'classnames'

import {ImageProps, Media} from '../parts/Media'

export interface ClientProps {
  image: ImageProps
  image_srcset_small?: string
  company: string
}

export interface ClientsLogosProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The size and spacing of the logos
   * (Dev note: Maybe should we get rid of this to encourage consistency )
   */
  logosLayout?: 'grid' | 'marquee'

  /**
   * To make logos grayscale (to avoid the client to re-upload them and test their preference fast)
   */
  logosGrayscale?: boolean

  /**
   * Clients logos object that will be parsed through to build the component
   */
  content?: ClientProps[]
}

export const ClientsLogos = ({content = [], logosLayout = 'grid', logosGrayscale = false}: ClientsLogosProps) => {
  logosLayout = logosLayout ? logosLayout : 'grid'

  let wrapperClass = ['flex justify-center gap-12 sm:gap-14 lg:gap-16']
  let logoClass = ['w-auto h-12 md:h-14 lg:h-16 xl:h-18']
  let layoutClass = ['flex justify-center']

  const [marqueeSpeed, setMarqueeSpeed] = useState(72)

  useEffect(() => {
    const updateMarqueeSpeed = () => {
      const speed = window.innerWidth / 20
      setMarqueeSpeed(speed <= 48 ? 48 : speed >= 96 ? 96 : speed)
    }
    if (logosLayout === 'marquee') {
      updateMarqueeSpeed()
      window.addEventListener('resize', updateMarqueeSpeed, false)
    }
    return () => {
      if (logosLayout === 'marquee') {
        window.removeEventListener('resize', updateMarqueeSpeed, false)
      }
    }
  }, [setMarqueeSpeed, logosLayout])

  if (logosLayout === 'grid') {
    wrapperClass.push('flex-wrap')
    layoutClass.push('flex-grow-0 flex-shrink-0')
  } else if (logosLayout === 'marquee') {
    wrapperClass.push('flex-nowrap w-max mr-12 sm:mr-14 lg:mr-16')
  }

  const LogosList = () => {
    return (
      <div className={cn(wrapperClass)}>
        {content.map(({image, image_srcset_small, company}) => {
          return (
            <div key={company} className={cn(['flex justify-center flex-grow-0 flex-shrink-0'])}>
              <Media media={image} image_srcset={image_srcset_small} className={cn(logoClass)} mediaClasses={cn({'filter grayscale': logosGrayscale})} fit />
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <div className="-mx-4">
      {logosLayout === 'grid' ? (
        <LogosList />
      ) : (
        logosLayout === 'marquee' && (
          <div className="relative w-screen transform -translate-x-1/2 left-1/2">
            <Marquee gradientWidth="0" speed={marqueeSpeed}>
              <LogosList />
            </Marquee>
          </div>
        )
      )}
    </div>
  )
}
