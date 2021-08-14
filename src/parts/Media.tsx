import React, {FC, HTMLAttributes} from 'react'

export interface MediaProps extends HTMLAttributes < HTMLDivElement >{
  media: {
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
}

export interface ImageProps extends MediaProps {

}

export const MediaImage: FC<ImageProps> = ({
  media,
  className
}) => {
  return (
    <figure role='group'>
      <img src={media.url}
        alt={media.content && media.content.alt ? media.content.alt : ''}
        className={`${className}`}
      />
      {media.content && media.content.caption && (
        <figcaption>
          {media.content.caption}
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
  media,
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
      <source src={media.url} type={`video/${media.extension ? media.extension : 'mp4'}`} />
    </video>
  )
}

export interface GenericMediaProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Received media (It can be an image or a video)
   */
  media: (MediaProps | VideoProps)[]
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
  console.log({ media, autoplay, muted, controls, loop, className })
  return (
    <>
      {media.map((item) => {
        switch (item.type) {
          case 'image':
            return <MediaImage key={item.url} media={item} className={className} />
          case 'video':
            return <MediaVideo key={item.url} media={item} autoplay={autoplay} muted={muted} controls={controls} loop={loop} />
          default:
            return null
        }
      })}
    </>
  )
}
