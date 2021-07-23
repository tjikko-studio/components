import React, { FC, HTMLAttributes, useState } from 'react'
import { useMediaPredicate } from "react-media-hook";
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import CompanyLogo from '../../assets/images/company_logo_placeholder.svg'
import { NavItem } from '../navitem/NavItem'
import { MobileMenu } from './MobileMenu';
import { MenuType } from '../listnav/ListNav';

export interface LanguageType {
    current?: string | null
    submenu?: Array<MenuType>
}
export interface MenuItemType {
    caption: string
    captionlink?: string
    submenu?: Array<MenuType>
}

export interface SiteNavProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * menu json data same as NavItem
     */
    menudata: Array<MenuItemType>
    /**
     * demo button text
     */
    demobuttontext?: string
    /**
     * url to go when click demo button
     */
    demourl?: string
    /**
     * language list
     */
    languagelist?: LanguageType
    /**
     * nav background color style
     */
    styles: "black" | "transWhite"
}

/**
 * Primary UI component for user interaction
 */
export const SiteNav: FC<SiteNavProps> = ({
    demobuttontext="Free Demo",
    demourl="#",
    menudata=[],
    styles="black",
    ...props
}) => {
    const [mobileExpand, setMobileExpand] = useState(false);
    const large = useMediaPredicate("(min-width: 1024px)")
    const medium = useMediaPredicate("(max-width: 1023px)")
    const mobile = useMediaPredicate("(max-width: 640px)")
    return (
        <>
        <div
            {...props}
            className={`bg-gray-900 flex items-center justify-between md:justify-Start h-16 lg:h-24  px-6 lg:px-10
                ${(styles=="transWhite") && "bg-opacity-10"}
                ${props.className ? props.className : ''}
            `}
        >
            <CompanyLogo 
                width='' height=''
                className='h-3 lg:h-4 text-gray-50 w-auto'
            />
            <div 
                className='hidden lg:flex m-auto items-center lg:space-x-6'
            >
            {
                menudata.map((menuitem, index) => {
                    return (
                        <NavItem 
                            key={index}
                            link={menuitem.captionlink?menuitem.captionlink:""}
                            styles="default/white"
                            caption={menuitem.caption}
                            submenu={menuitem.submenu}
                        />
                    )
                })
            }
            </div>
            <div
                className='hidden lg:flex items-center'
            >
                <a 
                    href={demourl}
                    className="py-3.5 px-3.5 uppercase bg-brand-400 rounded-lg tracking-wider leading-3 text-sm font-semibold"
                >
                    {demobuttontext}
                </a>
                <NavItem 
                    className='space-x-2'
                    styles="default/white" 
                    caption={props.languagelist.current ? props.languagelist.current : "En" } 
                    submenu={props.languagelist.submenu}
                />
            </div>
            <Disclosure as="nav" 
                className="bg-transparent"
            >
                <div className="lg:hidden">
                    <button 
                        className="bg-transparent inline-flex items-center justify-center"
                        onClick={()=>setMobileExpand(!mobileExpand)}
                    >
                        <span className="sr-only">Open main menu</span>
                        { mobileExpand ? (
                            <XIcon 
                                className={`text-gray-300 w-5 h-5`} 
                            />
                            ) : (
                            <MenuIcon 
                                className={`h-6 w-6
                                    ${styles=="black" && "text-gray-300"}
                                    ${styles=="transWhite" && "text-gray-300"}
                                `}  
                            />
                        )}
                    </button>
                </div>
            </Disclosure>
        </div>
        { mobileExpand ? <MobileMenu styles={styles} menudata={menudata} {...props} ></MobileMenu> : ""}
        </>
    )
}
