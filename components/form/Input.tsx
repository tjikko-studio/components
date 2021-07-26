import React, {FC, HTMLAttributes} from 'react'
import ErrorIcon from '../../assets/icons/information-fill.svg'
import ValidatingIcon from '../../assets/icons/loader-2-fill.svg'
import TickIcon from '../../assets/icons/checkbox-circle-fill.svg'
import focusClasses from '../../utilities/focusClasses'
import addDisabledClasses from '../../snippets/addDisabledClasses'
import addErrorClasses from '../../snippets/addErrorClasses'
import addValidatingClasses from '../../snippets/addValidatingClasses'
import addSuccessClasses from '../../snippets/addSuccessClasses'

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
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

}

/**
 * Primary UI component for user interaction
 */
export const Input: FC<InputProps> = ({
  label,
  isError = false,
  isDisabled,
  isValidating,
  isSuccess,
  isFocussed,
  text,
  placeholder,
  information,
  error
}) => {
  const labelContainerClasses = ['text-sm', 'font-semibold', 'flex', 'flex-row', 'justify-between', 'dark:text-gray-300']
  const inputClasses = ['bg-gray-50', 'dark:bg-gray-800', 'dark:text-white', 'text-base', 'h-12', 'max-h-12', 'py-3', 'px-4', 'rounded-lg', 'border', 'border-gray-200', 'w-72']
  addDisabledClasses(isDisabled, inputClasses)
  if (isDisabled) {
    labelContainerClasses.push('text-gray-500', 'dark:text-gray-600')
  }
  addErrorClasses(isError || isValidating || isSuccess, inputClasses)
  if (isError || isValidating || isSuccess) {
    inputClasses.push('drop-shadow-sm', 'outline-none', 'ring-2', 'dark:ring-red-500', 'ring-red-600', 'border-transparent')
  }
  addValidatingClasses(isValidating, inputClasses)
  addSuccessClasses(isSuccess, inputClasses)

  return (
    <div
      className='flex flex-col gap-y-1 w-72'
    >
      {label &&
        <div
        className={labelContainerClasses.join(' ')}
      >
        <p>
          {label}
        </p>
        {(isError) && <ErrorIcon className='text-red-600 dark:text-red-500' />}
        {(isValidating) && <ValidatingIcon className='text-blue-600 dark:text-blue-500' />}
        {(isSuccess) && <TickIcon className='text-green-600 dark:text-green-500' />}
        </div>
      }
      <div className='col-span-2'>
        <input
          className={`${inputClasses.join(' ')} ${focusClasses('outline-none ring-2 ring-brand-500 border-transparent', isFocussed)}`}
          defaultValue={text}
          placeholder={placeholder}
          disabled={isDisabled}
        />
      </div>
      <div
        className={`text-sm ont-normal dark:text-gray-300 ${isDisabled && 'text-gray-500 dark:text-gray-600'}`}
      >
        {information}
      </div>
      {isError && (<div className='text-sm font-normal text-red-700'>{error}</div>)}
    </div>
  )
}
