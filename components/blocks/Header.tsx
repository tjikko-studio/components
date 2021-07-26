import React, {FC, HTMLAttributes} from 'react'
import {BreadCrumb, BreadCrumbType} from './BreadCrumb'
import {Input} from '../form/Input'
import {Button} from '../Button'
import {SP} from '../svg/SP'

export interface HeaderFooterType {
  type: "default" | "form" | "case"
  buttonText?: string
  formPlaceholder?: string
  caseText?: string
  url?: string
}

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /**
   * Header type and information
   */
  styles: HeaderFooterType
  /**
   * breadcrumb
   */
  breadcrumb?: Array<BreadCrumbType>
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
  styles
}) => {

  return (
    <div
      className={` flex flex-col
                ${className ? className : ''}
            `}
    >
      <BreadCrumb
        crumblist={breadcrumb}
        styles="fixed"
        className="text-gray-50 pb-3"
      />
      <h1
        className='text-gray-50 fontStyle-5xl '// lg:fontStyle-6xl md:fontStyle-5xl sm:fontStyle-5xl'
      >
        {title}
      </h1>
      <p
        className='text-gray-50 text-base break-words pt-4'
      >
        {text}
      </p>
      <div
        className='pt-6 pb-4'
      >
        {
          (styles.type === "default") && (
            <a
              href={styles.url}
              className='bg-brand-400 rounded-lg py-4 px-5 text-base font-semibold uppercase text-brand-900 hover:bg-brand-300'
            >
              {styles.buttonText}
            </a>
          )
        }
        {
          (styles.type === "form") && (
            <form className="flex space-x-2">
              <Input
                placeholder={styles.formPlaceholder}
              />
              <Button
                text={styles.buttonText}
                forceDark={true}
                type="primary"
                icon='none'
                size="large"
              />
            </form>
          )
        }
        {
          (styles.type === "case") && (
            <div
              className='flex items-center'
            >
              <SP width='48' height='48' />
              <a
                className='text-gray-50 ml-7'
                href={styles.url}
              >
                {styles.caseText}
              </a>
            </div>
          )
        }
      </div>
    </div>
  )
}
