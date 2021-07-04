import React, { FC, HTMLAttributes } from 'react'
import { ErrorIcon } from "../../svg/Error"
import { ValidatingIcon } from "../../svg/Validating"
import { TickIcon } from "../../svg/Tick"

export interface TextAreaProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * focussed type
     */
     isFocussed?: boolean
     /**
      * Label text
      */
     label?: string
     /**
      * filled text
      */
     text?: string
     /**
      * information text
      */
     information?: string
     /**
      * error text
      */
     error?: string
     /**
      * error
      */
     isError?: boolean
     /**
      * checking...
      */
     isValidating?: boolean
     /**
      * success
      */
     isSuccessed?: boolean
     /**
      * disabled
      */
     isDisabled?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const TextArea: FC<TextAreaProps> = (props) => {
    return (
        <div className="flex flex-col gap-y-1 w-72">
            <div className={`text-sm font-inter font-semibold flex flex-row justify-between dark:text-gray-300 ${ props.isDisabled && "text-gray-500 dark:text-gray-600"}`}>
                <p>{ props.label }</p>
                { props.isError && <ErrorIcon />}
                { props.isValidating && <ValidatingIcon />}
                { props.isSuccessed && <TickIcon />}
            </div>
            <div className="col-span-2">
                <textarea className={`dark:bg-gray-800 dark:text-white text-base py-3 px-4 rounded-lg border ${ !props.isDisabled && "hover:border-gray-300" }border-gray-200 dark:border-gray-800 w-72 focus:outline-none focus:ring-2 focus:border-input_focus focus:border-transparent shadow 
                ${props.isFocussed && "drop-shadow-sm outline-none ring-2 border-input_focus border-transparent dark:ring-offset-0"} 
                ${props.isError && "drop-shadow-sm outline-none ring-2 ring-red-600 border-transparent dark:ring-offset-0"} 
                ${props.isValidating && "drop-shadow-sm outline-none ring-2 ring-blue-600 border-transparent dark:ring-offset-0"} 
                ${props.isSuccessed && "drop-shadow-sm outline-none ring-2 ring-green-800 border-transparent dark:ring-offset-0"}` } 
                defaultValue={props.text} 
                disabled={props.isDisabled}
                />
            </div>
            <div className={`text-sm font-inter font-normal dark:text-gray-300 ${ props.isDisabled && "text-gray-500 dark:text-gray-600"} `}>{ props.information }</div>
            {props.isError && (<div className="text-sm font-normal text-red-700 font-inter">{ props.error }</div>)}
        </div>
    )
}
