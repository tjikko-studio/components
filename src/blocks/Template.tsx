import React, { FC, HTMLAttributes } from 'react'

import { ContentColumns } from '../layouts';
import { ColumnProps } from '../../shared/types';

export interface TemplateItemProps {
  columns: ColumnProps[]
}

export interface TemplateProps extends HTMLAttributes<HTMLElement> {
  /**
   * Sections object that will be parsed through to build the component
   */
  fetchedContent?: TemplateItemProps[]
  content?: TemplateItemProps[]
}

/**
 * Primary UI component for user interaction
 */
export const Template: FC<TemplateProps> = ({
  content = null,
  fetchedContent = null
}) => {
  return (
    <div>
      {
        !fetchedContent ? <div>No template yet</div> : (
          <ContentColumns content={fetchedContent} contentSectionClasses='sm:grid sm:grid-cols-12' />
        )
      }
    </div>
  );
}
