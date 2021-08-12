import React, { FC, HTMLAttributes } from 'react'
import Marquee from 'react-fast-marquee'

export interface ClientsLogosProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The size and spacing of the logos 
   * (Dev note: Maybe should we get rid of this  to favorise consistency )
   */
  size?: 'default' | 'compact'
  
  /**
   * Buttons object that will be parsed through to build the component
   */
  content?: {}
}

/**
 * Primary UI component for user interaction
 */
export const ClientsLogos: FC<ClientsLogosProps> = ({
  size = 'default',
  content
}) => {
  
  {/* <Marquee gradientWidth='0' > */}
  return (
      <div className={`flex flex-nowrap w-max  space-x-14 lg:space-x-32 md:space-x-16`}>
        { content.map((company, id) => {
          return (
            <div
              key={id}
              className={size === 'Default' ? 'h-14 lg:h-24 md:h-20' : 'h-14 lg:h-16 md:h-12'}
            >
              {(company.image.url) &&
                <img className='w-auto h-full' src={company.image.url ? company.image.url : `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`}/>
              }
            </div>
          )
          })
        }
      </div>
  )
  {/* </Marquee> */}
}
