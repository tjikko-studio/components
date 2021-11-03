import React, {FC, HTMLAttributes, useMemo} from 'react'

import {Gallery} from '../blocks/Gallery'
import {Heading} from '../blocks/Heading'
import {Tertiary} from '../blocks/Tertiary'
import {Button} from '../Button'
import {SideNav, SideNavItemProps} from '../nav/SideNav'
import {ImageProps, Media} from '../parts/Media'

type CollectionItem = {
  id: string
  url: string
  content: {
    title: string
    description: string
    category: string
    images: ImageProps[]
    video?: ImageProps[]
  }
}

export interface CollectionProps extends HTMLAttributes<HTMLDivElement> {
  items?: CollectionItem[]
  datasource?: 'success-stories' | 'portfolio'
  navItems?: SideNavItemProps[]
}

const SuccessStoriesCollection: FC<CollectionProps> = ({items} = {items: []}) => {
  return (
    <div className="grid gap-8 px-4 py-8 sm:grid-cols-2 sm:gap-8 sm:p-8">
      {items?.map((item) => (
<<<<<<< HEAD
        <div key={item.id} id={item.content.category}>
          <Tertiary image={item.content.images[0]} imagePosition="right" title={item.content.title} body={item.content.description} />
        </div>
=======
        <Tertiary
          key={item.id}
          image={item.content.images?.[0]}
          imagePosition="right"
          title={item.content.title}
          body={item.content.description}
        />
>>>>>>> main
      ))}
    </div>
  )
}

const PortfolioCollection: FC<CollectionProps> = ({items}) => {
  return (
    <div className="flex flex-wrap gap-16 px-4 py-12 sm:gap-8 sm:p-8 lg:m-8">
      {items?.map((item) => (
        <div key={item.id} id={item.content.category} className="flex flex-col w-full lg:p-8 jus">
          <div className="lg:flex lg:gap-x-4">
            <div className="flex flex-col lg:w-1/2">
              <Heading text={item.content.title} className="pb-4" />
              <p className="pb-4 text-left">{item.content.description}</p>
            </div>

            <div className="lg:w-1/2">
              <Gallery images={item.content.images} mobileColumns={true} />
            </div>
          </div>

          {item.content.video?.[0] && <Media media={item.content.video[0]} className="w-full rounded-xl" wrapperClassName="w-full" />}

          <Button className="mt-4 w-fit" type="tertiary" link={item.url} label={`Read about ${item.content.title}`} />
        </div>
      ))}
    </div>
  )
}

const mapNavItems = (items: CollectionItem[], navItems: any[]): SideNavItemProps[] => {
  return navItems
    ?.flatMap((navItem) => {
      const hasChildren = navItem.children?.length > 0
      const childNavItems = mapNavItems(items, navItem.children)
      const id = hasChildren ? navItem.children[0].content.autoid : navItem.content.autoid

      return (hasChildren && childNavItems?.length > 0) || items.some((item) => item.content.category === id)
        ? [
            {
              type: hasChildren ? 'header' : 'link',
              status: 'default',
              text: `${navItem.content.title}`,
              link: `#${id}`
            },
            ...childNavItems
          ]
        : []
    })
    .filter(Boolean)
}

export const Collection: FC<CollectionProps> = ({items, datasource, navItems} = {items: []}) => {
  const sideNavItems = useMemo(() => mapNavItems(items, navItems), [items, navItems])
  const Component = datasource === 'success-stories' ? SuccessStoriesCollection : datasource === 'portfolio' ? PortfolioCollection : null
  console.log(sideNavItems)
  if (Component) {
    return (
      <div className="flex">
        {sideNavItems && sideNavItems.length > 0 && (
          <div className="sticky z-10 top-24">
            <SideNav items={sideNavItems} />
          </div>
        )}
        <Component items={items} />
      </div>
    )
  }

  return null
}
