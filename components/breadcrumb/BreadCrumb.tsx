import React, { FC, HTMLAttributes } from 'react'

export interface BreadCrumbType {
    name: string
    url: string
}

export interface BreadCrumbProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * breadcrumb data list
     */
    crumblist: Array<BreadCrumbType>

    className?: string
}

/**
 * Primary UI component for user interaction
 */
export const BreadCrumb: FC<BreadCrumbProps> = ({
    crumblist = [],
    ...props
}) => {

    return (
        <nav
            {...props}
            aria-label="Breadcrumb"
            className={`
                ${props.className?props.className:''}
            `}
        >
            <ul className="flex flex-wrap">
                {
                    crumblist.map((item, index) => {
                        return (
                            <li
                                key={index}
                            >
                                <span
                                    className={`fontStyle-xl hover:text-brand-600 dark:hover:text-brand-300`}
                                    key={index}
                                >
                                    <a
                                        href={ (item.url ? item.url : null) }
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
