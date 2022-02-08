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
}

const classes = [
  'grid',
  'text-gray-900',
  'w-full',
  'h-full',
  'max-w-screen-xl',
  'xl:mx-auto',
  'px-4',
  'sm:px-8',
  'md:px-12',
  'xl:px-0',
  'py-12',
  'sm:py-16',
  'md:py-24',
  'gap-8'
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
              className={cn(block.type !== 'Gallery' && 'sm:w-screen-sm lg:w-screen-md xl:mx-auto')}
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
