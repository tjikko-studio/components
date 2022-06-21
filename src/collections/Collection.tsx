import React, {HTMLAttributes, RefObject, useCallback, useEffect, useMemo, useRef, useState} from 'react'
import cn from 'classnames'

import sizes from '../../styles/sizes'
import getComponent from '../../utilities/getComponent'
import lightOrDark from '../../utilities/lightOrDark'
import {CardImagePosition, CardLayout} from '../blocks/Card'
import {ButtonSize, ButtonType} from '../Button'
import {ContentColumns} from '../layouts/ContentColumns'
import {SectionItemProps} from '../layouts/ContentColumns'
import {SideNav} from '../nav/SideNav'
import {JobItem, JobsCollection} from './collectionsLists/JobsCollection'

import {BlockProps, CategoriesType, CollectionItem, CollectionsType, ColumnProps, TagsType} from '../../shared/types'

interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number
}

export interface CollectionProps extends BaseProps {
  header?: BlockProps[]
  templatesContent?: Record<string, ColumnProps>
  categories?: CategoriesType
  collections?: CollectionsType
  tags?: TagsType
  dataSource?: 'success-stories' | 'portfolio' | 'jobs'
  filterable?: boolean
  bgColor?: string
  cardHasBackground?: boolean
  cardBgColor?: string
  cardLayout?: CardLayout
  cardImagePosition?: CardImagePosition
  cardIsElevated?: boolean
  cardButtonType?: ButtonType
  cardButtonSize?: ButtonSize
  section?: RefObject<HTMLDivElement>
}

const resultsID = 'results'

function NonJobsCollection({
  header,
  templatesContent = {},
  categories = {},
  collections = {},
  dataSource,
  filterable = false,
  bgColor = 'transparent',
  cardHasBackground = false,
  cardBgColor,
  cardLayout = 'vertical',
  cardImagePosition = 'left',
  cardIsElevated = false,
  cardButtonSize = 'default',
  cardButtonType = 'secondary',
  section
}: CollectionProps = {}) {
  const prefix = `collection-${dataSource}-results`

  function addRow(rows: SectionItemProps[]) {
    rows.push({
      id: `${prefix}-row-${rows.length + 1}`,
      columns: []
    })
  }

  function addCol(rows: SectionItemProps[], rowIndex: number, items: BlockProps[], width: string) {
    const row = rows[rowIndex]

    row.columns.push({
      id: `${prefix}-row-${rowIndex + 1}-col-${row.columns.length + 1}`,
      width,
      blocks: items
    })
  }

  function makeSpacer(idx: number) {
    return {
      type: 'Text',
      id: `spacer-${idx}`,
      content: {}
    }
  }

  function fill(content: SectionItemProps[], nbCols: number) {
    if (content.length > 0) {
      while (content[content.length - 1].columns.length < nbCols) {
        addCol(content, content.length - 1, [makeSpacer(content.length - 1)], `1/${nbCols}`)
      }
    }
  }
  const [nbCols, setNbCols] = useState(3)

  useEffect(() => {
    const handler = () => {
      const width = window.innerWidth
      const lg = parseFloat(sizes.width['screen-lg'].replace('px', ''))
      const xl = parseFloat(sizes.width['screen-xl'].replace('px', ''))
      setNbCols(width < lg ? 1 : width < xl ? 2 : 3)
    }
    handler()
    window.addEventListener('resize', handler, false)
    return () => {
      window.removeEventListener('resize', handler, false)
    }
  }, [])
  const theme = !bgColor || bgColor === 'transparent' ? 'light' : lightOrDark(bgColor)
  const collectionItems = collections[dataSource]
  const items = useMemo(() => {
    const result = collectionItems
      ? Object.keys(collectionItems).map((id: any) => {
          return collectionItems[id]
        })
      : []
    return result
  }, [collectionItems])
  const [filtered, setFilteredItems] = useState({items: [...items], filter: null})

  const filterByCategory = useCallback(
    (categoryName?: string) => {
      setFilteredItems({
        items: categoryName
          ? items.reduce((all, item) => {
              if (item.category.toLowerCase().replace(' ', '-') === categoryName) {
                all.push(item)
              }
              return all
            }, []) || []
          : items || [],
        filter: categoryName
      })
    },
    [setFilteredItems, items]
  )

  const onFilter = (categoryId: string) => {
    if (categoryId === filtered.filter) {
      setFilteredItems({items: items, filter: null})
      window.history.replaceState(window.history.state, '', `${window.location.pathname}?#${resultsID}`)
    } else {
      filterByCategory(categoryId)
      window.history.replaceState(window.history.state, '', `${window.location.pathname}?category=${categoryId}#${resultsID}`)
    }
    if (section.current) {
      section.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    filterByCategory(new URLSearchParams(window.location.search).get('category'))
  }, [filterByCategory])

  const content = filtered.items.reduce((rows, item) => {
    const label = item.link_cta ? item.link_cta : 'Read about {title}'
    const theme = lightOrDark(cardBgColor)
    const card = {
      type: 'Card',
      id: item.id,
      content: {
        layout: cardLayout,
        imagePosition: cardImagePosition,
        title: item.title,
        body: item.description,
        image: item.video?.[0] ? item.video[0] : item.images?.[0],
        buttons: [
          {
            type: cardButtonType,
            size: cardButtonSize,
            link: {type: 'link', value: item.url, popup: false},
            label: label.replace('{title}', item.title),
            forceDark: theme === 'dark'
          }
        ],
        bgColor: cardBgColor,
        isElevated: cardIsElevated,
        hasBackground: cardHasBackground,
        fullHeight: true,
        allowRoundedCorners: true
      }
    }
    if (rows.length === 0) {
      addRow(rows)
    }
    const lastRowIndex = rows.length - 1
    const lastRow = rows[lastRowIndex]
    if (lastRow.columns.length < nbCols) {
      addCol(rows, lastRowIndex, [card], `1/${nbCols}`)
    } else {
      addRow(rows)
      addCol(rows, lastRowIndex + 1, [card], `1/${nbCols}`)
    }
    return rows
  }, [])
  fill(content, nbCols)
  return (
    <div className={cn('flex flex-col', 'sm:flex-row', 'gap-14', 'lg:gap-32', 'items-start')}>
      {filterable && Object.keys(categories).length > 0 ? (
        <div className="lg:sticky sm:top-8 lg:top-24 xl:top-32 shrink-0">
          <SideNav
            items={categories}
            onFilter={onFilter}
            currentFilter={filtered.filter}
            className="mb-16"
            classNames={
              theme === 'dark'
                ? {
                    sidebar: 'text-gray-300',
                    heading: 'border-gray-300',
                    item: 'border-gray-300 hover:text-primary-200 hover:border-primary-700',
                    target: 'text-primary-200 border-primary-700'
                  }
                : {
                    sidebar: 'text-gray-600',
                    heading: 'border-gray-800',
                    item: 'border-gray-800 hover:text-primary-700 hover:border-primary-600',
                    target: 'text-primary-700 border-primary-600'
                  }
            }
          />
        </div>
      ) : null}
      <div className="flex flex-col gap-y-14 w-full">
        <ContentColumns
          content={content}
          // contentPosition={contentPosition}
          // componentsExtraProps={componentsExtraProps}
          // contentSectionClasses={contentSectionClasses}
          // columnClasses={columnClasses}
          // templatesContent={templatesContent}
          // locale={locale}
          sectionHeadingId={`${dataSource}-results`}
          className="flex flex-col md:flex-row"
        />
      </div>
    </div>
  )
}

function Wrapper({
  section,
  bgColor,
  header,
  toComponent,
  children
}: {
  section?: RefObject<HTMLDivElement>
  bgColor?: string
  header?: BlockProps[]
  toComponent?: (component: BlockProps) => any
  children?: any
}) {
  return (
    <section
      ref={section}
      id={resultsID}
      className={cn('w-full', 'px-4', 'sm:px-8', 'md:px-12', 'xl:px-0', 'py-20', 'sm:py-28', 'md:py-36')}
      style={{
        backgroundColor: bgColor
      }}
    >
      <div className={'max-w-screen-xl mx-auto'}>
        {header.length ? (
          <header>
            {header.map((block) => {
              return <div key={block.id || JSON.stringify(block.content)}>{toComponent(block)}</div>
            })}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  )
}

export interface JobData extends JobItem {
  url?: string
  location?: string
  department?: string
  schedule?: string
  show_all?: string
}

export const Collection = ({
  header,
  templatesContent = {},
  categories = {},
  collections = {},
  tags = {},
  dataSource,
  filterable = false,
  bgColor = 'transparent',
  cardHasBackground = false,
  cardBgColor,
  cardLayout = 'vertical',
  cardImagePosition = 'left',
  cardIsElevated = false,
  cardButtonSize = 'default',
  cardButtonType = 'secondary'
}: CollectionProps = {}) => {
  const section = useRef(null)
  const toComponent = getComponent(templatesContent)
  if (dataSource === 'jobs') {
    const jobs: CollectionItem[] = collections[dataSource]
    const existingJobs = []
    let showAll = ''
    if (jobs) {
      for (const jobId in jobs) {
        const job: JobData = collections[dataSource][jobId]
        if (job) {
          existingJobs.push({
            title: job.title,
            published: job.published,
            link: job.link,
            filter: job.filter,
            apply_cta: job.apply_cta,
            tags: job.tags || [
              {
                value: job.location
              },
              {
                value: job.department
              },
              {
                value: job.schedule
              }
            ]
          })
          if (!showAll && job.show_all && job.show_all !== '') {
            showAll = job.show_all
          }
        }
      }
    }
    return (
      <Wrapper section={section} bgColor={bgColor} header={header} toComponent={toComponent}>
        <JobsCollection jobs={existingJobs} tags={[]} filterable={filterable} show_all={showAll} />
      </Wrapper>
    )
  }
  return (
    <Wrapper section={section} bgColor={bgColor} header={header} toComponent={toComponent}>
      <NonJobsCollection
        header={header}
        templatesContent={templatesContent}
        categories={categories}
        collections={collections}
        dataSource={dataSource}
        filterable={filterable}
        bgColor={bgColor}
        cardHasBackground={cardHasBackground}
        cardBgColor={cardBgColor}
        cardLayout={cardLayout}
        cardImagePosition={cardImagePosition}
        cardIsElevated={cardIsElevated}
        cardButtonSize={cardButtonSize}
        cardButtonType={cardButtonType}
        section={section}
      />
    </Wrapper>
  )
}
