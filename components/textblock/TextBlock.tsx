import React, { FC, HTMLAttributes } from 'react'

export interface TextBlockProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * text to display for heading
     */
    headerText: string
    /**
     * text to display for paragraph
     */
    paragraph: string

    className?: string
   
}

/**
 * Primary UI component for user interaction
 */
export const TextBlock: FC<TextBlockProps> = ({
   headerText = '',
   paragraph = '',
    ...props
}) => {

    return (
        <div 
            {...props}
            className={`p-6
                ${props.className?props.className:''}
            `}
        >
            <h5 className = "dark:text-gray-100 text-lg tracking-wider uppercase font-semibold">{headerText}</h5>
            <hr className = "dark:border-brand-600 mt-1"/>
            <p className = "dark:text-gray-100 text-base mt-5">
                {paragraph}
            </p>
        </div>
    )
}