import React, {FC, HTMLAttributes} from 'react'
// import Marquee from 'react-fast-marquee'

export interface ClientProps {
  image: {
    url: string
  },
  company: string,
}
export interface ClientsLogosProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The size and spacing of the logos
   * (Dev note: Maybe should we get rid of this to encourage consistency )
   */
  size?: 'default' | 'compact'

  /**
   * Clients logos object that will be parsed through to build the component
   */
  content?: ClientProps[]
}

/**
 * Primary UI component for user interaction
 */
export const ClientsLogos: FC<ClientsLogosProps> = ({
  size = 'default',
  content = []
}) => {
  return (
    <div>
    {/* <Marquee gradientWidth='0'> */}
      <div className={`flex flex-nowrap w-max  space-x-14 lg:space-x-32 md:space-x-16`}>
        {content.map(({image, company}) => {
          return (
            <div
              key={company}
              className={size === 'default' ? 'h-14 lg:h-24 md:h-20' : 'h-14 lg:h-16 md:h-12'}
            >
              <img className='w-auto h-full' src={image.url} />
            </div>
          )
        })
        }
      </div>
    {/* </Marquee> */}
    </div>
  )
}
