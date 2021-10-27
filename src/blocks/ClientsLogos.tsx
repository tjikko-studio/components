import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

export interface ClientProps {
  image: {
    url: string
  }
  company: string
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
export const ClientsLogos: FC<ClientsLogosProps> = ({size = 'default', content = []}) => {
  let wrapperClass = ['flex flex-wrap justify-center']
  let logoClass = ['w-auto']

  if (size === 'default') {
    wrapperClass.push('gap-12 sm:gap-14 lg:gap-16')
    logoClass.push('h-6 sm:h-7 md:h-8 lg:h-9')
  } else {
    wrapperClass.push('gap-10 sm:gap-12 lg:gap-14')
    logoClass.push('h-5 sm:h-6 md:h-7 lg:h-8')
  }

  return (
    <section>
      <div className={cn(wrapperClass)}>
        {content.map(({image, company}) => {
          return (
            <div key={company} className={cn(['flex justify-center flex-grow-0 flex-shrink-0'])}>
              <img className={cn(logoClass)} src={image.url} alt={company} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
