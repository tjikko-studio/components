import React, {FC, HTMLAttributes} from 'react'
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
          {gallery && <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent opacity-80 pointer-events-none" />}
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
  return (
    <figure key={id} role="group" className={cn(gallery && className, wrapperClassName)}>
      <video autoPlay={autoplay} muted={muted} controls={controls} loop={loop} className={!gallery ? className : `relative h-full w-full hover:z-20`}>
        <source src={url} type={`video/${extension ? extension : 'mp4'}`} />
        <meta itemProp="description" content={parsedInfos?.alt && parsedInfos.alt}></meta>
      </video>
      {parsedInfos?.caption && (
        <>
          {gallery && <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent opacity-80 pointer-events-none" />}
          <figcaption
            className={gallery && `absolute bottom-0 p-4 w-full z-10 fontStyle-sm text-gray-50`}
            dangerouslySetInnerHTML={{__html: parsedInfos.caption}}
          />
        </>
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
