export type ContentType = any

export interface MediaProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'image' | 'video'
  id: string
  link: string
  url: string
  extension: string
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
  className?: string
  wrapperClassName?: string
  gallery?: boolean
}

export type ImageProps = MediaProps

export interface BlockProps {
  type: string
  content: ContentType
}

export interface ColumnProps {
  width: string
  blocks: BlockProps[]
  id: string
}

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
  link: string
  type?: 'default' | 'header' | 'button'
}

export interface MenuType {
  label: string
  link?: string
  content: MenuItem[]
  image?: ImageProps
  data_source?: string
}

export interface MenuItemType {
  label: string
  link: string
  type: string
  content?: MenuType[] & MenuType
  id: string
}

export type ComponentsExtraProps<P = Record<string, unknown>, T = Record<string, unknown>> = Record<string, (props: P) => T>
