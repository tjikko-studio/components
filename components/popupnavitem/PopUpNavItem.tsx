import React, { FC, HTMLAttributes } from 'react'
import { SearchIcon } from '../svg/Search';

export interface PopUpNavItemProps extends HTMLAttributes<HTMLDivElement> {
    
    /**
     * pop up type
     */
    type: "default" | "link" | "button"
    /**
     * flag to check pop up item is active
     */
    isActive?: boolean
    /**
     * text to show
     */
    caption: string
    
}

/**
 * Primary UI component for user interaction
 */
export const PopUpNavItem: FC<PopUpNavItemProps> = ({
    caption="Header",
    type="default",
    ...props
}) => {
    return (
        <div
            className={`font-inter
                ${(type != "link") && "uppercase"}
                ${(type == "default") && "text-gray-800 tracking-wider font-semibold text-sm "}
                    ${((type == "default") && (!props.isActive) && "hover:text-brand-600 dark:text-gray-100 dark:hover:text-brand-300")}
                    ${((type == "default") && (props.isActive) && "text-brand-600 dark:text-brand-300")}
                ${(type == "link") && "text-gray-800 text-sm dark:text-gray-100"}
                ${(type == "button") && "tracking-wider text-xs font-semibold text-brand-600"}
                    ${((type == "button") && (!props.isActive) && "hover:text-button-hover dark:text-brand-300 dark:hover:text-brand-100")}
                    ${((type == "button") && (props.isActive) && "text-brand-800 dark:text-brand-100")}
            `}
        >
            { caption }
        </div>
    )
}
