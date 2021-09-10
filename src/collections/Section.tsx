import React, { FC, HTMLAttributes } from 'react'

import { ContentColumns } from '../layouts/ContentColumns'
import extractCombo from '../../utilities/stringUtils'
import { ColumnProps } from '../../shared/types'

export interface SectionItemProps {
  id: string;
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
  content?: SectionItemProps[],
  templatesContent?: any
}

export const Section: FC<SectionProps> = ({
  bgColor = 'transparent',
  layoutWidth = 'default',
  layoutSpacing = 'default',
  contentPosition = 'center|center',
  content = [],
  templatesContent = {}
}) => {
  const [verAlign, horAlign] = extractCombo(contentPosition)
  const [theme, background] = extractCombo(bgColor)
  // See the tailwind hacks in src/index.tsx
  const align = (horAlign && verAlign) ? `justify-${horAlign} items-${verAlign}` : ''

  let imagePosPrimary = 'undefined'
  let imagePosSecondary = 'undefined'
  let imagePosTertiary = 'undefined'
  
  function getNewPos (prevPos: string, newPos: string) {
    newPos = (newPos === '' || newPos === undefined)  ? 'auto' : newPos
    switch (`${prevPos} | ${newPos}`) {
      case 'undefined | auto':
        return 'left'
      case 'left | auto':
        return 'right'
      case 'right | auto':
        return 'left'
      default:
        return newPos
    }
  }

  const columnComponentExtraProps = {
    Text: (baseProps: any) => {
      return {
        className: `${baseProps.className} text-gray-900 dark:text-gray-50`
      }
    },
    Primary: (baseProps: any) => {
      imagePosPrimary = getNewPos(imagePosPrimary, baseProps.imagePosition)
      return {
        imagePosition: imagePosPrimary
      }
    },
    Secondary: (baseProps: any) => {
      imagePosSecondary = getNewPos(imagePosSecondary, baseProps.imagePosition)
      return {
        imagePosition: imagePosSecondary
      }
    },
    Tertiary: (baseProps: any) => {
      imagePosTertiary = getNewPos(imagePosTertiary, baseProps.imagePosition)
      return {
        imagePosition: imagePosTertiary
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
              columnClasses='flex flex-col space-y-8 h-full'
              templatesContent={templatesContent}
            />
          )
        }
      </div>
    </div>
  )
}
