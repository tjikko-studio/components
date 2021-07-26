import React, {FC, HTMLAttributes, useState} from 'react'
import {SearchIcon} from "../svg/Search"
import focusClasses from "../../utilities/focusClasses"
import addDisabledClasses from "../../snippets/addDisabledClasses"

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
export const SearchBar: FC<SearchBarProps> = ({
  isDisabled,
  isFocussed,
  text,
  placeHolder
}) => {
  const [autoFocus, setInputFocus] = useState(false)
  const classes = ['w-72', 'flex', 'rounded-lg', 'items-center', 'overflow-hidden', 'dark:bg-gray-800', 'dark:text-white', 'text-base', 'h-12', 'max-h-12', 'py-3', 'px-4', 'rounded-lg', 'border', 'border-gray-200']
  addDisabledClasses(isDisabled, classes)
  return (
    <div
      className={`${classes.join(' ')} ${focusClasses('outline-none ring-2 ring-brand-500 border-transparent', isFocussed)}`}
      defaultValue={text}
    >
      <button
        disabled={isDisabled}
      >
        <SearchIcon color="text-gray-600" />
      </button>
      <input
        disabled={isDisabled}
        className='border-none ml-3.5 focus:outline-none dark:bg-gray-800 bg-white dark:text-white'
        defaultValue={text}
        placeholder={placeHolder}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
    </div>

  )
}
