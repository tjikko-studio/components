import 'intersection-observer'

import React, {FC, RefObject, useEffect, useRef} from 'react'
import cn from 'classnames'

import getComponent from '../../utilities/getComponent'
import extractCombo from '../../utilities/stringUtils'
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
  cloneLayerRef: RefObject<HTMLDivElement>
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

function easeOutCirc(val: number): number {
  return Math.sqrt(1 - Math.pow(val - 1, 2))
}

function getOpacity(elem: Element): string {
  const viewportHeight = window.innerHeight
  const viewportCenter = viewportHeight / 2
  const {top, height} = elem.getBoundingClientRect()
  const halfHeight = height / 2
  const elemCenter = top + halfHeight
  const delta = Math.abs(elemCenter - viewportCenter)
  const fraction = delta / halfHeight
  if (fraction > 1) {
    return '0'
  } else {
    return easeOutCirc(1 - fraction).toString()
  }
}

type ObserverArgsCallback = {elem: HTMLElement; val: number}

function opacityModifier(elem: Element, clone: HTMLDivElement): () => void {
  return () => {
    clone.style.opacity = getOpacity(elem)
  }
}

const InfoBox: FC<FeaturesShowItemBox> = ({title, body, position, totalNbBoxes, cloneLayerRef}) => {
  const infoBoxContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const infoBox = infoBoxContainerRef.current
    const cloneLayer = cloneLayerRef.current
    if (infoBox && cloneLayer) {
      infoBox.style.opacity = '0'
      const clone = infoBox.cloneNode(true) as HTMLDivElement
      clone.style.height = 'unset'
      clone.style.gridArea = position.replace('|', '-')

      clone.style.position = 'absolute' // required for the mobile case (no grid)

      cloneLayer.appendChild(clone)
      const modifyOpacity = opacityModifier(infoBox, clone)
      const scrollContainer = window.document.querySelector('.k-panel-view')
      if (scrollContainer) {
        scrollContainer.addEventListener('scroll', modifyOpacity, false)
      }
      window.addEventListener('scroll', modifyOpacity, false)
      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener('scroll', modifyOpacity, false)
        }
        window.removeEventListener('scroll', modifyOpacity, false)
      }
    }
  }, [infoBoxContainerRef, cloneLayerRef, position])
  return (
    <div
      className="relative flex items-start transition-opacity items-center"
      ref={infoBoxContainerRef}
      style={{
        height: `${(growthFactor * 100) / totalNbBoxes}vh`
      }}
    >
      <div key={title} className={cn('z-20 bg-white rounded-xl shadow-xl p-8 transition-opacity duration-700')}>
        <div className="mb-4 fontStyle-2xl" dangerouslySetInnerHTML={{__html: title}} />
        <div dangerouslySetInnerHTML={{__html: body}} />
      </div>
    </div>
  )
}

const FeaturesShowSection: FC<{item: FeaturesShowItem}> = ({item}) => {
  const imgContainerRef = useRef<HTMLDivElement>(null)
  const cloneLayerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (imgContainerRef.current) {
      const imgContainerObserver = new IntersectionObserver(
        ...observerArgs(
          ({elem, val}: ObserverArgsCallback) => {
            const bgImg: HTMLElement = elem.querySelector('.bg-img')
            bgImg.style.transform = `scale(${val})`
          },
          {
            steps: 10,
            caps: [0.8, 0.9]
          }
        )
      )
      imgContainerObserver.observe(imgContainerRef.current)
    }
  }, [imgContainerRef])

  return (
    <div className="relative w-full px-8">
      {item.image?.[0] && (
        <div className="sticky h-100vh" ref={imgContainerRef} style={{top: '0'}}>
          <div
            className="bg-img h-full w-full bg-center bg-cover rounded-3xl transition-transform duration-700"
            style={{
              backgroundImage: `url(${item.image?.[0].url})`
            }}
          />
          <div
            className="absolute h-full w-full sm:grid"
            style={{
              top: '0',
              gridTemplateRows: '1fr 1fr 1fr',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridTemplateAreas: `
                "top-left    top-center    top-right"
                "center-left center-center center-right"
                "bottom-left bottom-center bottom-right"`
            }}
            ref={cloneLayerRef}
          />
        </div>
      )}
      {item.info_boxes.map((box, idx, all) => {
        return <InfoBox key={box.title} {...box} idx={idx} totalNbBoxes={all.length} cloneLayerRef={cloneLayerRef} />
      })}
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
        <FeaturesShowSection key={idx} item={item} />
      ))}
    </div>
  )
}
