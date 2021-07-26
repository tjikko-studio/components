import React, { FC, HTMLAttributes } from 'react'
import {Button} from '../Button'

export interface CTAType {
  name: string
  url: string
}

export interface CTAInfoType {
  head: string
  text: string
  cta: CTAType
}

export interface PrimaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
  *  image url to show
  */
  imageUrl: string
  /**
   * text and button to show
   */
  info: CTAInfoType
  /**
   * Block type
   */
  type?: "default" | "vertical"
  /**
   * Is mirror
   */
  mirror?: boolean
  /**
   * Additional space-separated class names to append
   */
  className?: string
}


/**
 * Primary UI component for user interaction
 */
export const Primary: FC<PrimaryProps> = ({
  type = 'vertical',
  mirror = false,
  imageUrl = '',
  info = {}
}) => {
  const Text = () => {
    return (
      <div
        className={`
          ${type != "vertical" && "flex items-center justify-center"}
        `}
      >
        <div
          className={`
            ${type != "vertical" && "pl-12"
            }
        `} >
          <h2
            className='fontStyle-4xl'
          >
            {
              info.head
            }
          </h2>
          <p
            className='text-base pt-4'
          >
            {
              info.text
            }
          </p>
          {
            info.cta &&
            <div
              className="pt-6">
              <Button
                text={info.cta.name}
                url={info.cta.url}
                type="primary"
                icon='none'
                size="large"
              />
            </div>
          }
        </div>
      </div>
    )
  }
  return (
    <div
      className={`${type === 'default' ? 'flex' : ''}${mirror ? ' flex-row-reverse' : ''}`}
    >
      {
        (type === "default" || type === "vertical") && (
          <>
            {imageUrl && (
              <div
                className={`${type === 'vertical' ? 'pb-8' : 'px-12 py-6'}`}
              >
                <img
                  src={imageUrl}
                  className={`rounded-lg${type === 'default' ? ' w-auto' : ''}`}
                />
              </div>
            )}
            <Text />
          </>
        )
      }
    </div>
  )
}
