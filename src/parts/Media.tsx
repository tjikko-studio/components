import React, {FC, HTMLAttributes, useEffect, useRef, useState} from 'react'
import cn from 'classnames'

import MediaIcon from '/assets/icons/media-image.svg'
import PlayIcon from '/assets/icons/play.svg'

import {ImageProps as SharedImageProps, MediaProps as SharedMediaProps} from '../../shared/types'

export type ImageProps = SharedImageProps
export type MediaProps = SharedMediaProps
export type GalleryProps = VideoProps

export const FigCaption: FC<{video?: boolean; playing?: boolean; caption: string}> = ({video = false, playing = false, caption = ''}) => {
  const shared = [
    'absolute flex w-full from-gray-900 z-50 min-h-32 p-4 fontStyle-xs text-shadow-md',
    video && 'transform transition-opacity-transform ease-in-out duration-500'
  ]
  const top = ['items-start -top-16 pt-20 bg-gradient-to-b', playing ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0']
  const bottom = ['items-end -bottom-16 pb-20 bg-gradient-to-t', playing ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100']
  // aria-hidden="true"
  const Caption: FC<{position: string[]; AriaHidden?: boolean}> = ({position, AriaHidden = false}) => {
    return <figcaption className={cn(shared, position)} dangerouslySetInnerHTML={{__html: caption}} aria-hidden={AriaHidden} />
  }

  return (
    <>
      {video && <Caption position={top} AriaHidden />}
      <Caption position={bottom} />
    </>
  )
}

export const MediaImage: FC<ImageProps> = ({id, url, ratio, mediaClasses, className, info = '', fit}) => {
  const parsedInfos = info ? JSON.parse(info) : null
  return (
    <figure key={id} role="group" className={cn('relative text-gray-50 overflow-hidden transition', ratio && `ratio-${ratio}`, className)}>
      {url && (
        <img src={url} alt={parsedInfos?.alt} className={cn('h-full', ratio && 'object-cover', fit ? 'w-auto' : 'w-full', mediaClasses)} />
      )}
      {parsedInfos?.caption && <FigCaption caption={parsedInfos?.caption} />}
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
  extension,
  autoplay,
  muted,
  controls,
  loop,
  ratio,
  className,
  mediaClasses,
  info = '',
  fit
}) => {
  const parsedInfos = info ? JSON.parse(info) : null

  const videoRef = useRef(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  const handleClick = () => {
    setVideoPlaying(true)
    videoRef.current.play()
  }

  useEffect(() => {
    const toggleVideoPlaying = () => {
      setVideoPlaying(!videoPlaying)
    }
    const videoRefEffect = videoRef.current
    videoRefEffect.addEventListener('ended', toggleVideoPlaying)
    return () => {
      videoRefEffect.removeEventListener('ended', toggleVideoPlaying)
    }
  }, [videoRef, videoPlaying, setVideoPlaying])

  return (
    <figure
      key={id}
      role="group"
      className={cn('relative flex flex-col text-gray-50 overflow-hidden', ratio && `ratio-${ratio}`, className)}
    >
      <div
        className={cn(
          'absolute top-0 h-full w-full flex justify-center items-center z-10 transition-opacity',
          videoPlaying ? 'pointer-events-none opacity-0' : 'opacity-80'
        )}
        onClick={handleClick}
      >
        {controls && <PlayIcon className="w-12 h-12" />}
      </div>
      <video
        ref={videoRef}
        autoPlay={autoplay}
        muted={muted}
        controls={videoPlaying}
        loop={loop}
        className={(cn('h-full', ratio && 'object-cover'), fit ? 'w-auto' : 'w-full', mediaClasses)}
      >
        <source src={url} type={`video/${extension ? extension : 'mp4'}`} />
        <meta itemProp="description" content={parsedInfos?.alt}></meta>
      </video>
      {parsedInfos?.caption && <FigCaption video playing={videoPlaying} caption={parsedInfos?.caption} />}
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
  ratio?: string
  fit?: boolean
  mediaClasses?: string
}

export const Media: FC<GenericMediaProps> = ({
  media,
  autoplay = true,
  muted = true,
  controls = false,
  loop = false,
  ratio = '',
  className,
  mediaClasses,
  fit = false
}) => {
  if (media) {
    return media.type === 'video' ? (
      <MediaVideo
        key={media.url}
        {...media}
        autoplay={autoplay}
        muted={muted}
        controls={controls}
        loop={loop}
        ratio={ratio}
        className={className}
        mediaClasses={mediaClasses}
        fit={fit}
      />
    ) : (
      <MediaImage key={media.url} {...media} ratio={ratio} className={className} fit={fit} mediaClasses={mediaClasses} />
    )
  }
  return (
    <div className={cn('flex max-w-full overflow-hidden', className, mediaClasses, ratio && `ratio-${ratio}`)}>
      <div role="presentation" className="w-full justify-center flex items-center p-4 bg-gray-300 text-gray-800 opacity-50">
        <MediaIcon className="w-8 h-8" fit={fit} />
      </div>
    </div>
  )
}
