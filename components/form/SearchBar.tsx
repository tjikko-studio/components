import React, { FC, HTMLAttributes, useState } from 'react'
import SearchIcon from '../../assets/icons/search-line.svg'

export interface SearchBarProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * focussed type
     */
    isFocussed?: boolean
    /**
     * filled text
     */
    text?: string
    /**
     * place holder string
     */
    placeHolder?: string
    /**
     * disabled
     */
    isDisabled?: boolean

}

/**
 * Primary UI component for user interaction
 */
export const SearchBar: FC<SearchBarProps> = (props) => {
    const [autoFocus, setInputFocus] = useState(false);
    return (
        <div className="relative">
            <button 
                disabled={props.isDisabled}
                className="absolute top-1/2 -mt-2 ml-4"
            >
                <SearchIcon width="" className="w-4 h-4"/>
            </button>
            <input
                className={`w-72 flex rounded-lg items-center overflow-hidden pl-11
                    ${ !props.isDisabled && "hover:border-gray-300 dark:border-gray-400" } dark:bg-gray-800 dark:text-white text-base h-12 max-h-12 py-3 px-4 rounded-lg border border-gray-200 ${props.isDisabled && "dark:border-gray-500"} focus:outline-none focus:ring-2 focus:border-input_focus focus:border-transparent
                    ${(props.isFocussed || autoFocus) && "shadow-input_focus outline-none ring-2 border-input_focus border-transparent dark:ring-offset-0"}` }
                disabled={props.isDisabled}
                defaultValue={props.text}
                placeholder={props.placeHolder}
                onFocus={() => setInputFocus(true) }
                onBlur={() => setInputFocus(false)}
            />
        </div>

    )
}
