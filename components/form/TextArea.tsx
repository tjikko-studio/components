import React, {FC, HTMLAttributes} from 'react'
import {ErrorIcon} from "../svg/Error"
import {ValidatingIcon} from "../svg/Validating"
import {TickIcon} from "../svg/Tick"
import focusClasses from "../../utilities/focusClasses"
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
}

/**
 * Primary UI component for user interaction
 */
export const TextArea: FC<TextAreaProps> = ({
  isDisabled,
  isError,
  isValidating,
  isSuccess,
  label,
  isFocussed,
  text,
  placeholder,
  information,
  error
}) => {
  const textareaClasses = ['dark:bg-gray-800', 'dark:text-white', 'text-base', 'py-3', 'px-4', 'rounded-lg', 'border', 'border-gray-200', 'w-72']
  addDisabledClasses(isDisabled, textareaClasses)
  addErrorClasses(isError, textareaClasses)
  addValidatingClasses(isValidating, textareaClasses)
  if (isValidating) {
    textareaClasses.push('drop-shadow-sm', 'outline-none', 'ring-2', 'border-transparent')
  }
  addSuccessClasses(isSuccess, textareaClasses)
  if (isSuccess) {
    textareaClasses.push('drop-shadow-sm', 'outline-none', 'ring-2', 'border-transparent')
  }
  return (
    <div
      className="flex flex-col gap-y-1 w-72"
    >
      {label &&
        <div
        className={`text-sm font-semibold flex flex-row justify-between dark:text-gray-300 ${isDisabled && "text-gray-500 dark:text-gray-600"}`}
      >
        <p>
          {label}
        </p>
          {(isError && label) && <ErrorIcon color="text-red-600" darkColor="dark:text-red-500" />}
          {(isValidating && label) && <ValidatingIcon color="text-blue-600" darkColor="dark:text-blue-500" />}
          {(isSuccess && label) && <TickIcon color="text-green-600" darkColor="dark:text-green-500" />}
        </div>
      }
      <div
        className="col-span-2"
      >
        <textarea
          className={`${textareaClasses.join(' ')} ${focusClasses('outline-none ring-2 ring-brand-500 border-transparent', isFocussed)}`}
          defaultValue={text}
          placeholder={placeholder}
          disabled={isDisabled}
        />
      </div>
      <div
        className={`text-sm font-normal dark:text-gray-300 ${isDisabled && "text-gray-500 dark:text-gray-600"} `}
      >
        {information}
      </div>
      {isError && (<div className="text-sm font-normal text-red-700">{error}</div>)}
    </div>
  )
}
