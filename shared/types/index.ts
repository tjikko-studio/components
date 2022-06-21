export type ContentType = any

export interface MediaProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'image' | 'video'
  id?: string
  link?: string
  url?: string
  alt?: string
  extension?: string
  dimensions?: {
    width: number
    height: number
    ratio: number
    orientation: string
  }
  content?: {
    alt?: string
    caption?: string
    creator?: string
    license?: string
    link?: string
  }
  info?: string
  className?: string
  ratio?: string
  fit?: boolean
  mediaClasses?: string
}

export type ImageProps = MediaProps

export interface BlockProps {
  id: string
  type: string
  content: ContentType
}

export interface ColumnProps {
  width: string
  blocks: BlockProps[]
  id: string
}

export type ContentAlignment = 'left' | 'center' | 'right'

export type ContentPosition =
  | 'top|left'
  | 'top|center'
  | 'top|right'
  | 'center|left'
  | 'center|center'
  | 'center|right'
  | 'bottom|left'
  | 'bottom|center'
  | 'bottom|right'

export interface MenuItem {
  label: string
  link: LinkObject
  type?: 'default' | 'header' | 'button'
}

export interface MenuType {
  label: string
  link?: LinkObject
  content: MenuItem[]
  image?: ImageProps
  data_source?: string
}

export interface MenuItemType {
  label: string
  image?: ImageProps
  link: LinkObject
  type: string
  content?: MenuType[] & MenuType
  id: string
}

export interface LinkObject {
  type: string
  popup: boolean
  value: string | {url: string}[]
}

export type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | ''

export interface AttrProps {
  full_height?: boolean
  row_justify_content?: JustifyContent
  col_justify_content?: JustifyContent
  className?: string
}

export type ComponentsExtraProps<P = Record<string, unknown>, T = Record<string, unknown>> = Record<string, (props: P) => T>

export interface LocalesType {
  current?: string | null
  content?: MenuType[]
}

export interface CategoriesItems {
  label: string
  slug: string
}
export type CategoriesType = Record<string, CategoriesItems[]>

export interface CollectionItem {
  id: string
  url: string
  title?: string
  description?: string
  images?: ImageProps[]
  video?: ImageProps[]
  category?: string
  filteredOut?: boolean
  link_cta?: string
  bgColor?: string
  hasBackground?: boolean
  isElevated?: boolean
  layout?: string
  imagePosition?: string
}
export type CollectionsType = Record<string, CollectionItem[]>

export interface TagItem {
  id: string
  url: string
  title?: string
  description?: string
  filteredOut?: boolean
}
export type TagsType = Record<string, TagItem[]>
