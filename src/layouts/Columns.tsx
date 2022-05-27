import React, {Fragment} from 'react'

import getComponent from '../../utilities/getComponent'

import {ColumnProps, ComponentsExtraProps} from '../../shared/types'

export interface ColumnsBlockProps {
  columns: ColumnProps[]
  templatesContent?: Record<string, ColumnProps>
  locale?: string
  extraProps?: ComponentsExtraProps
}

export const Columns = ({columns, templatesContent = {}, locale, extraProps}: ColumnsBlockProps) => {
  if (!columns.length) {
    return null
  }

  const toComponent = getComponent(templatesContent, locale)
  return (
    <>
      {columns.map(({blocks, id}) => {
        if (!blocks.length) {
          return null
        }
        return (
          <Fragment key={id}>
            {blocks.map((block) => {
              return toComponent(block, extraProps)
            })}
          </Fragment>
        )
      })}
    </>
  )
}
