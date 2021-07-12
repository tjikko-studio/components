import React, { FC, HTMLAttributes } from 'react'

export interface CTAType {
    name?: string
    url?: string
    active?: boolean
}

export interface CTAProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * CTA data list
     */
    ctalist?: Array<CTAType>
    /**
     * Caption string
     */
    caption?: string
    /**
     * description string
     */
    description?: string
}

/**
 * Primary UI component for user interaction
 */
export const CTA: FC<CTAProps> = ({
    ctalist = [],
    caption = "",
    description = "",
    ...props
}) => {

    return (
        <div className="w-full py-24 text-center bg-gray-900">
            <h2 className='font-Borda text-4xl text-gray-50 leading-10'>{ caption && caption !== "" ? caption : "We can also create any simulated realities" }</h2>
            <p className="font-Inter text-lg text-gray-50 mt-4 leading-7 mb-7">{ description && description !== "" ? description : "for any use case you may have in mind" }</p>
            <div>
            { ctalist.map((cta, index) => (
                <span 
                    className={`${ cta.active ? "bg-brand-400 px-4 text-brand-900 rounded-lg" : "px-3 text-brand-400" } py-3 text-sm font-semibold cursor-pointer font-Inter uppercase`}
                    key={index} 
                    onClick={() => cta.url && cta.url !== "" ? window.location.href = cta.url : "null"}
                >
                    { cta.name && cta.name !== "" ? cta.name : "none CTA" }
                </span>
            )) }
            </div>
        </div>
    )
}
