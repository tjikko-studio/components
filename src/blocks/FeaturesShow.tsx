import React, {FC, useEffect, useState} from 'react'
import cn from 'classnames'

import getComponent from '../../utilities/getComponent'
import {ImageProps, Media} from '../parts/Media'

import {BlockProps, ContentPosition} from '../../shared/types'

type FeaturesShowItemBox = {
  title?: string
  body?: string

  /**
   * Content Position
   */
  position?: ContentPosition
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

const FeatureShowItem: FC<{item: FeaturesShowItem}> = ({item}) => {
  const [currentBoxIdx, setCurrentBoxIdx] = useState(0)
  const totalBoxes = item.info_boxes?.length || 0

  useEffect(() => {
    let idx = 0
    const intervalId = setInterval(() => {
      setCurrentBoxIdx(idx % totalBoxes)
      idx++
    }, 2 * 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [totalBoxes])

  return (
    <div className="flex flex-col items-center mx-10 h-100vh">
      <div className="relative w-full px-8">
        {item.image?.[0] && <Media media={item.image?.[0]} className="w-full h-80vh rounded-xl" />}
        {item.info_boxes.map((box, idx) => {
          const [verPosVal, horPosVal] = extractCombo(box.position)
          const verPos = getVerPos(verPosVal)
          const horPos = getHorPos(horPosVal)

          return (
            <div
              key={idx}
              className={cn(
                'absolute z-20 bg-white rounded-xl shadow-xl w-1/3 p-8 transition-opacity duration-2000',
                verPos,
                horPos,
                currentBoxIdx === idx ? 'opacity-100' : 'opacity-0'
              )}
            >
              <div className="mb-4 fontStyle-2xl" dangerouslySetInnerHTML={{__html: box.title}} />
              <div dangerouslySetInnerHTML={{__html: box.body}} />
            </div>
          )
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
      <div className="py-8 dark:text-gray-50">
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
