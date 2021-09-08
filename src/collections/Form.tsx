import React, { FC, HTMLAttributes } from 'react'
import getComponent from '../../utilities/getComponent'
import getWidth from '../../utilities/getWidth'
import { ColumnProps } from '../../shared/types'

export interface FormItemProps {
  columns: ColumnProps[]
}
export interface FormProps extends HTMLAttributes<HTMLElement> {
  /**
   * What is the width of the form?
   */
  width?: 'string'

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
      content.map(({columns}) => {
        const nbColumns = columns.length
        const colWidth = getWidth(`1/${nbColumns}`)
        return (
          <section
            key={JSON.stringify(columns)}
            className={'sm:grid sm:gap-4'}
            style={{
              gridTemplateColumns: 'repeat(12, minmax(0, auto))',
              gridTemplateRows: 'repeat(4, minmax(0, auto))',
              gridTemplateAreas: `
                "  label-0   label-1   label-2   label-3   label-4   label-5   label-6   label-7   label-8   label-9   label-10   label-11"
                "control-0 control-1 control-2 control-3 control-4 control-5 control-6 control-7 control-8 control-9 control-10 control-11"
                "   info-0    info-1    info-2    info-3    info-4    info-5    info-6    info-7    info-8    info-9    info-10    info-11"
                "  error-0   error-1   error-2   error-3   error-4   error-5   error-6   error-7   error-8   error-9   error-10   error-11"
              `
            }}
          >{
            columns.reduce((acc, column, columnIndex) => {
              acc = acc.concat(column.blocks.map((block) => {
                return getComponent(block, {
                  Input: (baseProps:any) => {
                    return {
                      className: `${baseProps.className} w-full`,
                      columnIndex
                    }
                  },
                  TextArea: (baseProps: any) => {
                    return {
                      className: `${baseProps.className} w-full`,
                      columnIndex
                    }
                  },
                  ButtonsGroup: (baseProps: any) => {
                    return {
                      className: `${baseProps.className} w-full`,
                      columnIndex
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
