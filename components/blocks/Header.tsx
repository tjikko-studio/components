import React, {FC, HTMLAttributes} from 'react'
import {Breadcrumb, BreadcrumbType} from './Breadcrumb'
import {Input} from '../form/Input'
import {Button} from '../Button'
import ClientLogo from '../../assets/images/logo_placeholder_square.svg'

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /**
   * Header type and information
   */
  type: "default" | "form" | "case"
  buttonText?: string
  formPlaceholder?: string
  caseText?: string
  url?: string
  /**
   * breadcrumb
   */
  breadcrumb?: BreadcrumbType[]
  /**
   * text to show as title
   */
  title: string
  /**
   * text to show
   */
  text: string
  /**
   * Additional space-separated class names to append
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Header: FC<HeaderProps> = ({
  breadcrumb = [],
  className,
  title,
  text,
  type,
  url,
  buttonText,
  formPlaceholder,
  caseText
}) => {

  return (
    <div
      className={` flex flex-col ${className ? className : ''}`}
    >
      <Breadcrumb
        crumbs={breadcrumb}
        className="text-gray-50 pb-3"
      />
      <h1
        className='fontStyle-5xl text-gray-50 '// lg:fontStyle-6xl md:fontStyle-5xl sm:fontStyle-5xl'
      >
        {title}
      </h1>
      <p
        className='fontStyle-base text-gray-50 break-words pt-4'
      >
        {text}
      </p>
      <div
        className='pt-6 pb-4'
      >
        {
          (type === "default") && (
            <a
              href={url}
              className='fontStyle-base strong uppercase bg-primary-400 rounded-lg py-4 px-5 text-primary-900 hover:bg-primary-300'
            >
              {buttonText}
            </a>
          )
        }
        {
          (type === "form") && (
            <form className="flex space-x-2">
              <Input
                placeholder={formPlaceholder}
              />
              <Button
                text={buttonText}
                forceDark={true}
                type="primary"
                icon='none'
                size="large"
              />
            </form>
          )
        }
        {
          (type === "case") && (
            <div
              className='flex items-center space-x-6'
            >
              <ClientLogo width='' height='48' className='w-auto' />
              <a
                className='text-gray-50 ml-7'
                href={url}
              >
                {caseText}
              </a>
            </div>
          )
        }
      </div>
    </div>
  )
}
