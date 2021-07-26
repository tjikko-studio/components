import React, {FC, HTMLAttributes} from 'react'

export interface BreadCrumbType {
  name: string
  url: string
}

export interface BreadCrumbProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * breadcrumb data list
   */
  crumbs: Array<BreadCrumbType>

  /**
   * Additional space-separated class names to append
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const BreadCrumb: FC<BreadCrumbProps> = ({
  crumbs = [],
  className
}) => {

  const spanClasses = ['fontStyle-xl hover:text-brand-300 dark:hover:text-brand-300']

  return (
    <nav
      aria-label="Breadcrumb"
      className={className}
    >
      <ul className="flex flex-wrap">
        {
          crumbs.map((item, index) => {
            return (
              <li
                key={index}
              >
                <span
                  className={spanClasses.join(' ')}
                  key={index}
                >
                  <a
                    href={item.url}
                  >
                    {
                      item.name
                    }
                  </a>
                </span>
                {
                  (crumbs.length - 1 > index) && <span className='px-2.5'>/</span>
                }
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
