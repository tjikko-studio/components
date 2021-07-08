import React, { FC, HTMLAttributes } from 'react'
import { NavItem } from '../navitem/NavItem'

export interface MobileMenuProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * menu json data same as NavItem
     */
    menudata?: Object
    /**
     * demo button text
     */
    demobuttontext?: string
    /**
     * url to go when click demo button
     */
    demourl?: string
    /**
     * language list
     */
    languagelist?: Object
    /**
     * nav background color style
     */
    styles: "black" | "transWhite"
}

/**
 * Primary UI component for user interaction
 */
export const MobileMenu: FC<MobileMenuProps> = ({
    demobuttontext="Free Demo",
    demourl="#",
    styles="black",
    ...props
}) => {
    let menuKeys = []
    try{
        menuKeys = Object.keys(props.menudata)
    }catch(error){
        console.log(error)
    }
    console.log(menuKeys)
    return (
        <div 
            className={`bg-brand-400 
                ${(styles=="transWhite") && "bg-opacity-10"}
                ${props.className ? props.className : ''}
            `}
        >
        {
            menuKeys.map((key, index) => {
                return (
                    <>
                        <p>{ key }</p>
                        <div className="flex" style={{}}>
                        { Object.keys(props.menudata[key]).map((subkey ,index) => {
                            return (
                            <div key={index}>
                                { Object.keys(props.menudata[key]).length > 1 ? 
                                <p>{ subkey }</p>
                                : "" }
                                { Object.keys(props.menudata[key][subkey]).map(item => (
                                    <p>{ item }</p>
                                )) }
                            </div>
                        )}) }
                        </div>
                    </>
                )
            })
        }
        </div>
    )
}
