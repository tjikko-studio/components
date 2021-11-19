import React, {FC, HTMLAttributes, useEffect, useRef, useState} from 'react'
import cn from 'classnames'

import MediaIcon from '/assets/icons/media-image.svg'

import {ImageProps as SharedImageProps, MediaProps as SharedMediaProps} from '../../shared/types'

export type ImageProps = SharedImageProps
export type MediaProps = SharedMediaProps
export type GalleryProps = VideoProps

export const MediaImage: FC<ImageProps> = ({
  id,
  link,
  url,
  extension,
  dimensions = {},
  content = {},
  className,
  wrapperClassName,
  gallery,
  info = ''
}) => {
  const parsedInfos = info ? JSON.parse(info) : null
  return (
    <figure key={id} role="group" className={cn(gallery && className, wrapperClassName)}>
      {url && <img src={url} alt={parsedInfos?.alt && parsedInfos.alt} className={!gallery ? className : `relative h-full w-full`} />}
      {parsedInfos?.caption && (
        <>
          {gallery && (
            // eslint-disable-next-line max-len
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent opacity-80 pointer-events-none" />
          )}
          <figcaption
            className={gallery && `absolute bottom-0 p-4 w-full z-50 fontStyle-xs text-gray-50 bg-opacity-80`}
            dangerouslySetInnerHTML={{__html: parsedInfos.caption}}
          />
        </>
      )}
    </figure>
  )
}

export interface VideoProps extends MediaProps {
  autoplay?: boolean
  muted?: boolean
  controls?: boolean
  loop?: boolean
}

export const MediaVideo: FC<VideoProps> = ({
  id,
  url,
  content = {},
  extension,
  autoplay,
  muted,
  controls,
  loop,
  className,
  wrapperClassName,
  gallery,
  info = ''
}) => {
  const parsedInfos = info ? JSON.parse(info) : null

  const videoRef = useRef(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  const handleClick = (e: any) => {
    setVideoPlaying(!videoPlaying)
    videoRef.current.play()
  }

  React.useEffect(() => {
    videoRef.current.addEventListener('pause', () => {
      setVideoPlaying(!videoPlaying)
    })
  })

  return (
    <figure key={id} role="group" className={cn('relative', {className: gallery}, wrapperClassName)}>
      <div className={cn('absolute w-full h-full z-10', {hidden: videoPlaying || !controls})} onClick={handleClick} />
      <video
        ref={videoRef}
        autoPlay={autoplay}
        muted={muted}
        controls={videoPlaying}
        loop={loop}
        className={cn('relative h-full w-full no-timeline', {className: !gallery})}
      >
        <source src={url} type={`video/${extension ? extension : 'mp4'}`} />
        <meta itemProp="description" content={parsedInfos?.alt && parsedInfos.alt}></meta>
      </video>
      {parsedInfos?.caption && (
        <div className={cn({hidden: videoPlaying})}>
          {gallery && <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />}
          <figcaption
            className={gallery && `absolute bottom-0 pb-4 pl-4 w-full h-10 z-40 fontStyle-sm text-gray-50`}
            dangerouslySetInnerHTML={{__html: parsedInfos.caption}}
          />
      </div>
      )}
    </figure>
  )
}

export interface GenericMediaProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Received media (It can be an image or a video)
   */
  media?: MediaProps | VideoProps
  autoplay?: boolean
  muted?: boolean
  controls?: boolean
  loop?: boolean
  wrapperClassName?: string
  gallery?: boolean
}

export const Media: FC<GenericMediaProps> = ({
  media = null,
  autoplay = true,
  muted = true,
  controls = false,
  loop = false,
  className,
  wrapperClassName,
  gallery
}) => {
  return media && media.type === 'video' ? (
    <MediaVideo
      key={media.url}
      {...media}
      autoplay={autoplay}
      muted={muted}
      controls={controls}
      loop={loop}
      className={className}
      wrapperClassName={wrapperClassName}
      gallery={gallery}
    />
  ) : media && media.type === 'image' ? (
    <MediaImage key={media.url} {...media} className={className} wrapperClassName={wrapperClassName} gallery={gallery} />
  ) : (
    <div className={cn('h-full justify-center flex items-center rounded-lg p-4 bg-gray-300 text-gray-800 opacity-50', wrapperClassName)}>
      <MediaIcon className="w-8 h-8 opacity-60" />
    </div>
  )
}
