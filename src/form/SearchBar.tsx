// eslint-disable-next-line no-use-before-define
import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import SearchIcon from '/assets/icons/search-line.svg'
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

  /**
   * className override
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const SearchBar: FC<SearchBarProps> = ({
  isDisabled = false,
  isFocussed = false,
  text,
  placeHolder,
  className
}) => {
  const classes = [
    'form-input',
    'w-72',
    'flex',
    'rounded-lg',
    'items-center',
    'overflow-hidden',
    'w-full',
    'pl-11',
    'fontStyle-base',
    'h-12',
    'max-h-12',
    'py-3',
    'px-4',
    'rounded-lg',
    'border',
    'bg-gray-50',
    'dark:bg-gray-700',
    'text-gray-800',
    'dark:text-gray-100',
    'border-gray-300',
    'dark:border-gray-600'
  ]
  addDisabledClasses(isDisabled, classes)
  return (
    <div
      className={cn('text-gray-900 dark:text-gray-50 relative w-72', className)}
    >
      <button
        className='absolute top-1/2 -mt-2 ml-4'
        disabled={isDisabled}
      >
        <SearchIcon className='w-4 h-4'/>
      </button>
      <input
        disabled={isDisabled}
        className={cn(
          classes,
          focusClasses(
            'outline-none ring-2 ring-primary-500 border-transparent',
            isFocussed
          )
        )}
        defaultValue={text}
        placeholder={placeHolder}
      />
    </div>
  )
}
