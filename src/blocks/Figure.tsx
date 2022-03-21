import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import {Media, MediaProps, VideoProps} from '../parts/Media'

export interface FigureProps extends HTMLAttributes<HTMLDivElement> {
  media_type?: 'image' | 'video' | ''
  image?: MediaProps
  is_youtube?: boolean
  youtube_url?: string
  video?: VideoProps
  auto_play?: boolean
  muted?: boolean
  controls?: boolean
  loop?: boolean
  ratio?: string
  fit?: boolean
  height?: string
  align?: string
  mobile_ignore_align?: boolean
  padding?: boolean
  rounded?: boolean
}

export const Figure = (props: FigureProps) => {
  const {
    media_type,
    image,
    is_youtube,
    youtube_url,
    video,
    auto_play,
    controls,
    loop,
    muted,
    className,
    ratio,
    fit,
    height,
    align,
    mobile_ignore_align,
    padding,
    rounded
  } = props
  const alignment = !align || align === '' ? 'center' : align
  return (
    <Media
      media={media_type === 'video' ? (is_youtube ? {type: 'youtube', url: youtube_url} : video) : image}
      autoplay={auto_play}
      muted={muted}
      controls={controls}
      loop={loop}
      className={cn(className, 'max-w-full', 'max-h-full', {
        'mr-auto': alignment === 'left',
        'mr-auto sm:mr-0': mobile_ignore_align,
        'mx-auto': alignment === 'center' && !mobile_ignore_align,
        'sm:mx-auto': alignment === 'center' && mobile_ignore_align,
        'ml-auto': alignment === 'right' && !mobile_ignore_align,
        'sm:ml-auto': alignment === 'right' && mobile_ignore_align,
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
