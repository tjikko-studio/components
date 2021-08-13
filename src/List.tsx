import React, {FC} from 'react'

export interface ListProps<ItemType extends FC> {
  items: ItemType[]
  Component: (item: ItemType) => React.ReactNode
}

export const List: FC<ListProps<any>> = ({ items, Component}) => {
  return (
    <>
      {items.map((itemProps) => {
        return (
          <div key={JSON.stringify(itemProps)}>{Component(itemProps)}</div>
        )
      })}
    </>
  )
}
