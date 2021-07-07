import React, { FC, HTMLAttributes } from 'react'
import { PopUpNavItem, PopUpNavItemProps } from '../popupnavitem/PopUpNavItem'

export interface ListNavProps extends HTMLAttributes<HTMLDivElement> {
    
    /**
     * style
     */
    styles: "elevated" | "flat"
    /**
     * {
     *  "default": {
     *      "Link 01": "/linkURL",
     *      "Link 02": "/linkURL",
     *      "Link 03": "/linkURL",
     *      "Button": "/linkURL"
     *  },
     * }
     * {
     *  "Group 01": {
     *      "Link 01": "/linkURL",
     *      "Link 02": "/linkURL",
     *      "Link 03": "/linkURL",
     *      "Link 04": "/linkURL",
     *      "Button": "/linkURL"
     *  },
     * "Group 02": {
     *      "Link 01": "/linkURL",
     *      "Link 02": "/linkURL",
     *      "Link 03": "/linkURL",
     *      "Link 04": "/linkURL",
     *      "Button": "/linkURL"
     *  },
     * "Group 03": {
     *      "Link 01": "/linkURL",
     *      "Link 02": "/linkURL",
     *      "Link 03": "/linkURL",
     *      "Link 04": "/linkURL",
     *      "Button": "/linkURL"
     *  }
     * }
     * If data contains one, it will be single. If data contains more than one, it will be multi. At this time, last element will be tertiary  button.
     */
    linkList?: Object
}

/**
 * Primary UI component for user interaction
 */
export const ListNav: FC<ListNavProps> = ({
    styles="elevated",
    // linkList = {
    //     "default": {
    //         "Link 01": "/linkURL",
    //         "Link 02": "/linkURL",
    //         "Link 03": "/linkURL",
    //         "Button": "/linkURL"
    //     },
    // },
    linkList = {
        "Group 01": {
            "Link 01": "/linkURL",
            "Link 02": "/linkURL",
            "Link 03": "/linkURL",
            "Link 04": "/linkURL",
            "Button": "/linkURL"
        },
        "Group 02": {
            "Link 01": "/linkURL",
            "Link 02": "/linkURL",
            "Link 03": "/linkURL",
            "Link 04": "/linkURL",
            "Button": "/linkURL"
        },
        "Group 03": {
            "Link 01": "/linkURL",
            "Link 02": "/linkURL",
            "Link 03": "/linkURL",
            "Link 04": "/linkURL",
            "Button": "/linkURL"
        },
        "Group 04": {
            "Link 01": "/linkURL",
            "Link 02": "/linkURL",
            "Link 03": "/linkURL",
            "Link 04": "/linkURL",
            "Button": "/linkURL"
        }
    },
    ...props
}) => {
    let keys = Object.keys(linkList)
    return (
        <div
            className={`rounded-lg bg-gray-50 dark:bg-transparent px-3 py-2.5 w-max
                ${ (styles == "elevated") && "shadow-lg" }
                ${ (keys.length > 1) && (styles == "elevated") && "flex" }
                ${ (keys.length > 1) && (styles == "flat") && "grid grid-cols-2" }
            `}
            style={{width: 'fit-content'}}
        >
            {
                keys.map((key, index) => {
                    let captions = Object.keys(linkList[key])
                    return <div className="m-1.5 w-max" key={index} >
                        {
                            (keys.length > 1) && (
                                <div
                                    className={`font-inter font-semibold text-sm leading-5 uppercase px-3 py-2.5 dark:text-gray-100 text-gray-800`}
                                >
                                    { key }
                                </div>
                            )
                        }
                        {
                            captions.map((subKey, subIndex) => {
                                return <PopUpNavItem  caption={subKey} type={subIndex < captions.length - 1 ? "link" : "button"} key={subIndex} className='px-3 py-2.5' href={linkList[key][subKey]} ></PopUpNavItem>
                            })
                        }
                    </div>
                })
            }
        </div>
    )
}
