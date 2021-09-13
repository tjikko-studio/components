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
}

/**
 * Primary UI component for user interaction
 */
export const Template: FC<TemplateProps> = ({
  content = []
}) => {
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
}
