import React, {FC, HTMLAttributes, useState} from 'react'
import SearchIcon from '../../assets/icons/search-line.svg'
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
  return (
    <div
      className='relative'
      defaultValue={text}
    >
      <button
        className="absolute top-1/2 -mt-2 ml-4"
        disabled={isDisabled}
      >
        <SearchIcon width="" className="w-4 h-4"/>
      </button>
      <input
        disabled={isDisabled}
        className={`${classes.join(' ')} ${focusClasses('outline-none ring-2 ring-brand-500 border-transparent', isFocussed)}`}
        defaultValue={text}
        placeholder={placeHolder}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
    </div>

  )
}