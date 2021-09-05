import React, { FC, HTMLAttributes } from 'react'

import { ContentColumns } from '../layouts';
import extractCombo from '../../utilities/stringUtils';
import { ColumnProps } from '../../shared/types';

export interface SectionItemProps {
  columns: ColumnProps[]
}

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Background color
   */
  bgColor?: string

  /**
   * Content Position
   */
  contentPosition?: 'center|center' | 'bottom|left'

  /**
   * Layout width
   */
  layoutWidth?: 'default' | 'tight'

  /**
   * Layout vertical spacing
   */
  layoutSpacing?: 'default' | 'tight'

  /**
   * Sections object that will be parsed through to build the component
   */
  content?: SectionItemProps[]
}

export const Section: FC<SectionProps> = ({
  bgColor = 'transparent',
  layoutWidth = 'default',
  layoutSpacing = 'default',
  contentPosition = 'center|center',
  content = []
}) => {
  const [verAlign, horAlign] = extractCombo(contentPosition)
  const [theme, background] = extractCombo(bgColor)
  // See the tailwind hacks in src/index.tsx
  const align = (horAlign && verAlign) ? `justify-${horAlign} items-${verAlign}` : '';

  const columnComponentExtraProps = {
    Text: (baseProps: any) => {
      return {
        className: `${baseProps.className} text-gray-900 dark:text-gray-50`
      }
    }
  };
  return (
    <div
      className={`overflow-hidden ${theme ? theme : ''}`}
      style={{ backgroundColor: background }}
    >
      <div
        className={`
          text-gray-900 dark:text-gray-50 grid gap-y-8 sm:gap-y-12 md:gap-y-16 w-full h-full max-w-screen-xl mx-auto
          ${layoutWidth === 'tight' ? 'px-4 sm:px-8 md:px-24' : 'px-4 sm:px-8 md:px-12'}
          ${layoutSpacing === 'tight' ? 'py-8 sm:py-12 md:py-16' : 'py-16 sm:py-24 md:py-32'}
          ${align ? align : ''}
        `}
      >
        {
          content && (
            <ContentColumns
              content={content}
              contentPosition={contentPosition}
              componentsExtraProps={columnComponentExtraProps}
              columnClasses="flex flex-col space-y-8 h-full" />
          )
        }
      </div>
    </div>
  )
}
