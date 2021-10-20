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
  className: string
  gallery?: boolean
}

export type ImageProps = MediaProps
export const MediaImage: FC<ImageProps> = ({id, link, url, extension, dimensions = {}, content = {}, className, gallery}) => {
  return (
    <figure key={id} role="group" className={gallery && className}>
      {url && <img src={url} alt={content && content.alt} className={!gallery ? className : `relative h-full w-full`} />}
      {content && content.caption && (
        <>
          {gallery && <div className="absolute h-1/2 bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent opacity-80" />}
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

export const MediaVideo: FC<VideoProps> = ({id, url, content = {}, extension, autoplay, muted, controls, loop, className, gallery}) => {
  return (
    <figure key={id} role="group" className={gallery && className}>
      <video autoPlay={autoplay} muted={muted} controls={controls} loop={loop} className={!gallery ? className : `relative h-full w-full`}>
        <source src={url} type={`video/${extension ? extension : 'mp4'}`} />
        <meta itemProp="description" content={content && content.alt && content.alt}></meta>
      </video>
      {content && content.caption && (
        <>
          {gallery && <div className="absolute h-1/2 bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent opacity-80" />}
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
  media: MediaProps | VideoProps
  autoplay?: boolean
  muted?: boolean
  controls?: boolean
  loop?: boolean
  className?: string
  gallery?: boolean
}

export const Media: FC<GenericMediaProps> = ({
  media,
  autoplay = true,
  muted = true,
  controls = false,
  loop = false,
  className,
  gallery
}) => {
  return media.type === 'video' ? (
    <MediaVideo key={media.url} {...media} autoplay={autoplay} muted={muted} controls={controls} loop={loop} gallery={gallery} />
  ) : (
    <MediaImage key={media.url} {...media} className={className} gallery={gallery} />
  )
}
function cn(arg0: string[]): string {
  throw new Error('Function not implemented.')
}
