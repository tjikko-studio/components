import React, {FC, HTMLAttributes} from 'react'

export interface CollectionProps extends HTMLAttributes<HTMLDivElement> {
  items: any[]
}

export const Collection: FC<CollectionProps> = ({items} = {items: []}) => {
  const finalItems = items || []
  // return <pre>{JSON.stringify(finalItems, null, 2)}</pre>
  return <p>Coming Soon</p>
}
