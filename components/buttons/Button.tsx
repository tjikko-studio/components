import React, { FC, HTMLAttributes } from 'react'
import { SearchIcon } from '../svg/Search';

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * text to display on button
     */
    text?: string
    /**
     * force dark mode
     */
    forceDark?: boolean
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
            className={`flex items-center space-x-3
                ${ (type == "primary" && !props.forceDark ) && "rounded-lg bg-brand-600 hover:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-200"}
                ${ (type == "primary" && props.forceDark ) && "rounded-lg bg-brand-400 hover:bg-brand-200"}
                ${ (type == "tertiary") && "bg-none" }
                ${ (size == "small") && "h-8 max-h-8 px-3.5 py-2.5"}
                ${ (size == "default") && "h-10 max-h-10 px-4 py-3.5"}
                ${ (size == "large") && "h-12 max-h-12 py-4 px-5"}
            `}
        >
                {
                    (icon != "none") && 
                    <SearchIcon 
                        color="text-white" darkColor="dark:text-black"
                    />
                }
                <div
                    className={`font-semibold tracking-wide uppercase
                        ${ (type == "primary" && !props.forceDark ) && "text-white dark:text-brand-900"}
                        ${ (type == "primary" && props.forceDark ) && "text-brand-900"}
                        ${ (type == "tertiary" && !props.forceDark ) && "text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-200"}
                        ${ (type == "tertiary" && props.forceDark ) && "text-brand-400 hover:text-brand-200"}
                        ${ (size == "small") && "text-xxs"}
                        ${ (size == "default") && "text-xs"}
                        ${ (size == "large") && "text-sm"}
                    `}
                >{ text }</div>
        </button>
    )
}
