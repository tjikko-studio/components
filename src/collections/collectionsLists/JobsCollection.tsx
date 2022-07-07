import React, {HTMLAttributes, useState} from 'react'
import cn from 'classnames'

import {Heading} from '../../blocks/Heading'
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
  apply_cta?: string
  tags?: JobsItemTag[]
}

export interface JobsCollectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * items
   */
  jobs?: JobItem[]
  tags?: JobsTags[]

  filterable?: boolean

  /**
   * Buttons Text
   */
  apply_cta?: string
  show_all?: string
}

export const JobsCollection = ({
  jobs = null,
  tags = null,
  filterable = false,
  apply_cta = 'Apply',
  show_all = 'All'
}: JobsCollectionProps) => {
  const [filterContent, setFilterContent] = useState(null)

  let availableNav: string[] = []
  let navigation: {label: string; available: boolean}[] = null

  if (jobs) {
    jobs.forEach((job: JobItem) => {
      if (job.tags) {
        job.tags.forEach((tag: JobsItemTag) => {
          if (tag.id === 'department') {
            job.filter = tag.value
            availableNav.push(tag.value)
          }
        })
      }
    })
  }

  if (tags) {
    // FIXME : this is full of anti-patterns!
    tags.map((tag: JobsTags) => {
      if (tag.id === 'department') {
        navigation = tag.children.map((tag: JobsTags) => {
          return {
            label: tag.label,
            available: availableNav.includes(tag.label)
          }
        })
      }
      return null
    })
  }

  const sectionClasses = ['grid gap-y-12 w-full', 'text-gray-900']
  const navClasses = ['flex justify-center gap-x-4 gap-y-1.5 sm:gap-x-6 lg:gap-x-8 flex-wrap']
  const navItemsClasses = ['flex justify-center flex-grow-0 flex-shrink-0']

  return (
    <div className={cn(sectionClasses)}>
      {filterable && (
        <header>
          <nav>
            <ul className={cn(navClasses)}>
              <li
                onClick={() => {
                  setFilterContent(null)
                }}
                className={cn(navItemsClasses)}
              >
                <PopUpNavItem key={JSON.stringify(tags)} label={show_all} isActive={!filterContent} />
              </li>
              {navigation
                ? navigation.map((item) => {
                    return item.available ? (
                      <li
                        key={item.label}
                        onClick={() => {
                          setFilterContent(item.label)
                        }}
                        className={cn(navItemsClasses)}
                      >
                        <PopUpNavItem label={item.label} isActive={filterContent === item.label} />
                      </li>
                    ) : null
                  })
                : null}
            </ul>
          </nav>
        </header>
      )}
      <div>
        {jobs && jobs.length > 0 ? (
          jobs.map((job) => {
            const display = !filterContent || (filterContent && filterContent === job.filter) ? 'block' : 'hidden'
            return (
              <div
                key={`${JSON.stringify([job.title, job.tags])}`}
                className={cn(['flex justify-between align-baseline border-b py-6', display])}
              >
                <div>
                  <Heading heading_text={job.title} heading_level="h3" heading_size="h4" className="fontStyle-xl sm:fontStyle-2xl" />
                  <div className="flex gap-2 mt-2 flex-col sm:flex-row fontStyle-sm text-gray-600">
                    {job.tags.length
                      ? job.tags.map((tag) => {
                          return tag.value ? <div key={`${job.title}[${tag.value}]`}>{tag.value}</div> : null
                        })
                      : null}
                  </div>
                </div>
                <Button label={job.apply_cta} link={{type: 'link', value: job.link, popup: false}} />
              </div>
            )
          })
        ) : (
          <div>No job at the moment</div>
        )}
      </div>
    </div>
  )
}
