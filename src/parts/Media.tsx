import React, { FC, HTMLAttributes } from 'react'

export interface MediaProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Received media (It can be an image or a video)
   */
  media: {
    type ?: string,
    id ?: string,
    link ?: string,
    url ?: string,
    extension ?: string,
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
  autoplay ?: boolean
  muted ?: boolean
  controls ?: boolean
  loop ?: boolean
  className ?: string
}

export const Media: FC<MediaProps> = ({
  media,
  autoplay = true,
  muted = true,
  controls = false,
  loop = false,
  className = ''
}) => {
  const RenderImage = () =>{
    return (
      <figure role='group'>
        <img src={media.url}
          alt={media.content && media.content.alt ? media.content.alt : ''}
          className={`${className}`}
        />
          { media.content && media.content.caption && (
            <figcaption>
              {media.content.caption}
            </figcaption>
          )}
      </figure>
    )
  }

  const RenderVideo = () =>{
    console.log(autoplay, muted, controls);
    return (
      <video autoPlay={autoplay} muted={muted} controls={controls} loop={loop}
      className={`${className}`}>
        <source src={media.url} type={`video/${media.extension ? media.extension : 'mp4' }`} />
      </video>
    )
  }

  switch (media.type){
    case 'image':
      return <RenderImage />
    case 'video':
      return <RenderVideo />
    default:
      break;
  }

}
