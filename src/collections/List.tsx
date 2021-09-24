// eslint-disable-next-line no-use-before-define
import React, {FC} from 'react'

export interface ListProps<ItemType extends FC> {
  items: ItemType[]
  component: (item: ItemType) => React.ReactNode
}

export const List: FC<ListProps<any>> = ({
  component,
  items = []
}) => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      {items.map((itemProps) => {
        return (
          <div key={JSON.stringify(itemProps)}>{component(itemProps)}</div>
        )
      })}
    </div>
  )
}
