export type ContentType = any;

export interface BlockProps {
    type: string
    content: ContentType
}

export interface ColumnProps {
    width: string
    blocks: BlockProps[]
    id: string
}

export type ContentPosition = 'top|left' |
  'top|center' |
  'top|right' |
  'center|left' |
  'center|center' |
  'center|right' |
  'bottom|left' |
  'bottom|center' |
  'bottom|right'

export interface MenuItem {
  label: string
  link: string
  type?: 'default' | 'header' | 'button'
}

export interface MenuType {
  label: string
  link?: string
  content: MenuItem[]
}

export interface MenuItemType {
  label: string
  link: string
  type: string
  content?: MenuType[]
  dataSource?: string
  id: string
}


export type ComponentsExtraProps<
  P = Record<string, unknown>,
  T = Record<string, unknown>
> = Record<string, (props: P) => T>;
