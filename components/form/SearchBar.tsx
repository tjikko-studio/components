import React, {FC, HTMLAttributes, useState} from 'react'
import SearchIcon from '../../assets/icons/search-line.svg'
import focusClasses from '../../utilities/focusClasses'
import addDisabledClasses from '../../snippets/addDisabledClasses'

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
  const classes = ['w-72', 'flex', 'rounded-lg', 'items-center', 'overflow-hidden', 'pl-11', 'text-base', 'h-12', 'max-h-12', 'py-3', 'px-4', 'rounded-lg', 'border', 'bg-gray-50', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-100', 'border-gray-300', 'dark:border-gray-600' ]
  addDisabledClasses(isDisabled, classes)
  return (
    <div
      className='text-gray-900 dark:text-gray-50 relative'
      defaultValue={text}
    >
      <button
        className='absolute top-1/2 -mt-2 ml-4'
        disabled={isDisabled}
      >
        <SearchIcon className='w-4 h-4'/>
      </button>
      <input
        disabled={isDisabled}
        className={`${classes.join(' ')} ${focusClasses('outline-none ring-2 ring-primary-500 border-transparent', isFocussed)}`}
        defaultValue={text}
        placeholder={placeHolder}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
    </div>

  )
}
