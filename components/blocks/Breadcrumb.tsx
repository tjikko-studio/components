import React, {FC, HTMLAttributes} from 'react'

export interface BreadcrumbType {
  name: string
  url: string
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Breadcrumb data list
   */
  crumbs: BreadcrumbType[]

  /**
   * Additional space-separated class names to append
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Breadcrumb: FC<BreadcrumbProps> = ({
  crumbs = [],
  className
}) => {

  const spanClasses = ['fontStyle-xl hover:text-primary-300 dark:hover:text-primary-300']

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-gray-900 dark:text-gray-50  ${className}`}
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
