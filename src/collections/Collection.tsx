import React, {FC, HTMLAttributes} from 'react'

export interface CollectionProps extends HTMLAttributes<HTMLDivElement> {
  dataSource: string
}

export const Collection: FC<CollectionProps> = ({dataSource}) => {
  return <p>Collection. Data source: {dataSource}</p>
}
