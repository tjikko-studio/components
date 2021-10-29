import React, {FC, useEffect, useRef} from 'react'
import cn from 'classnames'

import getComponent from '../../utilities/getComponent'
import {ImageProps} from '../parts/Media'

import {BlockProps, ContentPosition} from '../../shared/types'

type FeaturesShowItemBox = {
  title?: string
  body?: string

  /**
   * Content Position
   */
  position?: ContentPosition
  idx?: number
  totalNbBoxes?: number
}

type FeaturesShowItem = {
  image: ImageProps[]
  info_boxes?: FeaturesShowItemBox[]
}

export type FeaturesShowProps = {
  items?: FeaturesShowItem[]
  header?: BlockProps[]
  className?: string
  bgColor?: string
}

const getHorPos = (value: string) => {
  switch (value) {
    case 'left':
      return 'left-0'
    case 'center':
      return 'left-1/2 transform -translate-x-1/2'
    case 'right':
      return 'right-0'
    default:
      return ''
  }
}

const getVerPos = (value: string) => {
  switch (value) {
    case 'top':
      return 'top-8'
    case 'center':
      return 'top-1/2 transform -translate-y-1/2'
    case 'bottom':
      return 'bottom-8'
    default:
      return ''
  }
}

function extractCombo(thing: string) {
  return thing ? thing.split('|') : [null, null]
}

const growthFactor = 2

type Caps = [number, number]
type Easing = (val: number) => number

function cap(val: number, [lower, upper]: Caps) {
  const delta = upper - lower
  return val * delta + lower
}

function observerArgs(
  cb: Function,
  {
    steps = 2,
    easing = (val) => val,
    caps = [0, 1]
  }: {
    steps?: number
    easing?: Easing
    caps?: Caps
  } = {}
): [([entry]: IntersectionObserverEntry[]) => void, IntersectionObserverInit] {
  const [min, max] = [0, 1]
  const delta = max - min
  const threshold: number[] = []
  for (let curr = min; curr <= max; curr = curr + delta / (steps - 1)) {
    threshold.push(Math.round(1000 * curr) / 1000)
  }

  return [
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elem = entry.target
          threshold.some((ratio) => {
            if (entry.intersectionRatio <= ratio) {
              const eased = easing(ratio)
              const val = cap(eased, caps)
              cb({elem, val})
              return true
            }
            return false
          })
        }
      })
    },
    {
      threshold
    }
  ]
}

function getOpacity(elem: HTMLElement, idx: number, length: number) {
  const viewportHeight = window.innerHeight
  const fraction = viewportHeight / length
  const threshold = (idx * viewportHeight) / length + fraction / 2
  const {top, height} = elem.getBoundingClientRect()
  const distance = threshold - top
  if (distance < 0) {
    return '0'
  } else if (distance >= height) {
    return '0'
  } else {
    return `${distance / (height / growthFactor)}`
  }
}

type ObserverArgsCallback = {elem: HTMLElement; val: number}

const InfoBox: FC<FeaturesShowItemBox> = ({title, body, position, idx, totalNbBoxes}) => {
  const infoBoxContainerRef = useRef(null)
  const [verPosVal, horPosVal] = extractCombo(position)
  const verPos = getVerPos(verPosVal)
  const horPos = getHorPos(horPosVal)

  useEffect(() => {
    if (infoBoxContainerRef.current) {
      infoBoxContainerRef.current.style.opacity = 0
      const popupContainerObserver = new IntersectionObserver(
        ...observerArgs(
          ({elem, val}: ObserverArgsCallback) => {
            function alterOpacity() {
              elem.style.opacity = getOpacity(elem, idx, totalNbBoxes)
            }
            alterOpacity()
            if (val) {
              window.addEventListener('scroll', alterOpacity, false)
            } else {
              window.removeEventListener('scroll', alterOpacity, false)
            }
          },
          {
            steps: 5
          }
        )
      )
      popupContainerObserver.observe(infoBoxContainerRef.current)
    }
  }, [infoBoxContainerRef, idx, totalNbBoxes])
  return (
    <div
      className="relative flex items-start transition-opacity"
      ref={infoBoxContainerRef}
      style={{
        height: `${(growthFactor * 100) / totalNbBoxes}vh`
      }}
    >
      <div
        key={idx}
        className={cn(
          'absolute z-20 bg-white rounded-xl shadow-xl w-1/3 p-8 transition-opacity duration-2000',
          verPos,
          horPos
          // currentBoxIdx === idx ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className="mb-4 fontStyle-2xl" dangerouslySetInnerHTML={{__html: title}} />
        <div dangerouslySetInnerHTML={{__html: body}} />
      </div>
    </div>
  )
}

const imgContainerObserver = new IntersectionObserver(
  ...observerArgs(
    ({elem, val}: ObserverArgsCallback) => {
      const bgImg: HTMLElement = elem.querySelector('.bg-img')
      bgImg.style.transform = `scale(${val})`
    },
    {
      steps: 5,
      caps: [0.8, 0.9]
    }
  )
)

const FeatureShowItem: FC<{item: FeaturesShowItem}> = ({item}) => {
  const imgContainerRef = useRef(null)

  useEffect(() => {
    if (imgContainerRef.current) {
      imgContainerObserver.observe(imgContainerRef.current)
    }
  }, [imgContainerRef])

  return (
    <div className="flex flex-col items-center mx-10 h-100vh">
      <div className="relative w-full px-8">
        {item.image?.[0] && (
          <div className="sticky t-0 h-100vh" ref={imgContainerRef}>
            <div
              className="bg-img h-full w-full bg-center bg-cover rounded-3xl transition-transform duration-700"
              style={{
                backgroundImage: `url(${item.image?.[0].url})`
              }}
            />
          </div>
        )}
        {item.info_boxes.map((box, idx, all) => {
          return <InfoBox key={box.title} {...box} idx={idx} totalNbBoxes={all.length} />
        })}
      </div>
    </div>
  )
}

export const FeaturesShow: FC<FeaturesShowProps> = ({className, header, bgColor, items}) => {
  const toComponent = getComponent()
  const [theme, background] = extractCombo(bgColor)

  return (
    <div className={cn(theme, className)} style={{backgroundColor: background}}>
      <div className="p-8 dark:text-gray-50">
        {header?.map((block) => {
          return toComponent(block)
        })}
      </div>
      {items?.map((item, idx) => (
        <FeatureShowItem key={idx} item={item} />
      ))}
    </div>
  )
}
