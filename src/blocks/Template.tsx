import React, { FC, HTMLAttributes } from 'react'

import getComponent from '../../utilities/getComponent'
import {SiteNav} from '../nav/SiteNav'
import {Footer} from '../nav/Footer'
import {MenuType} from '../nav/ListNav'
import getWidth from '../../utilities/getWidth'

export interface LocalesType {
  current?: string | null
  content?: MenuType[]
}

export interface BlockProps {
  type: string
  content: any
}

export interface ColumnProps {
  width: string
  blocks: BlockProps[]
}

export interface TemplateItemProps {
  columns: ColumnProps[]
}

export interface TemplateProps extends HTMLAttributes<HTMLElement> {
  /**
   * Sections object that will be parsed through to build the component
   */

  /* 
   Fetch content have a different structure for pages templates & navigation templates (obviously)
   I don't have any solu6tion for this at the moment
   */
  fetchedContent?: any//TemplateItemProps[]
  locales?: LocalesType
  templateType?: string
  content?: TemplateItemProps[]
}

/**
 * Primary UI component for user interaction
 */
export const Template: FC<TemplateProps> = ({
  content = null,
  fetchedContent = null,
  locales = null,
  templateType = null
}) => {
  return (
    <div>
      {
        !fetchedContent ? <div>No template yet</div> : 
          <div>
            {
              
              templateType === 'template' ?
                fetchedContent.map(({columns}) => (
                  <section key={JSON.stringify(columns)} className='sm:grid sm:grid-cols-12'>
                      {
                        columns.map(({
                          width,
                          blocks
                        }) => (
                          // See the tailwind hacks in src/index.tsx
                          <div key={JSON.stringify(blocks)} className={`col-span-${getWidth(width)}`}>
                            {
                              blocks.map(getComponent)
                            }
                          </div>
                        ))
                      }
                    </section>
                ))

              : templateType === 'navigation' ?
                <SiteNav menuData={fetchedContent} locales={locales} /> 
              
              : templateType === 'footer' &&
                <Footer menuData={fetchedContent} locales={locales} /> 
            }
          </div>
      }
    </div>
  );
}