import React, {PropsWithChildren, TextareaHTMLAttributes, forwardRef} from 'react'
import cn from 'classnames'

import TickIcon from '/assets/icons/checkbox-circle-fill.svg'
import ErrorIcon from '/assets/icons/information-fill.svg'
import ValidatingIcon from '/assets/icons/loader-2-fill.svg'

import addDisabledClasses from '../../snippets/addDisabledClasses'
import addErrorClasses from '../../snippets/addErrorClasses'
import addSuccessClasses from '../../snippets/addSuccessClasses'
import addValidatingClasses from '../../snippets/addValidatingClasses'
import focusClasses from '../../utilities/focusClasses'
import {gridAreas, isGridAreas} from '../../utilities/gridAreas'

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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

  columnStart?: number
  columnEnd?: number

  /**
   * Dark theme
   */
  dark?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const TextArea = forwardRef<HTMLTextAreaElement, PropsWithChildren<TextAreaProps>>(
  (
    {
      isError = false,
      isDisabled = false,
      isValidating = false,
      isSuccess = false,
      isFocussed = false,
      dark = false,
      label,
      text,
      placeholder,
      information,
      error,
      className,
      columnStart,
      columnEnd
    },
    ref
  ) => {
    const textAreaClasses = [
      'form-textarea',
      'fontStyle-base',
      'py-3',
      'px-4',
      'rounded-lg',
      'border',
      'w-full',
      'bg-gray-50',
      'text-gray-800',
      'border-gray-300'
    ]

    addDisabledClasses(isDisabled, textAreaClasses)
    addErrorClasses(isError, textAreaClasses)
    addValidatingClasses(isValidating, textAreaClasses)
    if (isValidating) {
      textAreaClasses.push('drop-shadow-sm', 'outline-none', 'ring-2', 'border-transparent')
    }

    addSuccessClasses(isSuccess, textAreaClasses)
    if (isSuccess) {
      textAreaClasses.push('drop-shadow-sm outline-none ring-2 border-transparent')
    }

    const Content = () => {
      const labelId = label
      return (
        <>
          {label && (
            <div
              className={cn([
                'relative fontStyle-sm strong flex flex-row',
                isDisabled ? (!dark ? 'text-gray-500' : 'text-gray-600') : !dark ? 'text-gray-900' : 'text-gray-50',
                'mb-2'
              ])}
              style={gridAreas('label', columnStart, columnEnd)}
            >
              <label id={labelId} className="w-full" dangerouslySetInnerHTML={{__html: label}} />
              {isError && <ErrorIcon className="absolute right-0 text-red-600 dark:text-red-400" />}
              {isValidating && <ValidatingIcon className="absolute right-0 text-blue-600 dark:text-blue-400" />}
              {isSuccess && <TickIcon className="absolute right-0 text-green-600 dark:text-green-400" />}
            </div>
          )}
          <div role="presentation" className={`sm:grid-in-control-${columnStart}`} style={gridAreas('control', columnStart, columnEnd)}>
            <textarea
              ref={ref}
              className={cn(textAreaClasses, focusClasses('outline-none ring-2 ring-primary-500 border-transparent', isFocussed))}
              defaultValue={text}
              placeholder={placeholder}
              disabled={isDisabled}
              aria-labelledby={labelId}
            />
          </div>
          {information && (
            <div
              className={cn(
                `sm:grid-in-info-${columnStart}`,
                isDisabled && 'text-gray-500 dark:text-gray-600 mt-2',
                'fontStyle-sm min-h-6 flex items-center'
              )}
              style={gridAreas('info', columnStart, columnEnd)}
              dangerouslySetInnerHTML={{__html: information}}
            />
          )}
          {isError && (
            <div
              className={cn(
                `sm:grid-in-error-${columnStart} fontStyle-sm min-h-6 flex`,
                isError ? 'opacity-100' : 'opacity-0',
                'items-center text-red-600 dark:text-red-400 mt-2'
              )}
              style={gridAreas('error', columnStart, columnEnd)}
              dangerouslySetInnerHTML={{__html: error}}
            />
          )}
        </>
      )
    }

    if (isGridAreas(columnStart, columnEnd)) {
      return <Content />
    }
    return (
      <div className={cn('flex flex-col', className)}>
        <Content />
      </div>
    )
  }
)
