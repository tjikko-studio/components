import React, { FC, HTMLAttributes } from 'react'
import { PopUpNavItem } from '../popupnavitem/PopUpNavItem'
import { Logo } from '../svg/Logo'

export interface FooterMenuItem {
    name: string
    url: string
}

export interface FooterDataType {
    caption: string
    menuList: Array<FooterMenuItem>
}

export interface FooterProps extends HTMLAttributes<HTMLElement> {
    /**
     * footer menu data
     */
    footermenu?: Array<FooterDataType>
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
    footermenu = [],
    ...props
}) => {
    
    return (
        <div
            className='bg-gray-800'
        >
            <div
                className='pl-6 pt-6 lg:pt-9 md:pt-9 pb-6 lg:pb-7 md:pb-7'
            >
                <Logo width="210" height="16" />
            </div>
            <hr 
                className='mx-6 bg-opacity-30 border-gray-500'
            />
            <div
                className='px-6 pt-8 lg:flex md:grid md:grid-cols-2'
            >
                {
                    footermenu.map((menu, menuIndex) => {
                        return (
                            <div 
                                key={menuIndex}
                                className={`flex-1 pb-12 lg:mb-0`}
                            >
                                <div
                                    className='text-gray-300 text-xs font-medium uppercase'
                                >
                                    { menu.caption }
                                </div>
                                {
                                    menu.menuList.map((menuItem, itemIndex) => {
                                        return (
                                            <div
                                                key={itemIndex}
                                                className='text-gray-50 hover:text-brand-300 text-sm pt-3'
                                            >
                                                <a
                                                    href={menuItem.url}
                                                >
                                                    {
                                                        menuItem.name
                                                    }
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div
                className="text-gray-50 text-sm flex flex-col-reverse md:flex-row pt-32 lg:pt-8 md:pt-3 px-6 pb-6 md:pb-4 lg:pb-6"
            >
                <div className='flex flex-1 flex-row-reverse md:flex-row pt-4 md:pt-0'>
                    <div className='flex-1 flex justify-end md:justify-start'><span>© { props.year?props.year:new Date().getFullYear() }</span></div>
                    <div className='flex-1'>{ props.privacy?props.privacy:"Privacy - Terms" }</div>
                </div>
                <div className='flex-1'></div>
                <div 
                    className='flex flex-1 md:-ml-20 '
                >
                    <div>Facebook</div>
                    -
                    <div>YouTube</div>
                    -
                    <div>Twitter</div>
                    -
                    <div>LinkedIn</div>
                </div>
            </div>
        </div>
    )
}
