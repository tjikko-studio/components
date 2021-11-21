import React, {FC, HTMLAttributes, useEffect, useRef, useState} from 'react'
import cn from 'classnames'

import MediaIcon from '/assets/icons/media-image.svg'
import PlayIcon from '/assets/icons/play.svg'

import {ImageProps as SharedImageProps, MediaProps as SharedMediaProps} from '../../shared/types'

export type ImageProps = SharedImageProps
export type MediaProps = SharedMediaProps
export type GalleryProps = VideoProps

export const FigCaption: FC<{gallery?: boolean; playing?: boolean; caption: string}> = ({
  gallery = false,
  playing = false,
  caption = ''
}) => {
  const captionClasses = 'absolute flex w-full z-40 opacity-80 fontStyle-xs text-shadow-sm p-4 motion-safe:transition-all duration-200'
  const captionBottom = [captionClasses, 'top-3/4 h-1/4 bg-gradient-to-t from-gray-900 to-transparent items-end']
  const captionTop = [captionClasses, 'top-0 h-1/4 bg-gradient-to-b from-gray-900 to-transparent items-start']
  const captionStyle = playing ? captionTop : captionBottom
  return (
    <>
      <figcaption className={cn(gallery && captionStyle)} dangerouslySetInnerHTML={{__html: caption}} />
    </>
  )
}

export const MediaImage: FC<ImageProps> = ({id, link, url, extension, dimensions = {}, content = {}, className, gallery, info = ''}) => {
  const parsedInfos = info ? JSON.parse(info) : null
  return (
    <figure key={id} role="group" className={cn('relative text-gray-50 overflow-hidden transition', gallery && className)}>
      {url && <img src={url} alt={parsedInfos?.alt} className={!gallery ? className : `relative h-full w-full`} />}
      {parsedInfos?.caption && <FigCaption gallery={gallery} caption={parsedInfos?.caption} />}
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
  gallery,
  info = ''
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
    <figure key={id} role="group" className={cn('relative flex flex-col text-gray-50 overflow-hidden', className)}>
      <div
        className={cn(
          'absolute top-0 h-full w-full flex justify-center items-center z-10 transition-opacity',
          videoPlaying ? 'pointer-events-none opacity-0' : 'opacity-80'
        )}
        onClick={handleClick}
      >
        {controls && <PlayIcon className="w-12 h-12" />}
      </div>
      <video ref={videoRef} autoPlay={autoplay} muted={muted} controls={videoPlaying} loop={loop} className={cn('relative h-full w-full')}>
        <source src={url} type={`video/${extension ? extension : 'mp4'}`} />
        <meta itemProp="description" content={parsedInfos?.alt}></meta>
      </video>
      {parsedInfos?.caption && <FigCaption gallery={gallery} playing={videoPlaying} caption={parsedInfos?.caption} />}
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
  gallery?: boolean
}

export const Media: FC<GenericMediaProps> = ({
  media = null,
  autoplay = true,
  muted = true,
  controls = false,
  loop = false,
  className,
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
      gallery={gallery}
    />
  ) : media && media.type === 'image' ? (
    <MediaImage key={media.url} {...media} className={className} gallery={gallery} />
  ) : (
    <div className={cn('h-full justify-center flex items-center rounded-lg p-4 bg-gray-300 text-gray-800 opacity-50')}>
      <MediaIcon className="w-8 h-8 opacity-60" />
    </div>
  )
}
