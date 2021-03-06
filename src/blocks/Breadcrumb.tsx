import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

export interface BreadcrumbType {
  name: string
  url: string
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Breadcrumb items list that will be parsed through to build the component
   */
  crumbs: BreadcrumbType[]
}

/**
 * Primary UI component for user interaction
 */
export const Breadcrumb = ({crumbs = [], className = ''}: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className={cn('dark:text-gray-50', className)}>
      <ul className="flex flex-wrap">
        {crumbs.map((item, index) => {
          return (
            <li key={item.name}>
              <span className={cn(['fontStyle-xl', 'uppercase', 'hover:text-primary-300', 'dark:hover:text-primary-300'])}>
                <a href={item.url}>{item.name}</a>
              </span>
              {crumbs.length - 1 > index && <span className="px-2.5">/</span>}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
