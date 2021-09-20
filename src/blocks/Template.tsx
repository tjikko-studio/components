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
  templateType?: 'template' | 'navigation' | 'footer'
  content?: any
}

/**
 * Primary UI component for user interaction
 */
export const Template: FC<TemplateProps> = ({
  content = [],
  locales = null,
  templateType = 'template'
}) => {
  const AvailableTemplates = {
    template: () => (
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
    ),
    navigation: () => (
      <SiteNav menuData={content} locales={locales} />
    ),
    footer: () => (
      <Footer menuData={content} locales={locales} />
    )
  }
  const Chosen = AvailableTemplates[templateType]
  if (!Chosen) {
    console.error(new Error(`Unhandled type ${templateType}!!!`))
    console.error('Above error appeared with Template props:', JSON.stringify({content, locales, templateType}))
    return null
  }
  return Chosen()
}
