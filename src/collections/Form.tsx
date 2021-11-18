import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import extractCombo from '../../utilities/extractCombo'
import getComponent from '../../utilities/getComponent'

import {ColumnProps} from '../../shared/types'

export interface FormItemProps {
  columns: ColumnProps[]
}

export interface FormProps extends HTMLAttributes<HTMLElement> {
  /**
   * Form object that will be parsed through to build the component
   */
  content?: FormItemProps[]
  templatesContent?: Record<string, ColumnProps>
}

export const Form: FC<FormProps> = ({content = [], templatesContent = {}}) => {
  const toComponent = getComponent(templatesContent)
  const PlaceholderContent = () => {
    return <div>No content yet</div>
  }
  return (
    <form className="grid gap-6">
      {content.length >= 1 ? (
        content.map(({columns}) => {
          let lastIndex = 0
          return (
            <section
              key={JSON.stringify(columns)}
              className={'sm:grid sm:gap-x-6'}
              style={{
                gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
                gridTemplateRows: 'repeat(4, minmax(0, auto))',
                gridTemplateAreas: `
  "  label-0   label-1   label-2   label-3   label-4   label-5   label-6   label-7   label-8   label-9   label-10   label-11"
  "control-0 control-1 control-2 control-3 control-4 control-5 control-6 control-7 control-8 control-9 control-10 control-11"
  "   info-0    info-1    info-2    info-3    info-4    info-5    info-6    info-7    info-8    info-9    info-10    info-11"
  "  error-0   error-1   error-2   error-3   error-4   error-5   error-6   error-7   error-8   error-9   error-10   error-11"
                `
              }}
            >
              {columns[0].blocks.length >= 1 ? (
                columns.reduce((acc, column, columnStart) => {
                  const [length, total] = extractCombo(column.width, '/')
                  const columnWidth = (Number(length) / Number(total)) * 12
                  const columnEnd = columnStart + lastIndex - 1 + columnWidth
                  columnStart += lastIndex
                  const newAcc = acc.concat(
                    column.blocks.map((block) => {
                      return toComponent(block, {
                        Input: (baseProps) => {
                          return {
                            className: cn(baseProps.className, 'w-full'),
                            columnStart,
                            columnEnd
                          }
                        },
                        TextArea: (baseProps) => {
                          return {
                            className: cn(baseProps.className, 'w-full'),
                            columnStart,
                            columnEnd
                          }
                        },
                        ButtonsGroup: (baseProps) => {
                          return {
                            className: cn(baseProps.className, 'w-full'),
                            columnStart,
                            columnEnd
                          }
                        }
                      })
                    })
                  )
                  lastIndex += columnWidth - 1
                  return newAcc
                }, [])
              ) : (
                <PlaceholderContent />
              )}
            </section>
          )
        })
      ) : (
        <PlaceholderContent />
      )}
    </form>
  )
}
