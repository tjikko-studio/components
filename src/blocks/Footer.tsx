import React, {FC, HTMLAttributes} from 'react'
import CompanyLogo from '/assets/images/company_logo_placeholder.svg'

export interface FooterMenuItem {
  name: string
  url: string
}

export interface FooterDataType {
  caption: string
  menuList: FooterMenuItem[]
}

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /**
   * Footer object that will be parsed through to build the component
   */
  footerMenu?: FooterDataType[]
  
  /**
   * year to show on bottom
   */
  year?: string
  
  /**
   * privacy policy text
   */
  privacy?: string
}

/**
 * Primary UI component for user interaction
 */
export const Footer: FC<FooterProps> = ({
  year = '',
  privacy = '',
  footerMenu = []
}) => {

  return (
    <footer
      className='bg-gray-800'
    >
      <div
        className='pl-6 pt-6 lg:pt-9 md:pt-9 pb-6 lg:pb-7 md:pb-7'
      >
        <CompanyLogo width='210' height='16' className='text-gray-50' />
      </div>
      <hr
        className='mx-6 bg-opacity-30 border-gray-500'
      />
      <nav
        className='px-6 pt-8 lg:flex md:grid md:grid-cols-2'
      >
        {
          footerMenu.map((menu, menuIndex) => {
            return (
              <ul
                key={menuIndex}
                className={`flex-1 pb-12 lg:mb-0`}
              >
                <li
                  className='fontStyle-xs uppercase text-gray-300'
                >
                  {menu.caption}
                </li>
                {
                  menu.menuList.map((menuItem, itemIndex) => {
                    return (
                      <li
                        key={itemIndex}
                        className='fontStyle-sm text-gray-50 hover:text-primary-300 pt-3'
                      >
                        <a
                          href={menuItem.url}
                        >
                          {
                            menuItem.name
                          }
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            )
          })
        }
      </nav>
      <nav
        className="fontStyle-sm text-gray-50 flex flex-col-reverse md:flex-row pt-32 lg:pt-8 md:pt-3 px-6 pb-6 md:pb-4 lg:pb-6"
      >
        <div className='flex flex-1 flex-row-reverse md:flex-row pt-4 md:pt-0'>
          <div className='flex-1 flex justify-end md:justify-start'><span>© {year ? year : new Date().getFullYear()}</span></div>
          <ul className='flex flex-1 space-x-2'>
            <li>
              <a href='#' className="text-gray-50 hover:text-primary-300">
                {privacy ? privacy : "Privacy"}
              </a>
            </li>
            <li>-</li>
            <li>
              <a href='#' className="text-gray-50 hover:text-primary-300">
                {privacy ? privacy : "Terms"}
              </a>
            </li>
          </ul>
        </div>
        <div className='flex-1'></div>
        <ul
          className='flex flex-1 md:-ml-20 space-x-2'
        >
          <li>
            <a className='text-gray-50 hover:text-primary-300' href=''>
              Facebook
            </a>
          </li>
          <li>-</li>
          <li>
            <a className='text-gray-50 hover:text-primary-300' href=''>
              YouTube
            </a>
          </li>
          <li>-</li>
          <li>
            <a className='text-gray-50 hover:text-primary-300' href=''>
              Twitter
            </a>
          </li>
          <li>-</li>
          <li>
            <a className='text-gray-50 hover:text-primary-300' href=''>
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
