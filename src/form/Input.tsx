import React, {FC, HTMLAttributes} from 'react'
import ErrorIcon from '/assets/icons/information-fill.svg'
import ValidatingIcon from '/assets/icons/loader-2-fill.svg'
import TickIcon from '/assets/icons/checkbox-circle-fill.svg'
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
  
  /**
    * Custom Classes
    */
  className?: string
}

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
  className,
}) => {
  const labelContainerClasses = ['fontStyle-sm min-h-6 strong flex items-center flex-row justify-between dark:text-gray-300']
  const inputClasses = ['form-input fontStyle-base h-12 max-h-12 py-3 px-4 rounded-lg border w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600']
  addDisabledClasses(isDisabled, inputClasses)
  if (isDisabled) {
    labelContainerClasses.push('text-gray-500 dark:text-gray-600')
  }
  addErrorClasses(isError || isValidating || isSuccess, inputClasses)
  if (isError || isValidating || isSuccess) {
    inputClasses.push('drop-shadow-sm outline-none ring-2 dark:ring-red-500 ring-red-600 border-transparent')
  }
  addValidatingClasses(isValidating, inputClasses)
  addSuccessClasses(isSuccess, inputClasses)

  return (
    <div
      className={`flex flex-col gap-y-1 w-72 ${className}`}
    >
      {label &&
        <div
        className={labelContainerClasses.join(' ')}
      >
        <p>
          {label}
        </p>
        {(isError) && <ErrorIcon className='text-red-600 dark:text-red-400' />}
        {(isValidating) && <ValidatingIcon className='text-blue-600 dark:text-blue-400' />}
        {(isSuccess) && <TickIcon className='text-green-600 dark:text-green-400' />}
        </div>
      }
      <input
        className={`${inputClasses.join(' ')} ${focusClasses('outline-none ring-2 ring-primary-500 border-transparent', isFocussed)}`}
        defaultValue={text}
        placeholder={placeholder}
        disabled={isDisabled}
      />
      {
        (information) && 
          <div
            className={`fontStyle-sm min-h-6 flex items-center dark:text-gray-300 ${isDisabled && 'text-gray-500 dark:text-gray-600'}`}
            dangerouslySetInnerHTML={{ __html: information }}
          >
          </div>
          
      }
      {isError && (<div className='fontStyle-sm min-h-6 flex items-center text-red-600 dark:text-red-400'>{error}</div>)}
    </div>
  )
}
