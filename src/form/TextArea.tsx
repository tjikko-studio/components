import React, {FC, HTMLAttributes} from 'react'
import ErrorIcon from '/assets/icons/information-fill.svg'
import ValidatingIcon from '/assets/icons/loader-2-fill.svg'
import TickIcon from '/assets/icons/checkbox-circle-fill.svg'
import focusClasses from '../../utilities/focusClasses'
import addDisabledClasses from '../../snippets/addDisabledClasses'
import addErrorClasses from '../../snippets/addErrorClasses'
import addValidatingClasses from '../../snippets/addValidatingClasses'
import addSuccessClasses from '../../snippets/addSuccessClasses'

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
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string

  columnIndex?: number

  controlStyle?: any
}

/**
 * Primary UI component for user interaction
 */
export const TextArea: FC<TextAreaProps> = ({
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
  columnIndex = 1
}) => {
  const textareaClasses = ['form-textarea fontStyle-base py-3 px-4 rounded-lg border w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600']
  addDisabledClasses(isDisabled, textareaClasses)
  addErrorClasses(isError, textareaClasses)
  addValidatingClasses(isValidating, textareaClasses)
  if (isValidating) {
    textareaClasses.push('drop-shadow-sm outline-none ring-2 border-transparent')
  }
  addSuccessClasses(isSuccess, textareaClasses)
  if (isSuccess) {
    textareaClasses.push('drop-shadow-sm outline-none ring-2 border-transparent')
  }
  return (
    <>
      <div
        className={`fontStyle-sm strong flex flex-row dark:text-gray-300 ${isDisabled && 'text-gray-500 dark:text-gray-600'}`}
        style={{gridArea: `label-${columnIndex}`}}
      >
        <p>
          {label}
        </p>
        {(isError) && <ErrorIcon className='text-red-600 dark:text-red-400' />}
        {(isValidating) && <ValidatingIcon className='text-blue-600 dark:text-blue-400' />}
        {(isSuccess) && <TickIcon className='text-green-600 dark:text-green-400' />}
      </div>
      <div
        className={`sm:grid-in-control-${columnIndex}`}
        style={{gridArea: `control-${columnIndex}`}}
      >
        <textarea
          className={`${textareaClasses.join(' ')} ${focusClasses('outline-none ring-2 ring-primary-500 border-transparent', isFocussed)}`}
          defaultValue={text}
          placeholder={placeholder}
          disabled={isDisabled}
        />
      </div>

      <div
        className={`sm:grid-in-info-${columnIndex} fontStyle-sm min-h-6 flex items-center dark:text-gray-300 ${isDisabled && 'text-gray-500 dark:text-gray-600'}`}
        style={{gridArea: `info-${columnIndex}`}}
        dangerouslySetInnerHTML={{__html: information}}
      >
      </div>
      <div
        className={`sm:grid-in-error-${columnIndex} ${isError ? 'opacity-100' : 'opacity-0'} fontStyle-sm min-h-6 flex items-center text-red-600 dark:text-red-400`}
        style={{gridArea: `error-${columnIndex}`}}
      >
        {error}
      </div>
    </>
  )
}
