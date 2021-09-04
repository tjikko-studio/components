import React, { FC, HTMLAttributes } from 'react'
import getComponent from '../../utilities/getComponent'
import getWidth from '../../utilities/getWidth'
import { ColumnProps } from './Section'

export interface FormItemProps {
  columns: ColumnProps[]
}
export interface FormProps extends HTMLAttributes<HTMLElement> {
  /**
   * What is the width of the form?
   */
  width ?: 'string'

  /**
   * Form object that will be parsed through to build the component
   */
  content?: FormItemProps[]
}

export const Form: FC<FormProps> = ({
  width = 'full',
  content = []
}) => {

  return (
    <form className='grid gap-4'>{
      content.map((hmm) => {
        const nbColumns = hmm.columns.length
        const colWidth = getWidth(`1/${nbColumns}`)
        console.log({nbColumns, colWidth, sectionKey: JSON.stringify(hmm.columns)})
        return (
          <section
            key={JSON.stringify(hmm.columns)}
            className={'sm:grid sm:gap-4 grid-areas-form grid-cols-form grid-rows-form'}
            style={{
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '1fr 1fr 1fr 1fr',
              gridTemplateAreas: `
                "  label-1   label-2"
                "control-1 control-2"
                "   info-1    info-2"
                "  error-1   error-2"
              `
            }}
          >{
            hmm.columns.reduce((acc, column, columnIndex) => {
              acc = acc.concat(column.blocks.map((block) => {
                return getComponent(block, {
                  Input: (baseProps:any) => {
                    return {
                      className: `${baseProps.className} w-full sm:grid-in-control-${columnIndex}`,
                      columnIndex,
                      style: {
                        gridArea: `control-${columnIndex}`
                      }
                    }
                  },
                  TextArea: (baseProps: any) => {
                    return {
                      className: `${baseProps.className} w-full sm:grid-in-control-${columnIndex}`,
                      columnIndex,
                      style: {
                        gridArea: `control-${columnIndex}`
                      }
                    }
                  },
                  ButtonsGroup: (baseProps: any) => {
                    return {
                      className: `${baseProps.className} w-full sm:grid-in-control-${columnIndex}`,
                      columnIndex,
                      style: {
                        gridArea: `control-${columnIndex}`
                      }
                    }
                  }
                })
              }))
              return acc
            }, [])
          }</section>
        )
      })
    }</form>
  )
}
