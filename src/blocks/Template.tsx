import React, {FC, HTMLAttributes} from 'react'

import {ContentColumns} from '../layouts/ContentColumns'
import {SiteNav} from '../nav/SiteNav'
import {Footer} from '../nav/Footer'
import {MenuType} from '../../shared/types'

export interface LocalesType {
  current?: string | null
  content?: MenuType[]
}

export interface TemplateProps extends HTMLAttributes<HTMLElement> {
  /*
    Fetch content have a different structure for pages templates & navigation templates (obviously)
    I don't have any solution for this at the moment
   */
  locales?: LocalesType
  templateType?: string
  content?: any
}

/**
 * Primary UI component for user interaction
 */
export const Template: FC<TemplateProps> = ({
  content = [],
  locales = null,
  templateType = null
}) => {
  switch (templateType) {
    case 'template':
      return (
        <div>
          {
            content
              ? (
                <ContentColumns
                  content={content}
                  contentSectionClasses='sm:grid sm:grid-cols-12'
                />
              ) : (
                <div>No template yet</div>
              )
          }
        </div>
      )
    case 'navigation':
      return (
        <SiteNav menuData={content} locales={locales} />
      )
    case 'footer':
      return (
        <Footer menuData={content} locales={locales} />
      )
    default:
      console.error(new Error(`Unhandled type ${templateType}!!!`))
      console.error('Above error appeared with Template props:', {content, locales, templateType})
      return null
  }
}
