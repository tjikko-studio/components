import React, { FC, HTMLAttributes } from 'react'
import { SearchIcon } from '../svg/Search';

export interface PopUpNavItemProps extends HTMLAttributes<HTMLElement> {
    
    /**
     * pop up type
     */
    type: "default" | "link" | "button" | "special"
    /**
     * flag to check pop up item is active
     */
    isActive?: boolean
    /**
     * text to show
     */
    caption: string
    /**
     * url to show
     */
     href?: string
     /**
      * child node
      */
     children?: React.ReactNode


}

/**
 * Primary UI component for user interaction
 */
export const PopUpNavItem: FC<PopUpNavItemProps> = ({
    caption="Header",
    type="default",
    href="#",
    isActive=false,
    ...props
}) => {
    
    return (
        <div
            { ...props }
            className={`font-inter
                ${(type != "link") && "uppercase"}
                ${(type == "special") && "text-gray-100 tracking-wider font-semibold text-sm "}
                    ${((type == "special") && (!isActive) && "hover:text-brand-300 dark:text-gray-100 dark:hover:text-brand-300")}
                    ${((type == "special") && (isActive) && "text-brand-300 dark:text-brand-300")}
                ${(type == "default") && "text-gray-800 tracking-wider font-semibold text-sm "}
                    ${((type == "default") && (!isActive) && "hover:text-brand-600 dark:text-gray-100 dark:hover:text-brand-300")}
                    ${((type == "default") && (isActive) && "text-brand-600 dark:text-brand-300")}
                ${(type == "link") && "text-gray-800 text-sm dark:text-gray-100"}
                ${(type == "button") && "tracking-wider text-xs font-semibold text-brand-600"}
                    ${((type == "button") && (!isActive) && "hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-100")}
                    ${((type == "button") && (isActive) && "text-brand-800 dark:text-brand-100")}
                ${props.className && props.className}
            `}
            style={{width: 'fit-content'}}
        >
            <a href={href}>
                { caption }
            </a>
            {
                props.children ? props.children : ""
            }
        </div>
    )
}
