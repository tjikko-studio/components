import React, { FC, HTMLAttributes } from 'react'
import TestImage from './Blank.png'
import { Button } from '../buttons/Button'

export interface SecondaryBlockProps extends HTMLAttributes<HTMLDivElement> {
   /**
    *  image url to show
    */
    imageurl?: string
    /**
     * text and button to show
     */
    head: string
    text: string
    cta_name: string
    cta_link: string
    /**
     * Block type
     */
    type?: "default" | "vertical"
    /**
     * Is mirror
     */
    mirror?: boolean
    className?: string
}


/**
 * Primary UI component for user interaction
 */
export const SecondaryBlock: FC<SecondaryBlockProps> = ({
    type  = "vertical",
    mirror = "false",
    ...props
}) => {
    const Image = () => {
        return (
            <div
                className={`
                    ${type=="vertical" && "pb-6"}
                `}
            >
                <img 
                    src={props.imageurl?props.imageurl:TestImage}
                    className={`rounded-lg
                        ${type=="default" && "w-auto"}
                    `}
                />
            </div>
        )
    }
    const Text = () => {
        return (
            <div
                className={`
                    ${type!="vertical" && "flex justify-center"}
                `}
            >
                <div 
                    className={`
                        ${type!="vertical" && "pl-12"
                    }
                `} >
                    <h2
                        className='fontStyle-4xl'
                    >
                        {
                            props.head
                        }
                    </h2>
                    <p
                        className='text-base pt-2'
                    >
                        {
                            props.text
                        }
                    </p>
                    {
                        (props.cta_name && props.cta_link) &&
                        <div
                            className="pt-6">
                            <Button 
                                text = {props.cta_name}
                                url = {props.cta_link}
                                type = "tertiary"
                                icon = 'none'
                                size = "large"
                            />
                        </div>
                    }
                </div>
            </div>
        )
    }
    return (
        <div
            {...props}
            className={`
                ${type=="default" && "flex"}
                ${mirror && "flex-row-reverse"}
                ${props.className?props.className:""}
            `}
        >
            {
                (type=="default" || type=="vertical") && (
                    <>
                        <Image />
                        <Text />
                    </>
                )
            }
            
            
        </div>
    )
}
