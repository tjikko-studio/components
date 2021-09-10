import React, {FC, HTMLAttributes} from 'react'

import {ContentColumns} from '../layouts/ContentColumns'
import {ColumnProps} from '../../shared/types'

export interface TemplateItemProps {
  id: string;
  columns: ColumnProps[]
}

export interface TemplateProps extends HTMLAttributes<HTMLElement> {
  /**
   * Sections object that will be parsed through to build the component
   */
  content?: TemplateItemProps[]
  templatesContent?: TemplateItemProps[]
}

/**
 * Primary UI component for user interaction
 */
export const Template: FC<TemplateProps> = ({
  content = [],
  templatesContent = []
}) => {
  return (
    <div>
      {
        templatesContent
          ? (
            <ContentColumns
              content={content}
              templatesContent={templatesContent}
              contentSectionClasses='sm:grid sm:grid-cols-12'
            />
          ) : (
            <div>No template yet</div>
          )
      }
    </div>
  )
}
