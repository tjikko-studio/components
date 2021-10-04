import React, {FC, HTMLAttributes} from 'react'

import {ContentColumns, SectionItemProps} from '../layouts/ContentColumns'
import {Footer, NavColumns as FooterNavColumns} from '../nav/Footer'
import {SiteNav, NavColumns as SiteNavColumns} from '../nav/SiteNav'

import {MenuType} from '../../shared/types'

export interface LocalesType {
  current?: string | null
  content?: MenuType[]
}

export interface TemplateProps extends HTMLAttributes<HTMLElement> {
  /*
   * Fetch content have a different structure for
   * - pages templates
   * - navigation templates
   * (obviously)
   * I don't have any solution for this at the moment
   */
  locales?: LocalesType
  templateType?: 'template' | 'navigation' | 'footer'
  content?: SiteNavColumns[] | FooterNavColumns[] | SectionItemProps[]
}

/**
 * Primary UI component for user interaction
 */
export const Template: FC<TemplateProps> = ({content = [], locales = null, templateType = 'template'}) => {
  const AvailableTemplates = {
    template: () => {
      return (
        <div>
          {content ? (
            <ContentColumns content={content as SectionItemProps[]} contentSectionClasses="sm:grid sm:grid-cols-12" />
          ) : (
            <div>No template yet</div>
          )}
        </div>
      )
    },
    navigation: () => {
      return <SiteNav menuData={content as SiteNavColumns[]} locales={locales} />
    },
    footer: () => {
      return <Footer menuData={content as FooterNavColumns[]} locales={locales} />
    }
  }

  const chosen = AvailableTemplates[templateType]
  if (!chosen) {
    console.error(new Error(`Unhandled type ${templateType}!!!`))
    console.error(
      'Above error appeared with Template props:',
      JSON.stringify({
        content,
        locales,
        templateType
      })
    )
    return null
  }

  return chosen()
}
