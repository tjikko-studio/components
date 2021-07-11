import React, { FC, HTMLAttributes } from 'react'
import ImageBack from './image_back.png';

export interface BlockQuoteProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * speech to display on BlockQuote
     */
    speech?: string
    /**
     * avatar to display on BlockQuote
     */
    avatarUrl?: string
    /**
     * cusomter name to display on BlockQuote
     */
    customerName?: string
}

/**
 * Primary UI component for user interaction
 */
export const BlockQuote: FC<BlockQuoteProps> = ({
    speech = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    avatarUrl = ImageBack,
    customerName = 'Maria Lopez, VP of Design at Meshery',
    ...props
}) => {

    return (
        <div
            {...props}
        >
            <p
                className={`font-normal text-xl text-center text-brand-900`}

            >“{ speech }”</p>
            <img 
                className="w-20 h-20 mx-auto my-6 rounded-full" 
                src={ avatarUrl?avatarUrl:ImageBack } 
                alt="" 
            />
            <p className={`text-sm text-center`}>{ customerName }</p>
        </div>
    )
}
