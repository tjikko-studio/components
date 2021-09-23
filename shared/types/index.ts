
export interface BlockProps {
    type: string
    content: any
}

export interface ColumnProps {
    width: string
    blocks: BlockProps[]
    id: string
}

export type ContentPosition = 'center|center' | 'bottom|left'

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
