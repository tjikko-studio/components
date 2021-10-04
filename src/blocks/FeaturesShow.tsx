import React, {FC, HTMLAttributes} from 'react'

export type FeaturesShowProps = HTMLAttributes<HTMLDivElement>

export const FeaturesShow: FC<FeaturesShowProps> = () => {
  return (
    <div>
      <h2 className="fontStyle-5xl">Features Show</h2>
    </div>
  )
}
