import React, {FC, HTMLAttributes} from 'react'

export interface BreadCrumbType {
  name: string
  url: string
}

export interface BreadCrumbProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * fixed: no link, no click
   * responsive: link, clickable and hover
   */
  styles?: "fixed" | "responsive"
  /**
   * breadcrumb data list
   */
  crumblist: Array<BreadCrumbType>

  /**
   * Additional space-separated class names to append
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const BreadCrumb: FC<BreadCrumbProps> = ({
  styles = "responsive",
  crumblist = [],
  className
}) => {

  const spanClasses = ['fontStyle-xl']
  if (styles === 'responsive') {
    spanClasses.push('hover:text-brand-300')
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={className}
    >
      <ul className="flex flex-wrap">
        {
          crumblist.map((item, index) => {
            return (
              <li
                key={index}
              >
                <span
                  className={spanClasses.join(' ')}
                  key={index}
                >
                  <a
                    href={((styles === 'responsive') ? item.url : undefined)}
                  >
                    {
                      item.name
                    }
                  </a>
                </span>
                {
                  (crumblist.length - 1 > index) && <span className='px-2.5'>/</span>
                }
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
