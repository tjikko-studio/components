import 'intersection-observer'

import React, {FC, useEffect, useMemo, useRef, useState} from 'react'
import cn from 'classnames'

import {nonThrowingJsonParse} from '../../kirbyDatasCleaner'
import getComponent from '../../utilities/getComponent'
import {Heading} from '../blocks/Heading'
import {ImageProps} from '../parts/Media'

import {BlockProps, ContentAlignment} from '../../shared/types'

type TransitionSettings = {
  opacity?: number
  transform?: string
  transformLeft?: string
  transformCenter?: string
  transformRight?: string
  duration?: string
  timingFunction?: string
}

export type ImageSettings = TransitionSettings

export interface InfoBoxSettings extends TransitionSettings {
  color?: string
  backgroundColor?: string
  marginBottom?: string
}

export type FeatureShowSettings = {
  color?: string
  backgroundColor?: string
  images?: ImageSettings
  infoBoxes?: InfoBoxSettings
}

export type FeatureShowItemBox = {
  title?: string
  body?: string
  position?: ContentAlignment
  settings?: InfoBoxSettings
}

export type FeatureShowItem = {
  image: ImageProps[]
  header?: string
  subtitle?: string
  info_boxes?: FeatureShowItemBox[]
}

const shownStyles = {
  opacity: 1,
  transform: 'scale(1) translate(0, 0) rotate(0) skew(0,0)'
}

const InfoBox: FC<FeatureShowItemBox> = ({title, body, position, settings = {}}) => {
  const {color, backgroundColor, duration, marginBottom, opacity, transformLeft, transformCenter, transformRight} = settings
  const infoBoxRef = useRef<HTMLDivElement>(null)
  const pos = position === 'right' ? 'mr-0 ml-auto' : position === 'center' ? 'mx-auto' : 'ml-0 mr-auto'
  const hiddenInfoBoxStyles = useMemo(() => {
    return {
      opacity,
      transform: position === 'right' ? transformRight : position === 'center' ? transformCenter : transformLeft
    }
  }, [position, opacity, transformRight, transformCenter, transformLeft])
  const [animatedStyles, setAnimatedStyles] = useState(hiddenInfoBoxStyles)

  useEffect(() => {
    function show() {
      setAnimatedStyles(shownStyles)
    }
    function hide() {
      setAnimatedStyles(hiddenInfoBoxStyles)
    }
    const infoBox = infoBoxRef.current
    let observer: IntersectionObserver = null
    if (infoBox) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.intersectionRatio > 0.9) {
                show()
              } else {
                hide()
              }
            } else {
              hide()
            }
          })
        },
        {
          threshold: 0.9
        }
      )
      observer.observe(infoBox)
    }
    return () => {
      if (observer) {
        observer.unobserve(infoBox)
      }
    }
  }, [infoBoxRef, hiddenInfoBoxStyles])

  return (
    <div
      className={cn('relative z-20 sm:mx-10')}
      style={{
        marginBottom
      }}
      ref={infoBoxRef}
    >
      <div
        key={title}
        className={cn('bg-white rounded-xl shadow-2xl p-8 max-h-100vh w-fit sm:max-w-1/3vw', pos, 'transition')}
        style={{
          color,
          backgroundColor,
          ...animatedStyles,
          transitionDuration: duration
        }}
      >
        <div className="mb-4 fontStyle-2xl" dangerouslySetInnerHTML={{__html: title}} />
        <div dangerouslySetInnerHTML={{__html: body}} />
      </div>
    </div>
  )
}

const FeatureShowSection: FC<{
  item: FeatureShowItem
  settings?: FeatureShowSettings
}> = ({item, settings = {}}) => {
  let {images} = settings
  if (!images) {
    images = {}
  }
  let {opacity, transform, duration} = images
  if (typeof opacity !== 'number') {
    opacity = 1
  }
  if (typeof transform !== 'string' || transform === '') {
    transform = undefined
  }
  if (typeof duration !== 'string' || duration === '') {
    duration = undefined
  }
  const imgContainerRef = useRef<HTMLDivElement>(null)
  const hiddenImgStyles = useMemo(() => {
    return {
      opacity,
      transform
    }
  }, [opacity, transform])

  const [animatedStyles, setAnimatedStyles] = useState(hiddenImgStyles)

  useEffect(() => {
    function show() {
      setAnimatedStyles(shownStyles)
    }
    function hide() {
      setAnimatedStyles(hiddenImgStyles)
    }
    const imgContainer = imgContainerRef.current
    let imgContainerObserver: IntersectionObserver = null
    if (imgContainer) {
      imgContainerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.intersectionRatio > 0.8) {
                show()
              } else {
                hide()
              }
            } else {
              hide()
            }
          })
        },
        {
          threshold: 0.8
        }
      )
      imgContainerObserver.observe(imgContainer)
    }
    return () => {
      if (imgContainerObserver) {
        imgContainerObserver.unobserve(imgContainer)
      }
    }
  }, [imgContainerRef, hiddenImgStyles])
  const parsedInfos = nonThrowingJsonParse(item.image?.[0]?.info)
  return (
    <div className="relative w-full overflow-x-hidden">
      {item.image?.[0] && (
        <div className="sticky h-screen z-10" ref={imgContainerRef} style={{top: '0'}}>
          <div className="flex flex-col h-full relative lg:pt-32">
            {item.header && (
              <div className="text-center pb-4">
                <Heading level="h3" text={item.header} alignment="center" />
                {item.subtitle && <p>{item.subtitle}</p>}
              </div>
            )}
            <div className="h-full relative">
              <div
                className={cn('bg-img h-full w-full bg-center bg-cover shadow-2xl transition')}
                aria-label={parsedInfos?.alt}
                style={{
                  backgroundImage: `url(${item.image?.[0].url})`,
                  ...animatedStyles,
                  transitionDuration: duration
                }}
              />
            </div>
          </div>
        </div>
      )}
      {item.info_boxes?.map((box) => {
        return <InfoBox key={box.title} {...box} settings={settings.infoBoxes} />
      })}
    </div>
  )
}

export interface FeatureShowProps extends HTMLElement {
  header?: BlockProps[]
  items?: FeatureShowItem[]
  settings?: FeatureShowSettings
}

export const FeatureShow: FC<FeatureShowProps> = ({className, header, items, settings = {}}) => {
  const {color, backgroundColor} = settings
  const classes = ['grid', 'w-full', 'py-16', 'sm:py-24', 'md:py-32', 'gap-y-12', 'sm:gap-y-16', 'lg:gap-y-0']
  const toComponent = getComponent()

  return (
    <section className={cn(classes, className)} style={{color, backgroundColor}}>
      <div className="dark:text-gray-50 lg:-mb-32">
        {header?.map((block) => {
          return toComponent(block)
        })}
      </div>
      {items?.map((item) => (
        <FeatureShowSection key={JSON.stringify(item)} item={item} settings={settings} />
      ))}
    </section>
  )
}
