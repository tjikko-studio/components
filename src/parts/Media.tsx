import React, {HTMLAttributes, useEffect, useRef, useState} from 'react'
import cn from 'classnames'

import MediaIcon from '/assets/icons/media-image.svg'
import PlayIcon from '/assets/icons/play.svg'

import {getSrcSizes, nonThrowingJsonParse} from '../../kirbyDatasCleaner'

import {ImageProps as SharedImageProps, MediaProps as SharedMediaProps} from '../../shared/types'

export type ImageProps = SharedImageProps
export type MediaProps = SharedMediaProps
export type GalleryProps = VideoProps

export const FigCaption = ({video = false, playing = false, caption = ''}: {video?: boolean; playing?: boolean; caption: string}) => {
  const shared = [
    'absolute flex w-full from-gray-900 z-50 min-h-32 p-4 fontStyle-xs text-shadow-md',
    video && 'transform transition-opacity-transform ease-in-out duration-500'
  ]
  const top = ['items-start -top-16 pt-20 bg-gradient-to-b', playing ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0']
  const bottom = ['items-end -bottom-16 pb-20 bg-gradient-to-t', playing ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100']
  const Caption = ({position, AriaHidden = false}: {position: string[]; AriaHidden?: boolean}) => {
    return <figcaption className={cn(shared, position)} dangerouslySetInnerHTML={{__html: caption}} aria-hidden={AriaHidden} />
  }

  return (
    <>
      {video && <Caption position={top} AriaHidden />}
      <Caption position={bottom} />
    </>
  )
}

export const MediaImage = ({
  id,
  url,
  ratio,
  mediaClasses,
  className,
  alt = '',
  info = '',
  srcsetSize,
  fit = false,
  lazyLoading = true,
  style
}: ImageProps) => {
  const isInfoStr = typeof info === 'string'
  const parsedInfos = info && isInfoStr ? nonThrowingJsonParse(info) : info && !isInfoStr ? info : null
  const srcSize = srcsetSize ? srcsetSize : null
  const srcSet = parsedInfos?.srcset ? parsedInfos.srcset[srcSize] : null
  const loading = lazyLoading ? 'lazy' : 'eager'
  return (
    <figure key={id} className={cn('relative text-gray-50 overflow-hidden transition', ratio && `ratio-${ratio}`, className)} style={style}>
      {url && (
        <img
          srcSet={srcSet}
          sizes={getSrcSizes(srcSet)}
          loading={loading}
          src={url}
          alt={alt && alt !== '' ? alt : parsedInfos?.alt}
          className={cn(
            'max-h-full',
            ratio && ratio !== 'unset' ? 'object-cover' : 'object-contain',
            fit ? 'w-auto' : 'min-w-full',
            mediaClasses
          )}
        />
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

export const MediaVideo = ({
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
  fit,
  style
}: VideoProps) => {
  const parsedInfos = nonThrowingJsonParse(info)

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
      style={style}
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
        className={cn('h-full', ratio && 'object-cover', fit ? 'w-auto' : 'w-full', mediaClasses)}
      >
        <source src={url} type={`video/${extension ? extension : 'mp4'}`} />
        <meta itemProp="description" content={parsedInfos?.alt} />
      </video>
      {parsedInfos?.caption && <FigCaption video playing={videoPlaying} caption={parsedInfos?.caption} />}
    </figure>
  )
}

export interface YouTubeEmbedProps extends GenericMediaProps {
  url?: string
  ratio?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
}

export const YouTubeEmbed = ({url, ratio, autoplay, loop, muted, controls, fit, style, className}: YouTubeEmbedProps) => {
  if (!ratio || ratio === '') {
    ratio = 'unset'
  }
  const allowed = ['accelerometer', 'clipboard-write', 'encrypted-media', 'gyroscope', 'picture-in-picture']
  const query = new URLSearchParams({rel: '0', modestbranding: '1'})
  query.set('controls', controls === false ? '0' : '1')
  if (autoplay) {
    allowed.push('autoplay')
    query.set('autoplay', '1')
  }
  if (muted) {
    query.set('mute', '1')
  }
  if (loop) {
    query.set('loop', '1')
  }
  return (
    <iframe
      width={ratio !== 'unset' ? '' : '100%'}
      height="100%"
      src={`${url}?${query.toString()}`}
      title="Video"
      frameBorder="0"
      allow={allowed.join('; ')}
      allowFullScreen
      className={cn(className, ratio !== 'unset' && `ratio-${ratio}`)}
      style={style}
    ></iframe>
  )
}

export interface GenericMediaProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Received media (It can be an image or a video)
   */
  media?: MediaProps | VideoProps
  srcsetSize?: string
  lazyLoading?: boolean
  autoplay?: boolean
  muted?: boolean
  controls?: boolean
  loop?: boolean
  ratio?: string
  fit?: boolean
  mediaClasses?: string
}

export const Media = ({
  media,
  srcsetSize,
  autoplay = true,
  muted = true,
  controls = false,
  loop = false,
  lazyLoading,
  ratio = '',
  className,
  mediaClasses,
  fit = false,
  style
}: GenericMediaProps) => {
  if (ratio === '') {
    ratio = 'unset'
  }
  if (media) {
    if (Array.isArray(media) && media[0]) {
      media = media[0]
    }
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
        style={style}
      />
    ) : media.type === 'youtube' ? (
      <YouTubeEmbed
        key={media.url}
        {...media}
        ratio={ratio}
        autoplay={autoplay}
        loop={loop}
        muted={muted}
        controls={controls}
        className={cn(className, mediaClasses)}
        style={style}
      />
    ) : (
      <MediaImage
        key={media.url}
        {...media}
        srcsetSize={srcsetSize}
        ratio={ratio}
        lazyLoading={lazyLoading}
        className={className}
        fit={fit}
        mediaClasses={mediaClasses}
        style={style}
      />
    )
  }
  return (
    <div className={cn('flex max-w-full overflow-hidden', className, mediaClasses, ratio && `ratio-${ratio}`)} style={style}>
      <div role="presentation" className="w-full justify-center flex items-center p-4 bg-gray-300 text-gray-800 opacity-50">
        <MediaIcon className="w-8 h-8" />
      </div>
    </div>
  )
}
