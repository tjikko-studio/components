// eslint-disable-next-line no-use-before-define
import React, {FC, HTMLAttributes} from 'react'

export type FeaturesShowProps = HTMLAttributes<HTMLDivElement>

export const FeaturesShow: FC<FeaturesShowProps> = (props) => {
  return (
    <div>
      <h2 className='fontStyle-5xl'>Features Show</h2>
    </div>
  )
}
