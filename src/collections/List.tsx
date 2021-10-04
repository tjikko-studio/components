import React, {FC} from 'react'

export interface ListProps<ItemType extends FC = FC> {
  items: ItemType[]
  component: (item: ItemType) => React.ReactNode
}

export const List: FC<ListProps> = ({component, items = []}) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      {items.map((itemProps) => {
        return <div key={JSON.stringify(itemProps)}>{component(itemProps)}</div>
      })}
    </div>
  )
}
