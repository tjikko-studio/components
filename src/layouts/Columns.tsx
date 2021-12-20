import React, {FC, Fragment, ReactElement} from 'react'

import getComponent from '../../utilities/getComponent'

import {ColumnProps, ComponentsExtraProps} from '../../shared/types'

export interface ColumnsBlockProps {
  columns: ColumnProps[]
  templatesContent?: Record<string, ColumnProps>
  extraProps?: ComponentsExtraProps
}

export const Columns: FC<ColumnsBlockProps> = ({columns, templatesContent = {}, extraProps}): ReactElement => {
  if (!columns.length) {
    return null
  }

  const toComponent = getComponent(templatesContent)
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
