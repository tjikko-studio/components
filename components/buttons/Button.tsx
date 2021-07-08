import React, { FC, HTMLAttributes } from 'react'
import { SearchIcon } from '../svg/Search';

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * text to display on button
     */
    text?: string
    /**
     * button type
     */
    type: "primary" | "secondary" | "tertiary"
    /**
     * icon position
     * only: show only icon with rounded button
     */
    icon: "right" | "left" | "only" | "none"
    /**
     * icon size
     */
    size: "small" | "default" | "large"
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
    type = "tertiary",
    text = 'LABEL',
    icon = 'none',
    size = "small",
    ...props
}) => {
    return (
        <button 
            className={`
                ${ (type == "primary") && "rounded-lg bg-brand-600 hover:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-200"}
                ${ (type == "tertiary") && "bg-none" }
                ${ (size == "small") && ""}
                ${ (size == "default") && ""}
                ${ (size == "large") && ""}
            `}
        >
            <div className='flex items-center'>
                {
                    (icon != "none") && 
                    <SearchIcon 
                        color="text-white" darkColor="dark:text-black"
                    />
                }
                <p
                    className={`font-inter font-semibold 
                        ${ (type == "primary" ) && "text-white dark:text-brand-900"}
                        ${ (type == "tertiary" ) && "text-brand-600 hover:text-brand-700 dark:bg-brand-400 dark:hover:bg-brand-200"}
                        ${ (size == "small") && "text-xs px-3.5 py-2.5"}
                        ${ (size == "default") && "text-sm  px-4 py-3.5"}
                        ${ (size == "large") && "text-base py-4 px-5"}
                    `}
                >{ text }</p>
            </div>
        </button>
    )
}
