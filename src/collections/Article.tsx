import React, {FC, HTMLAttributes} from 'react'

import getComponent from '../../utilities/getComponent'

import {ColumnProps} from '../../shared/types'

export interface ArticleProps extends HTMLAttributes<HTMLElement> {

  /**
   * Article object that will be parsed through to build the component
   */
  content?: []
  templatesContent?: Record<string, ColumnProps>

  className?: string
}

export const Article: FC<ArticleProps> = ({content = [], templatesContent = {}, className}) => {
  const toComponent = getComponent(templatesContent)

  return (
    <article>
      {content.length >= 1 ? (
        content.map((block) => {
          return toComponent(block, {})
        })
      ) : (
        <div>No content yet</div>
      )}
    </article>
  )
}
