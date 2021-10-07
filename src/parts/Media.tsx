import React, {FC, HTMLAttributes} from 'react'

export interface MediaProps extends HTMLAttributes<HTMLDivElement> {
  type: 'image' | 'video'
  id: string
  link: string
  url: string
  extension: string
  dimensions?: {
    width: number
    height: number
    ratio: number
    orientation: string
  }
  content?: {
    alt?: string
    caption?: string
    creator?: string
    license?: string
    link?: string
  }
  alt?: string
  className: string
}

export type ImageProps = MediaProps

export const MediaImage: FC<ImageProps> = ({type, id, link, alt, url, extension, dimensions = {}, content = {}, className}) => {
  return (
    <figure role="group">
      <img src={url} alt={content && content.alt ? content.alt : alt} className={className} />
      {content && content.caption && <figcaption>{content.caption}</figcaption>}
    </figure>
  )
}

export interface VideoProps extends MediaProps {
  autoplay?: boolean
  muted?: boolean
  controls?: boolean
  loop?: boolean
}

export const MediaVideo: FC<VideoProps> = ({url, extension, autoplay, muted, controls, loop, className}) => {
  return (
    <video autoPlay={autoplay} muted={muted} controls={controls} loop={loop} className={className}>
      <source src={url} type={`video/${extension ? extension : 'mp4'}`} />
    </video>
  )
}

export interface GenericMediaProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Received media (It can be an image or a video)
   */
  media: MediaProps | VideoProps
  autoplay?: boolean
  muted?: boolean
  controls?: boolean
  loop?: boolean
  alt?: string
  className?: string
}

export const Media: FC<GenericMediaProps> = ({media, autoplay = true, muted = true, controls = false, loop = false, alt, className}) => {
  console.log(media)
  return media.type === 'video' ? (
    <MediaVideo key={media.url} {...media} className={className} autoplay={autoplay} muted={muted} controls={controls} loop={loop} />
  ) : (
    <MediaImage key={media.url} {...media} alt={alt || media.alt} className={className} />
  )
}
