import React, {FC, HTMLAttributes} from 'react'
import Marquee from 'react-fast-marquee'
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
  logosLayout?: 'grid' | 'banner'

  /**
   * Clients logos object that will be parsed through to build the component
   */
  content?: ClientProps[]
}

/**
 * Primary UI component for user interaction
 */
export const ClientsLogos: FC<ClientsLogosProps> = ({content = [], logosLayout = 'grid'}) => {
  logosLayout = logosLayout ? logosLayout : 'grid'

  let wrapperClass = ['flex justify-center gap-12 sm:gap-14 lg:gap-16']
  let logoClass = ['w-auto h-6 sm:h-7 md:h-8 lg:h-9']
  let layoutClass = ['flex justify-center']

  if (logosLayout === 'grid') {
    wrapperClass.push('flex-wrap')
    layoutClass.push('flex-grow-0 flex-shrink-0')
  } else if (logosLayout === 'banner') {
    wrapperClass.push('flex-nowrap w-max gap-14 mr-14 md:gap-16 md:mr-16 lg:gap-24 lg:mr-24')
  }

  const LogosList = () => {
    return (
      <>
        {content.map(({image, company}) => {
          return (
            <div key={company} className={cn(['flex justify-center flex-grow-0 flex-shrink-0'])}>
              <img className={cn(logoClass)} src={image.url} alt={company} />
            </div>
          )
        })}
      </>
    )
  }

  return (
    <section>
      {logosLayout === 'grid' ? (
        <div className={cn(wrapperClass)}>
          <LogosList />
        </div>
      ) : (
        logosLayout === 'banner' && (
          <div className="relative w-screen transform -translate-x-1/2 left-1/2">
            <Marquee gradientWidth="0" speed={96}>
              <div className={cn(wrapperClass)}>
                <LogosList />
              </div>
            </Marquee>
          </div>
        )
      )}
    </section>
  )
}
