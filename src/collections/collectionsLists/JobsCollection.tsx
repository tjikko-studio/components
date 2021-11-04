import React, {FC, HTMLAttributes, useState} from 'react'
import cn from 'classnames'

import {Button} from '../../Button'
import {PopUpNavItem} from '../../nav/PopUpNavItem'

export interface JobsTags {
  id?: string
  label?: string
  children?: JobsTags[]
}

export interface JobsItemTag {
  id?: string
  label?: string
  value?: string
}

export interface JobItem {
  title?: string
  published?: string
  link?: string
  filter?: string
  tags: JobsItemTag[]
}

export interface JobsCollectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * items
   */
  content: {
    items?: JobItem[]
    tags?: JobsTags[]
  }

  /**
   * className override
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const JobsCollection: FC<JobsCollectionProps> = ({content = {items: null, tags: null}, className}) => {
  const [filterContent, setFilterContent] = useState(null)

  let availableNav: string[] = []
  let navigation: {label: string; available: boolean}[] = null

  if (content?.items) {
    content.items.forEach((job: JobItem) => {
      job.tags.forEach((tag: JobsItemTag) => {
        if (tag.id === 'department') {
          job.filter = tag.value
          availableNav.push(tag.value)
        }
      })
    })
  }

  if (content?.tags) {
    content.tags.map((tag: JobsTags) => {
      if (tag.id === 'department') {
        navigation = tag.children.map((tag: JobsTags) => {
          return {
            label: tag.label,
            available: availableNav.includes(tag.label)
          }
        })
      }
    })
  }

  const sectionClasses = [
    'text-gray-900 dark:text-gray-50 grid gap-y-12 w-full h-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 py-16 sm:py-24 md:py-32'
  ]
  const navClasses = ['w-full hidden grid-flow-col md:grid md:grid-cols-4 md:grid-rows-2 lg:grid-rows-none lg:grid-cols-none gap-x-10 list-none justify-center']
  const navItemsClasses = ['flex justify-center content-center text-center']

  return (
    <section>
      <div className={cn(sectionClasses)}>
        <header>
          <nav>
            <ul className={cn(navClasses)}>
              <li
                onClick={() => {
                  setFilterContent(null)
                }}
                className={cn(navItemsClasses)}
              >
                <PopUpNavItem key={JSON.stringify(content?.tags)} label="All" isActive={!filterContent} />
              </li>
              {navigation
                ? navigation.map((item) => {
                    return (
                      //item.available && (
                        <li
                          onClick={() => {
                            setFilterContent(item.label)
                          }}
                          className={navItemsClasses}
                        >
                          <PopUpNavItem key={`${item.label}`} label={item.label} isActive={filterContent === item.label} />
                        </li>
                      //)
                    )
                  })
                : null}
            </ul>
          </nav>
        </header>
        <div>
          {content.items ? (
            content.items.map((job) => {
              const display = !filterContent || (filterContent && filterContent === job.filter) ? 'block' : 'hidden'
              return (
                <div className={cn(['flex justify-between align-baseline border-b py-6', display])}>
                  <div className="">
                    <h4 className="fontStyle-xl md:fontStyle-2xl">{job.title}</h4>
                    <div className="flex gap-2 mt-3 flex-col sm:flex-row fontStyle-xs text-gray-600">
                      {job.tags.length
                        ? job.tags.map((tag) => {
                            return <div className="">{tag.value}</div>
                          })
                        : null}
                    </div>
                  </div>
                  <Button key={job.title} label="Apply now" link={job.link} />
                </div>
              )
            })
          ) : (
            <div>No job at the moment</div>
          )}
        </div>
      </div>
    </section>
  )
}
