import React, { FC, HTMLAttributes } from 'react'
import {ButtonsGroup, GroupButtonProps} from '../blocks/ButtonsGroup'
import {Media, ImageProps} from '../parts/Media'

export interface PrimaryProps extends HTMLAttributes<HTMLDivElement> {

  /**
   * Is the component direction  default/horizontal (left to right) or vertical (image above)
   */
  type?: 'primary' | 'secondary' | 'tertiary'

  /**
   * Is the component direction  default/horizontal (left to right) or vertical (image above)
   */
  layout?: 'default' | 'vertical'

  /**
   * Image Position
   */
  imagePosition?: 'undefined' | 'auto' | 'left' | 'right' | 'top'

  /**
  *  Block image
  */
  image?: ImageProps | null

  /**
  *  Video properties
  */
  autoplay ?: boolean
  muted ?: boolean
  controls ?: boolean
  loop ?: boolean

  /**
   * text to display for heading
   */
  title: string

  /**
   * text to display for paragraph
   */
  body: string

  /**
  *  Block buttons list
  */
  buttons?: GroupButtonProps[]

  /**
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Primary: FC<PrimaryProps> = ({
  type = "primary",
  layout = 'default',
  imagePosition = 'auto',
  image = null,
  autoplay = true,
  muted = true,
  controls = false,
  loop = true,
  title = '',
  body = '',
  buttons = [],
  className = '',
}) => {
  layout = !layout ? 'default' : layout

  let BlockType;
  switch(type) {
    case "primary": 
      BlockType = 
      <div
        className={`mt-4 lg:mt-0 ${layout !== 'vertical' && 'lg:w-1/2 lg:flex lg:items-center lg:justify-center'} `}
      >
        <div
          className={`${layout !== 'vertical' ? 'lg:pl-12' : ''} `}
        >
          <h2
            className='fontStyle-4xl mb-4 break-words'
          >
            {title}
          </h2>
          <p
          className='fontStyle-base'
          dangerouslySetInnerHTML={{ __html: body }}
          />
            {
              Object.keys(buttons).length >= 1 &&
              <ButtonsGroup key={JSON.stringify(buttons)} buttons={buttons} className='space-x-4 mt-6' />
            }
        </div>
      </div>;
      break;

    case "secondary":
      BlockType = 
      <div
        className={`mt-4 sm:mt-0 ${layout !== 'vertical' && 'sm:w-1/2 sm:flex '} `}
      >
        <div
          className={`${layout !== 'vertical' ? 'sm:pl-12' : ''} `}
        >
          <h2
            className='fontStyle-4xl mb-4 break-words'
          >
            {title}
          </h2>
          <p
            className='fontStyle-base'
            dangerouslySetInnerHTML={{__html: body}}
          />
            {
              Object.keys(buttons).length >= 1 &&
              <ButtonsGroup key={JSON.stringify(buttons)} buttons={buttons} className='space-x-4 mt-6' />
            }
        </div>
      </div>;
      break;

    case "tertiary":
      BlockType = 
      <div
        className={`mt-4 sm:mt-0 ${layout !== 'vertical' ? 'sm:w-1/2 sm:flex sm:ml-6' : ''}`}
      >
        <div>
          <h2
            className='fontStyle-2xl mb-2 break-words block w-full'
          >
            {title}
          </h2>
          <p
            className='fontStyle-base break-words'
            dangerouslySetInnerHTML={{ __html: body }}
          >
          </p>
        </div>
      </div>;
      break;

    default:
      BlockType = 
      // Primary Style
      <div
        className={`mt-4 lg:mt-0 ${layout !== 'vertical' && 'lg:w-1/2 lg:flex lg:items-center lg:justify-center'} `}
      >
      <div
        className={`${layout !== 'vertical' ? 'lg:pl-12' : ''} `}
      >
        <h2
          className='fontStyle-4xl mb-4 break-words'
        >
          {title}
        </h2>
        <p
          className='fontStyle-base'
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {
          Object.keys(buttons).length >= 1 &&
          <ButtonsGroup key={JSON.stringify(buttons)} buttons={buttons} className='space-x-4 mt-6' />
        }
      </div>
    </div>;
  }


  return (
    <div
      className={`text-gray-900 dark:text-gray-50 ${layout === 'default' ? 'lg:flex' : ''} ${imagePosition === 'right' ? 'lg:flex-row-reverse' : ''}`}
    >
      {
        (layout === 'default' || layout === 'vertical') && (
          <>
            <div
              className={`${layout === 'vertical' ? 'lg:pb-8' : 'lg:w-1/2 lg:p-4'}`}
            >
              {image && (
                <Media
                  media={image}
                  autoplay={autoplay} muted={muted} controls={controls} loop={loop}
                  className={`rounded-lg shadow-xl ${layout === 'default' ? ' w-auto' : ''}`}
                />
              )}
            </div>     
            {BlockType}
          </>
        )
      }
    </div>
  )
}
