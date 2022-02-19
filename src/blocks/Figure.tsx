import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import {Media, MediaProps, VideoProps} from '../parts/Media'

export interface FigureProps extends HTMLAttributes<HTMLDivElement> {
  media_type?: 'image' | 'video' | ''
  image?: MediaProps
  video?: VideoProps
  auto_play?: boolean
  muted?: boolean
  controls?: boolean
  loop?: boolean
  ratio?: string
  fit?: boolean
  height?: string
  align?: string
  padding?: boolean
  rounded?: boolean
}

export const Figure = (props: FigureProps) => {
  const {media_type, image, video, auto_play, controls, loop, muted, className, ratio, fit, height, align, padding, rounded} = props
  const alignment = !align || align === '' ? 'center' : align
  return (
    <Media
      media={media_type === 'video' ? video : image}
      autoplay={auto_play}
      muted={muted}
      controls={controls}
      loop={loop}
      className={cn(className, 'max-w-full', 'max-h-full', {
        'mr-auto': alignment === 'left',
        'mx-auto': alignment === 'center',
        'ml-auto': alignment === 'right',
        'm-4': padding,
        'rounded-lg': rounded
      })}
      ratio={ratio}
      fit={fit}
      style={{
        height: !height || height === '' ? 'unset' : height
      }}
    />
  )
}
