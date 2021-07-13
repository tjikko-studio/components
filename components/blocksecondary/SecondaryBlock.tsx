import React, { FC, HTMLAttributes } from 'react'
import TestImage from './Blank.png'


export interface CTAInfoType {
    head: string
    text: string
}

export interface SecondaryBlockProps extends HTMLAttributes<HTMLDivElement> {
   /**
    *  image url to show
    */
    imageurl?: string
    /**
     * text and button to show
     */
    info: CTAInfoType
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
                    style={
                        {
                            width: type=="vertical" ? "605px" : "526px"
                        }
                    }
                >
                    <h3
                        className='fontStyle-3xl'
                    >
                        {
                            props.info.head
                        }
                    </h3>
                    <p
                        className='text-base pt-2'
                    >
                        {
                            props.info.text
                        }
                    </p>
                </div>
            </div>
        )
    }
    return (
        <div
            {...props}
            className={`gap-6
                ${type=="default" && "flex"}
                ${!mirror && "flex-row-reverse"}
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
