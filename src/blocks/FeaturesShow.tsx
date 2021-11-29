import 'intersection-observer'

import React, {FC, RefObject, useEffect, useRef} from 'react'
import cn from 'classnames'

import {nonThrowingJsonParse} from '../../kirbyDatasCleaner'
import extractCombo from '../../utilities/extractCombo'
import getComponent from '../../utilities/getComponent'
import {ImageProps} from '../parts/Media'

import {BlockProps, ContentPosition} from '../../shared/types'

export type HandlerDictionary = {
  [id: string]: Function
}

export type ScrollListenerCaller = () => void
export type ScrollListenerAdder = (id: string, handler: () => void) => void
export type ScrollListenerRemover = (id: string) => void

export type FeaturesShowItemBox = {
  title?: string
  body?: string

  /**
   * Content Position
   */
  position?: ContentPosition
  cloneLayerRef: RefObject<HTMLDivElement>
  addScrollListener: ScrollListenerAdder
  removeScrollListener: ScrollListenerRemover
}

export type FeaturesShowItem = {
  image: ImageProps[]
  header?: string
  subtitle?: string
  info_boxes?: FeaturesShowItemBox[]
}

type Caps = [number, number]
type Easing = (val: number) => number

function cap(val: number, [lower, upper]: Caps) {
  const delta = upper - lower
  return val * delta + lower
}

function observerArgs(
  cb: ({elem, val}: {elem: Element; val: number}) => void,
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

type ObserverArgsCallback = {elem: HTMLElement; val: number}
type OpacityModifierFn = () => void

function classModifier(
  elem: Element,
  clone: HTMLDivElement,
  activeClasses: string,
  fadeOutDown: string,
  fadeOutUp: string
): OpacityModifierFn {
  return () => {
    const viewportHeight = window.innerHeight
    const {top, bottom} = elem.getBoundingClientRect()
    const inactiveClasses = bottom >= window.innerHeight ? fadeOutDown : fadeOutUp

    clone.className = bottom > viewportHeight && top < viewportHeight ? activeClasses : inactiveClasses
  }
}

const InfoBox: FC<FeaturesShowItemBox> = ({title, body, position, cloneLayerRef, addScrollListener, removeScrollListener}) => {
  const infoBoxContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const infoBox = infoBoxContainerRef.current
    const cloneLayer = cloneLayerRef.current
    let clone: HTMLDivElement = null
    let infoBoxObserver: IntersectionObserver = null
    let randomId: string = null
    if (infoBox && cloneLayer) {
      // Classes applied all the time
      const initClassNames = `${infoBox.className} transition-opacity-transform duration-300 ease-in-out transform`
      const activeClasses = `${initClassNames} translate-y-0 opacity-100`
      const fadeOutDown = `${initClassNames} translate-y-4 opacity-0`
      const fadeOutUp = `${initClassNames} -translate-y-4 opacity-0`

      infoBox.className = fadeOutDown

      clone = infoBox.cloneNode(true) as HTMLDivElement
      clone.style.height = 'unset'
      clone.style.gridArea = position.replace('|', '-')
      clone.style.position = 'absolute' // required for the mobile case (no grid)
      cloneLayer.appendChild(clone)

      randomId = Math.random().toString()
      infoBoxObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const modifyClass = classModifier(infoBox, clone, activeClasses, fadeOutDown, fadeOutUp)
          entry.isIntersecting ? addScrollListener(randomId, modifyClass) : removeScrollListener(randomId)
        })
      })
      infoBoxObserver.observe(infoBox)
    }
    return () => {
      if (clone) {
        cloneLayer.removeChild(clone)
      }
      if (infoBoxObserver) {
        infoBoxObserver.unobserve(infoBox)
      }
      if (randomId) {
        removeScrollListener(randomId)
      }
    }
  }, [infoBoxContainerRef, cloneLayerRef, position, addScrollListener, removeScrollListener])

  const relativePos = position.startsWith('top')
    ? 'top-0'
    : position.startsWith('bottom')
    ? 'top-0 sm:top-auto sm:bottom-0'
    : 'top-0 sm:bottom-0'

  return (
    <div className={`${relativePos} h-1/2vh`} ref={infoBoxContainerRef}>
      <div key={title} className={cn('z-20 bg-white rounded-xl shadow-2xl p-8 duration-700')}>
        <div className="mb-4 fontStyle-2xl" dangerouslySetInnerHTML={{__html: title}} />
        <div dangerouslySetInnerHTML={{__html: body}} />
      </div>
    </div>
  )
}

const FeaturesShowSection: FC<{
  item: FeaturesShowItem
  addScrollListener: ScrollListenerAdder
  removeScrollListener: ScrollListenerRemover
}> = ({item, addScrollListener, removeScrollListener}) => {
  const imgContainerRef = useRef<HTMLDivElement>(null)
  const cloneLayerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const imgContainer = imgContainerRef.current
    let imgContainerObserver: IntersectionObserver = null
    if (imgContainer) {
      imgContainerObserver = new IntersectionObserver(
        ...observerArgs(
          ({elem, val}: ObserverArgsCallback) => {
            const bgImg: HTMLElement = elem.querySelector('.bg-img')
            bgImg.style.transform = `scale(${val})`
          },
          {
            steps: 10,
            caps: [0.8, 1]
          }
        )
      )
      imgContainerObserver.observe(imgContainer)
    }
    return () => {
      if (imgContainerObserver) {
        imgContainerObserver.unobserve(imgContainer)
      }
    }
  }, [imgContainerRef])
  const parsedInfos = nonThrowingJsonParse(item.image?.[0]?.info)
  return (
    <div className="relative w-full px-2.5 sm:px-5">
      {item.image?.[0] && (
        <div className="sticky h-screen" ref={imgContainerRef} style={{top: '0'}}>
          <div className="flex flex-col h-full relative py-4 lg:pt-32 sm:pb-10">
            {item.header && (
              <div className="text-center pb-4">
                <h4>{item.header}</h4>
                {item.subtitle && <p>{item.subtitle}</p>}
              </div>
            )}
            <div className="h-full relative">
              <div
                className="bg-img h-full w-full bg-center bg-cover rounded-lg shadow-2xl transition-transform duration-700"
                aria-label={parsedInfos?.alt}
                style={{
                  backgroundImage: `url(${item.image?.[0].url})`
                }}
              />
              <div
                className="absolute h-full w-full sm:grid sm:py-6"
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
          </div>
        </div>
      )}
      {item.info_boxes.map((box) => {
        return (
          <InfoBox
            key={box.title}
            {...box}
            cloneLayerRef={cloneLayerRef}
            addScrollListener={addScrollListener}
            removeScrollListener={removeScrollListener}
          />
        )
      })}
    </div>
  )
}

const defaultHandlers: HandlerDictionary = {}

export interface FeaturesShowProps extends HTMLElement {
  items?: FeaturesShowItem[]
  header?: BlockProps[]
  bgColor?: string
}

export const FeaturesShow: FC<FeaturesShowProps> = ({className, header, bgColor, items}) => {
  const classes = ['w-full', 'py-16', 'sm:py-24', 'md:py-32']
  const toComponent = getComponent()
  const [theme, background] = extractCombo(bgColor)
  const handlers = useRef<HandlerDictionary>(defaultHandlers)
  const addHandler: ScrollListenerAdder = (id, handler) => {
    handlers.current[id] = handler
  }
  const removeHandler: ScrollListenerRemover = (id) => {
    delete handlers.current[id]
  }
  const fireHandlers = useRef<ScrollListenerCaller>(() => {
    for (const id in handlers.current) {
      handlers.current[id]()
    }
  })
  useEffect(() => {
    const fire = fireHandlers.current
    const scrollContainer = window.document.querySelector('.k-panel-view')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', fire, false)
    }
    window.addEventListener('scroll', fire, false)
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', fire, false)
      }
      window.removeEventListener('scroll', fire, false)
    }
  }, [fireHandlers])

  return (
    <section className={cn(theme, classes, className)} style={{backgroundColor: background}}>
      <div className="dark:text-gray-50">
        {header?.map((block) => {
          return toComponent(block)
        })}
      </div>
      {items?.map((item) => (
        <FeaturesShowSection key={JSON.stringify(item)} item={item} addScrollListener={addHandler} removeScrollListener={removeHandler} />
      ))}
    </section>
  )
}
