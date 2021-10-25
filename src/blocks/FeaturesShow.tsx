import React, {FC, useState} from 'react'
// @ts-expect-error
import Zoom from 'react-reveal/Zoom'
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
  const [visibleIdx, setVisibleIdx] = useState(-1)

  return (
    <div className="flex flex-col items-center mx-10 h-100vh">
      <div className="relative w-full px-8">
        {item.image?.[0] && <Media media={item.image?.[0]} className="w-full h-80vh rounded-xl" />}
        <Zoom cascade fraction={1} onReveal={() => setVisibleIdx(visibleIdx + 1)}>
          {item.info_boxes.map((box, idx) => {
            const [verPosVal, horPosVal] = extractCombo(box.position)
            const verPos = getVerPos(verPosVal)
            const horPos = getHorPos(horPosVal)

            return (
              <div
                key={idx}
                className={cn('absolute z-20 w-1/3', verPos, horPos)}
                style={{visibility: visibleIdx === idx ? 'visible' : 'hidden'}}
              >
                <div className="p-8 bg-white shadow-xl rounded-xl">
                  <div className="mb-4 fontStyle-2xl" dangerouslySetInnerHTML={{__html: box.title}} />
                  <div dangerouslySetInnerHTML={{__html: box.body}} />
                </div>
              </div>
            )
          })}
        </Zoom>
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
