import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import TickIcon from '/assets/icons/checkbox-circle-fill.svg'
import ErrorIcon from '/assets/icons/information-fill.svg'
import ValidatingIcon from '/assets/icons/loader-2-fill.svg'

import addDisabledClasses from '../../snippets/addDisabledClasses'
import addErrorClasses from '../../snippets/addErrorClasses'
import addSuccessClasses from '../../snippets/addSuccessClasses'
import addValidatingClasses from '../../snippets/addValidatingClasses'
import focusClasses from '../../utilities/focusClasses'

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
   * className override
   */
  className?: string

  columnIndex?: number
}

const DEFAULT_COLUMN_INDEX = 1
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
  columnIndex = DEFAULT_COLUMN_INDEX
}) => {
  const textareaClasses = [
    'form-textarea',
    'fontStyle-base',
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

  addDisabledClasses(isDisabled, textareaClasses)
  addErrorClasses(isError, textareaClasses)
  addValidatingClasses(isValidating, textareaClasses)
  if (isValidating) {
    textareaClasses.push('drop-shadow-sm', 'outline-none', 'ring-2', 'border-transparent')
  }

  addSuccessClasses(isSuccess, textareaClasses)
  if (isSuccess) {
    textareaClasses.push('drop-shadow-sm outline-none ring-2 border-transparent')
  }

  return (
    <>
      {label && (
        <div
          className={cn('fontStyle-sm strong flex flex-row dark:text-gray-300', isDisabled && 'text-gray-500 dark:text-gray-600', 'mb-2')}
          style={{gridArea: `label-${columnIndex}`}}
        >
          <p>{label}</p>
          {isError && <ErrorIcon className="text-red-600 dark:text-red-400" />}
          {isValidating && <ValidatingIcon className="text-blue-600 dark:text-blue-400" />}
          {isSuccess && <TickIcon className="text-green-600 dark:text-green-400" />}
        </div>
      )}
      <div className={`sm:grid-in-control-${columnIndex}`} style={{gridArea: `control-${columnIndex}`}}>
        <textarea
          className={cn(textareaClasses, focusClasses('outline-none ring-2 ring-primary-500 border-transparent', isFocussed))}
          defaultValue={text}
          placeholder={placeholder}
          disabled={isDisabled}
        />
      </div>
      {information && (
        <div
          className={cn(
            `sm:grid-in-info-${columnIndex}`,
            isDisabled && 'text-gray-500 dark:text-gray-600 mt-2',
            'fontStyle-sm min-h-6 flex items-center dark:text-gray-300'
          )}
          style={{gridArea: `info-${columnIndex}`}}
          dangerouslySetInnerHTML={{__html: information}}
        />
      )}
      {isError && (
        <div
          className={cn(
            `sm:grid-in-error-${columnIndex} fontStyle-sm min-h-6 flex`,
            isError ? 'opacity-100' : 'opacity-0',
            'items-center text-red-600 dark:text-red-400 mt-2'
          )}
          style={{gridArea: `error-${columnIndex}`}}
        >
          {error}
        </div>
      )}
    </>
  )
}
