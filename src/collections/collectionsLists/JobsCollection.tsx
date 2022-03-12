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
  tags: JobsItemTag[]
}

export interface JobsCollectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * items
   */
  jobs?: JobItem[]
  tags?: JobsTags[]

  /**
   * Buttons Text
   */
  apply_cta?: string
  show_all?: string
}

export const JobsCollection = ({jobs = null, tags = null, apply_cta = 'Apply now', show_all = 'All'}: JobsCollectionProps) => {
  const [filterContent, setFilterContent] = useState(null)
  const applyCta = apply_cta ? apply_cta : 'Apply now'
  const showAll = show_all ? show_all : 'All'

  let availableNav: string[] = []
  let navigation: {label: string; available: boolean}[] = null

  if (jobs) {
    jobs.forEach((job: JobItem) => {
      job.tags.forEach((tag: JobsItemTag) => {
        if (tag.id === 'department') {
          job.filter = tag.value
          availableNav.push(tag.value)
        }
      })
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
      <header>
        <nav>
          <ul className={cn(navClasses)}>
            <li
              onClick={() => {
                setFilterContent(null)
              }}
              className={cn(navItemsClasses)}
            >
              <PopUpNavItem key={JSON.stringify(tags)} label={showAll} isActive={!filterContent} />
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
      <div>
        {jobs ? (
          jobs.map((job) => {
            const display = !filterContent || (filterContent && filterContent === job.filter) ? 'block' : 'hidden'
            return (
              <div
                key={`${JSON.stringify([job.title, job.tags])}`}
                className={cn(['flex justify-between align-baseline border-b py-6', display])}
              >
                <div>
                  <Heading level="h4" text={job.title} className="fontStyle-xl sm:fontStyle-2xl" />
                  <div className="flex gap-2 mt-2 flex-col sm:flex-row fontStyle-sm text-gray-600">
                    {job.tags.length
                      ? job.tags.map((tag) => {
                          return tag.value ? <div key={`${job.title}[${tag.value}]`}>{tag.value}</div> : null
                        })
                      : null}
                  </div>
                </div>
                <Button label={applyCta} link={{type: 'link', value: job.link, popup: false}} />
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
