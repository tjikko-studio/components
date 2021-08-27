import React, {FC} from 'react'

export interface ListProps<ItemType extends FC> {
  items: ItemType[]
  Component: (item: ItemType) => React.ReactNode
}

export const List: FC<ListProps<any>> = ({
  Component,
  items = [],
}) => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      {items.map((itemProps) => {
        return (
          <div key={JSON.stringify(itemProps)}>{Component(itemProps)}</div>
        )
      })}
    </div>
  )
}
