
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
  datas?: string
  content: MenuItem[]
}

export interface MenuItemType {
  label: string
  link: string
  type: string

  /*
    Catherine: Because of the case 'NavigationDynamicList' which the content does not have the same structure as MenuType (datas)),
    I am using an any type which is not ideal I know, but i don't know how to solve this…
   */
  content?: MenuType[]
  id: string
}
