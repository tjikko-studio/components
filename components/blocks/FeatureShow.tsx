import React, { FC, HTMLAttributes } from 'react'

export interface FeatureShowProps extends HTMLAttributes<HTMLDivElement> {

}

export const FeatureShow: FC<FeatureShowProps> = (props) => {
  return (
    <div>
      <h2 className='fontStyle-5xl'>Features Show</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
