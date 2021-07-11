import React, { FC, HTMLAttributes } from 'react'
import { BreadCrumb, BreadCrumbType } from '../breadcrumb/BreadCrumb'
import { SP } from '../svg/SP'

export interface HeaderTextFooterType {
    type: "default" | "form" | "case"
    buttonText?: string
    formPlaceholder?: string
    caseText?: string
    url?: string
}

export interface HeaderTextProps extends HTMLAttributes<HTMLElement> {
    /**
     * Header type and information
     */
    styles: HeaderTextFooterType
    /**
     * breadcrumb
     */
    breadcrumb?: Array<BreadCrumbType>
    /**
     * text to show as title
     */
    title: string
    /**
     * text to show
     */
    text: string

    className?: string
}

/**
 * Primary UI component for user interaction
 */
export const HeaderText: FC<HeaderTextProps> = ({
    breadcrumb=[],
    ...props
}) => {

    return (
        <div
            {...props}
            className={`bg-gray-900
                ${props.className?props.className:''}
            `}
        >
            <div>
                <BreadCrumb 
                    crumblist={breadcrumb}
                    styles="fixed"
                    className="text-gray-50"
                />
            </div>
            <div
                className='text-gray-50 pt-3 font-Borda text-5xl lg:text-6xl md:text-5xl sm:text-5xl tracking-wider leading-none'
            >
                { props.title }
            </div>
            <div
                className='text-gray-50 text-base break-words pt-4'
            >
                { props.text }
            </div>
            <div
                className='pt-6 pb-4'
            >
                {
                    (props.styles.type=="default") && (
                        <a
                            href={props.styles.url}
                            className='bg-brand-400 rounded-lg py-4 px-5 text-base font-semibold uppercase text-brand-900 hover:bg-brand-300'
                        >
                            { props.styles.buttonText }
                        </a>
                    )
                }
                {
                    (props.styles.type=="form") && (
                        <div>
                            <input type='text' 
                                className='bg-gray-50 rounded-lg border border-gray-100 py-3 px-4 placeholder-gray-800 placeholder-opacity-40 w-80'
                                placeholder={props.styles.formPlaceholder}
                            />
                            <a
                                href={props.styles.url}
                                className='bg-brand-400 rounded-lg py-4 px-5 text-base font-semibold uppercase text-brand-900 hover:bg-brand-300 ml-2'
                            >
                                { props.styles.buttonText }
                            </a>
                        </div>
                    )
                }
                {
                    (props.styles.type=="case") && (
                        <div
                            className='flex items-center'
                        >
                            <SP width='48' height='48' />
                            <a
                                className='text-gray-50 ml-7'
                                href={ props.styles.url }
                            >
                                { props.styles.caseText }
                            </a>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
