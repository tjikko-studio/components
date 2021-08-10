import React, { FC, HTMLAttributes } from 'react'
import Marquee from 'react-fast-marquee'

export interface ClientsLogosProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * speech to display on ClientsLogos
   */
  content?: {}
  /**
   * Size : 'Default' | 'Compact'
   */
  size?: 'Default' | 'Compact'
}

/**
 * Primary UI component for user interaction
 */
export const ClientsLogos: FC<ClientsLogosProps> = ({
  content,
  size,
}) => {
  
  {/* <Marquee gradientWidth='0' > */}
  return (
      <div className={`flex flex-nowrap w-max  space-x-14 lg:space-x-32 md:space-x-16`}>
        { content.map((company, id) => {
          let image = company.image[0]
          return (
            <div
              key={id}
              className={size === 'Default' ? 'h-14 lg:h-24 md:h-20' : 'h-14 lg:h-16 md:h-12'}
            >
              {(image.url) &&
                <img className='w-auto h-full' src={image.url ? image.url : `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`}/>
              }
            </div>
          )
          })
        }
      </div>
  )
  {/* </Marquee> */}
}
