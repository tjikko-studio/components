import React, { FC, HTMLAttributes, useState, useEffect } from 'react'

export interface LogoPizzaInterface {
    imgUrl: string;
    href?: string;
}

export interface LogoPizzaProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * speech to display on LogoPizza
     */
    companyArr?: LogoPizzaInterface[]
    /**
     * mode : "Default" | "Compact"
     */
    mode?: "Default" | "Compact"
}

/**
 * Primary UI component for user interaction
 */
export const LogoPizza: FC<LogoPizzaProps> = ({
    companyArr = [],
    mode = "Default",
    ...props
}) => {

    return (
        <div
            className={`logo-pizza`}
            {...props}
        >
            <h3 className={`${ mode == "Compact" ? "text-2xl" : "text-4xl"} text-center mb-16`}>Trusted by</h3>
            <marquee>
                <div className={`flex flex-nowrap w-max`}>
                { companyArr.map((company, id) => (
                    <div
                        key={id}
                        className={ mode == "Default" ? "w-14 h-14 lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-14 sm:h-14 mx-14 lg:mx-32 md:mx-16 sm:mx-14" : "w-14 h-14 lg:w-16 lg:h-16 md:w-12 md:h-12 md:w-14 md:h-14 sm:w-14 sm:h-14 mx-14 lg:mx-32 md:mx-16 sm:mx-14"}
                    >
                        { (company.imgUrl && company.imgUrl !== "") ? 
                            <img className="w-full h-full" src={company.imgUrl ? company.imgUrl : `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`}></img>
                            : <div className="w-full h-full bg-black"></div>
                        }
                    </div>
                )) }
                </div>
            </marquee>
        </div>
    )
}
