import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import getComponent from '../../utilities/getComponent'

import {BlockProps, ColumnProps} from '../../shared/types'

export interface ArticleProps extends HTMLAttributes<HTMLElement> {
  /**
   * Article object that will be parsed through to build the component
   */
  content?: BlockProps[]
  templatesContent?: Record<string, ColumnProps>

  className?: string
}

const classes = [
  'text-gray-900',
  'dark:text-gray-50',
  'grid',
  'gap-y-4',
  'sm:gap-y-8',
  'py-4',
  'sm:py-8',
  'w-full',
  'h-full',
  'max-w-screen-xl',
  'mx-auto'
]

export const Article: FC<ArticleProps> = ({content = [], templatesContent = {}, className}) => {
  const toComponent = getComponent(templatesContent)

  return (
    <article className={cn(classes)}>
      {content.length ? (
        content.map((block) => {
          return (
            <section
              key={JSON.stringify(block.content)}
              className={cn(block.type !== 'Gallery' && 'xs:w-screen-xs sm:w-screen-sm lg:w-screen-lg mx-auto')}
            >
              {toComponent(block)}
            </section>
          )
        })
      ) : (
        <div>No content yet</div>
      )}
    </article>
  )
}
