import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import {ImageProps as SharedImageProps, MediaProps as SharedMediaProps} from '../../shared/types'

export type ImageProps = SharedImageProps
export type MediaProps = SharedMediaProps

export const MediaImage: FC<ImageProps> = ({
  id,
  link,
  url,
  extension,
  dimensions = {},
  content = {},
  className,
  wrapperClassName,
  gallery
}) => {
  return (
    <figure key={id} role="group" className={cn(gallery && className, wrapperClassName)}>
      {url && <img src={url} alt={content.alt && content.alt} className={!gallery ? className : `relative h-full w-full`} />}
      {content.caption && (
        <>
          {gallery && <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />}
          <figcaption
            className={gallery && `absolute bottom-0 p-4 w-full z-50 fontStyle-xs text-gray-50 bg-opacity-80`}
            dangerouslySetInnerHTML={{__html: content.caption}}
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
  gallery
}) => {
  return (
    <figure key={id} role="group" className={cn(gallery && className, wrapperClassName)}>
      <video autoPlay={autoplay} muted={muted} controls={controls} loop={loop} className={!gallery ? className : `relative h-full w-full`}>
        <source src={url} type={`video/${extension ? extension : 'mp4'}`} />
        <meta itemProp="description" content={content?.alt && content.alt}></meta>
      </video>
      {content.caption && (
        <>
          {gallery && <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />}
          <figcaption
            className={gallery && `absolute bottom-0 p-4 w-full z-50 fontStyle-sm text-gray-50`}
            dangerouslySetInnerHTML={{__html: content.caption}}
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
  className?: string
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
  gallery,
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
    <div className="h-full justify-center flex items-center rounded-lg p-4 bg-gray-300 text-gray-800 opacity-50 ">Media</div>
  )
}
