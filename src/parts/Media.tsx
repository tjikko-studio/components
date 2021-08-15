import React, {FC, HTMLAttributes} from 'react'

export interface MediaProps extends HTMLAttributes<HTMLDivElement> {
  type: string,
  id: string,
  link: string,
  url: string,
  extension: string,
  dimensions?: {
    width: number
    height: number
    ratio: number
    orientation: string
  }
  content?: {
    alt?: string,
    caption?: string,
    creator?: string,
    license?: string,
    link?: string,
  }
}

export interface ImageProps extends MediaProps {

}

export const MediaImage: FC<ImageProps> = ({
  url,
  content,
  className
}) => {
  return (
    <figure role='group'>
      <img src={url}
        alt={content && content.alt ? content.alt : ''}
        className={`${className}`}
      />
      {content && content.caption && (
        <figcaption>
          {content.caption}
        </figcaption>
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
  url,
  extension,
  autoplay,
  muted,
  controls,
  loop,
  className
}) => {
  console.log(autoplay, muted, controls)
  return (
    <video autoPlay={autoplay} muted={muted} controls={controls} loop={loop}
      className={`${className}`}>
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
  className?: string
}

export const Media: FC<GenericMediaProps> = ({
  media,
  autoplay = true,
  muted = true,
  controls = false,
  loop = false,
  className = ''
}) => {
  console.log({media, autoplay, muted, controls, loop, className})
  switch (media.type) {
    case 'image':
      return <MediaImage key={media.url} {...media} className={className} />
    case 'video':
      return <MediaVideo key={media.url} {...media} autoplay={autoplay} muted={muted} controls={controls} loop={loop} />
    default:
      return null
  }
}
