import React, {FC, InputHTMLAttributes} from 'react'
import cn from 'classnames'

import TickIcon from '/assets/icons/checkbox-circle-fill.svg'
import ErrorIcon from '/assets/icons/information-fill.svg'
import ValidatingIcon from '/assets/icons/loader-2-fill.svg'

import addDisabledClasses from '../../snippets/addDisabledClasses'
import addErrorClasses from '../../snippets/addErrorClasses'
import addSuccessClasses from '../../snippets/addSuccessClasses'
import addValidatingClasses from '../../snippets/addValidatingClasses'
import focusClasses from '../../utilities/focusClasses'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
   * input value
   */
  value?: string

  /**
   * placeholder text
   */
  placeholder?: string

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
  isSuccess?: boolean

  /**
   * disabled
   */
  isDisabled?: boolean

  /**
   * Custom Classes
   */
  className?: string

  columnIndex?: number
}

const DEFAULT_COLUMN_INDEX = 1

/**
 * Primary UI component for user interaction
 */
export const Input: FC<InputProps> = ({
  isError = false,
  isDisabled = false,
  isValidating = false,
  isSuccess = false,
  isFocussed = false,
  label,
  text,
  placeholder,
  information,
  error,
  className = '',
  columnIndex = DEFAULT_COLUMN_INDEX,
  value,
  onChange
}) => {
  const labelContainerClasses = [
    'fontStyle-sm',
    'min-h-6',
    'strong',
    'flex',
    'items-center',
    'flex-row',
    'justify-between',
    'dark:text-gray-300',
    'mb-2'
  ]
  const inputClasses = [
    'form-input',
    'fontStyle-base',
    'h-12',
    'max-h-12',
    'py-3',
    'px-4',
    'rounded-lg',
    'border',
    'w-full',
    'bg-gray-50',
    'dark:bg-gray-700',
    'text-gray-800',
    'dark:text-gray-100',
    'border-gray-300',
    'dark:border-gray-600'
  ]

  addDisabledClasses(isDisabled, inputClasses)
  if (isDisabled) {
    // See safelist in tailwind.safelist.js
    labelContainerClasses.push('text-gray-500 dark:text-gray-600')
  }

  addErrorClasses(isError || isValidating || isSuccess, inputClasses)
  if (isError || isValidating || isSuccess) {
    inputClasses.push('drop-shadow-sm', 'outline-none', 'ring-2', 'dark:ring-red-500', 'ring-red-600', 'border-transparent')
  }

  addValidatingClasses(isValidating, inputClasses)
  addSuccessClasses(isSuccess, inputClasses)

  return (
    <>
      {label && (
        <div className={cn(labelContainerClasses)} style={{gridArea: `label-${columnIndex}`}}>
          <p>{label}</p>
          {isError && <ErrorIcon className="w-4 h-4 text-red-600 dark:text-red-400" />}
          {isValidating && <ValidatingIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
          {isSuccess && <TickIcon className="w-4 h-4 text-green-600 dark:text-green-400" />}
        </div>
      )}
      <div className={`sm:grid-in-control-${columnIndex}`} style={{gridArea: `control-${columnIndex}`}}>
        <input
          className={cn(inputClasses, focusClasses('outline-none ring-2 ring-primary-500 border-transparent', isFocussed))}
          value={value}
          onChange={onChange}
          defaultValue={text}
          placeholder={placeholder}
          disabled={isDisabled}
        />
      </div>
      {information && (
        <div className={`sm:grid-in-info-${columnIndex} mt-2`} style={{gridArea: `info-${columnIndex}`}}>
          <div
            className={cn('fontStyle-sm min-h-6 flex items-center dark:text-gray-300', isDisabled && 'text-gray-500 dark:text-gray-600')}
            dangerouslySetInnerHTML={{__html: information}}
          />
        </div>
      )}
      {isError && (
        <div className={`grid-in-error-${columnIndex} mt-2`} style={{gridArea: `error-${columnIndex}`}}>
          <div
            className={cn([
              'fontStyle-sm',
              'min-h-6',
              'flex',
              'items-center',
              'text-red-600',
              'dark:text-red-400',
              isError ? 'opacity-100' : 'opacity-o'
            ])}
          >
            {error}
          </div>
        </div>
      )}
    </>
  )
}
