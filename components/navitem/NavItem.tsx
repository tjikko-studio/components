import React, { FC, HTMLAttributes, useState } from 'react'
import { PopUpNavItem } from '../popupnavitem/PopUpNavItem'
import { ArrowDown } from '../svg/ArrowDown'
import { ListNav } from '../listnav/ListNav'

export interface NavItemProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * set nav item type
     */
    styles: "default" | "default/white" | "flat"
    /**
     * text to show as menu
     */
    caption: string
    /**
     * url to go when menu clicked
     */
    link?: string | null
    /**
     * sub menu json object same as list nav
     */
    subMenu?: Object | null

}

/**
 * Primary UI component for user interaction
 */
export const NavItem: FC<NavItemProps> = ({
    caption = "Label",
    link = null,
    styles = "default/white",
    ...props
}) => {
    const [mouseIn, setMouseIn] = useState(false);
    let keys = []
    try{
        keys = (props.subMenu === undefined || props.subMenu === null) ? [] : Object.keys(props.subMenu)
    }catch(error){
        console.log("sub menu structure error")
        keys = []
    }
    return (
        <div 
            className='cursor-pointer w-max'
            style={{width: 'fit-content'}} 
            onMouseEnter={() => setMouseIn(true) } 
            onMouseLeave={() => setMouseIn(false) }
        >
            <PopUpNavItem 
                type={ (styles=="default/white")  ? "special" : "default"}
                caption={ caption } 
                href={link} 
                className={`flex items-center 
                    ${ mouseIn && styles=="default" ? "text-brand-600" : "" }
                    ${ mouseIn && styles=="default/white" ? "text-brand-300" : "" }
                    ${ mouseIn && styles=="flat" ? "text-brand-100 dark:text-brand-300" : "" }
                `} 
            >
            {   (keys.length > 0) && (
                    <span className='ml-2.5'>
                        <ArrowDown 
                            color={`
                                ${ !mouseIn && styles=="default" ? "text-gray-800" : "" }
                                ${ !mouseIn && styles=="default/white" ? "text-gray-100" : "" }
                                ${ !mouseIn && styles=="flat" ? "text-gray-100 dark:text-gray-100" : "" }
                                ${ mouseIn && styles=="default" ? "text-brand-600" : "" }
                                ${ mouseIn && styles=="default/white" ? "text-brand-300" : "" }
                                ${ mouseIn && styles=="flat" ? "text-brand-300 dark:text-brand-300" : "" }
                            `} 
                            darkColor="text-gray-50"
                        />
                    </span>
                )
            }
            </PopUpNavItem>
            { mouseIn && (keys.length > 0) && (
                    <div>
                        <ListNav styles={styles == "flat" ? "flat" : "elevated"} linkList={ props.subMenu } />
                    </div>
                )
            }
        </div>
    )
}
