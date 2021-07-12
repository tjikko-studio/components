import React, { FC, HTMLAttributes } from 'react'
import TestImage from './Blank.png'

export interface CTAType {
    name: string
    url: string
}

export interface CTAInfoType {
    head: string
    text: string
    cta: CTAType
}

export interface PrimaryBlockProps extends HTMLAttributes<HTMLDivElement> {
   /**
    *  image url to show
    */
    imageurl?: string
    /**
     * text and button to show
     */
    info: CTAInfoType
    /**
     * Block types
     */
    types?: "default" | "vertical" | "mirror"
    classNames?: string
}


/**
 * Primary UI component for user interaction
 */
export const PrimaryBlock: FC<PrimaryBlockProps> = ({
    types="vertical",
    ...props
}) => {
    const Image = () => {
        return (
            <div
                className={`
                    ${types!="vertical" && "px-12 py-6"}    
                `}
            >
                <img 
                    src={props.imageurl?props.imageurl:TestImage}
                    className={`rounded-lg
                        ${types=="default" && "w-auto"}
                    `}
                />
            </div>
        )
    }
    const Text = () => {
        return (
            <div
                className={`
                    ${types!="vertical" && "flex items-center justify-center"}
                `}
            >
                <div
                    className={`
                        ${types!="vertical" && "pl-12"}
                    `}
                    style={
                        {
                            width: "428px"
                        }
                    }
                >
                    <div
                        className='fontStyle-4xl'
                    >
                        {
                            props.info.head
                        }
                    </div>
                    <div
                        className='text-base'
                    >
                        {
                            props.info.text
                        }
                    </div>
                    <div
                        className='pt-10'
                    >
                        <a
                            href={props.info.cta.url}
                            className='text-brand-600 hover:text-brand-500 uppercase text-base font-semibold'
                        >
                            {
                                props.info.cta.name
                            }
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div
            {...props}
            className={`
                ${types!="vertical" && "grid grid-cols-2"}
                ${types=="mirror" && "flex-row-reverse"}
                ${props.classNames?props.classNames:""}
            `}
        >
            {
                (types=="default" || types=="vertical") && (
                    <>
                        <Image />
                        <Text />
                    </>
                )
            }
            {
                (types=="mirror") && (
                    <>
                        <Text />
                        <Image />
                    </>
                )
            }
            
            
        </div>
    )
}
