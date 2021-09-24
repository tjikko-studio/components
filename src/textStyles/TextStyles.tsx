// eslint-disable-next-line no-use-before-define
import React, {FC, HTMLAttributes} from 'react'

export interface TextStylesProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Type of heading to display
   */
  type?: 'all' | 'heading' | 'body'

  /**
   * className override
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const TextStyles: FC<TextStylesProps> = ({
  type = 'all',
  className
}) => {
  return (
    <div
      className={`w-full ${className}`}
    >
      <div
        className={`mb-16 ${
          (
            type !== 'all'
            && type !== 'heading'
          ) && 'display: hidden'}`}
      >
        <p className={[
          'fontStyle-lg',
          'uppercase',
          'strong',
          'text-gray-900',
          'dark:text-gray-50',
          'mb-6'
        ].join(' ')}>
          Headings :
        </p>
        <div
          className='bg-gray-50 p-8 mb-4 rounded-2xl'
        >
          <h1 className='fontStyle-9xl text-xxs'>Heading 9x</h1>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-9xl&quot;
          </pre>
        </div>

        <div
          className='bg-gray-50 p-8 mb-4 rounded-2xl'
        >
          <h1 className='fontStyle-8xl'>Heading 8x</h1>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-8xl&quot;
          </pre>
        </div>

        <div
          className='bg-gray-50 p-8 mb-4 rounded-2xl'
        >
          <h1 className='fontStyle-7xl'>Heading 7x</h1>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-7xl&quot;
          </pre>
        </div>

        <div
          className='bg-gray-50 p-8 mb-4 rounded-2xl'
        >
          <h1 className='fontStyle-6xl'>Heading 6x</h1>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-6xl&quot;
          </pre>
        </div>

        <div
          className='bg-gray-50 p-8 mb-4 rounded-2xl'
        >
          <h1 className='fontStyle-5xl'>Heading 5x</h1>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-5xl&quot;
          </pre>
        </div>

        <div
          className='bg-gray-50 p-8 mb-4 rounded-2xl'
        >
          <h1 className='fontStyle-4xl'>Heading 4x</h1>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-4xl&quot;
          </pre>
        </div>

        <div
          className='bg-gray-50 p-8 mb-4 rounded-2xl'
        >
          <h1 className='fontStyle-3xl'>Heading 3x</h1>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-3xl&quot;
          </pre>
        </div>

        <div
          className='bg-gray-50 p-8 mb-4 rounded-2xl'
        >
          <h1 className='fontStyle-2xl'>Heading 2x</h1>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-2xl&quot;
          </pre>
        </div>

        <div
          className='bg-gray-50 p-8 mb-4 rounded-2xl'
        >
          <h1 className='fontStyle-xl'>Heading x</h1>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-xl&quot;
          </pre>
        </div>
      </div>

      <div
        className={`mb-16
                ${(type !== 'all' && type !== 'body') && 'display: hidden'}
              `}
      >
        <p
          className={[
            'fontStyle-lg',
            'uppercase',
            'strong',
            'text-gray-900',
            'dark:text-gray-50',
            'mb-6'
          ].join(' ')}>Base large : </p>
        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-lg'>Base large</p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-lg&quot;
          </pre>
        </div>


        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-base uppercase strong'>Base large strong</p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-lg strong&quot;
          </pre>
        </div>


        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-lg uppercase'>Base large uppercase</p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-lg uppercase&quot;
          </pre>
        </div>

        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-lg uppercase strong'>
            Base Large uppercase strong
          </p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-lg uppercase strong&quot;
          </pre>
        </div>
      </div>

      <div
        className={`mb-16
                ${(type !== 'all' && type !== 'body') && 'display: hidden'}
              `}
      >
        <p className={[
          'fontStyle-base',
          'uppercase',
          'text-gray-900',
          'dark:text-gray-50',
          'mb-6'
        ].join(' ')}>Base : </p>
        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-base'>Base</p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-base&quot;
          </pre>
        </div>


        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-base strong'>Base strong</p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-base strong&quot;
          </pre>
        </div>


        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-base uppercase'>Base uppercase</p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-base uppercase&quot;
          </pre>
        </div>

        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-base uppercase strong'>
            Base uppercase strong
          </p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-base uppercase strong&quot;
          </pre>
        </div>
      </div>

      <div
        className={`mb-16
                ${(type !== 'all' && type !== 'body') && 'display: hidden'}
              `}
      >
        <p className={[
          'fontStyle-sm',
          'uppercase',
          'strong',
          'text-gray-900',
          'dark:text-gray-50',
          'mb-6'
        ].join(' ')}>Base small : </p>
        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-sm'>Base small</p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-sm&quot;
          </pre>
        </div>


        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-sm strong'>Base small strong</p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-sm strong&quot;
          </pre>
        </div>


        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-sm uppercase'>Base small uppercase</p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-sm uppercase&quot;
          </pre>
        </div>

        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-sm uppercase strong'>
            Base small uppercase strong
          </p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-sm uppercase strong&quot;
          </pre>
        </div>
      </div>

      <div
        className={`mb-16
                ${(type !== 'all' && type !== 'body') && 'display: hidden'}
              `}
      >
        <p className={[
          'fontStyle-xs',
          'uppercase',
          'strong',
          'text-gray-900',
          'dark:text-gray-50',
          'mb-6'
        ].join(' ')}>
          Base xsmall :
        </p>
        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-xs'>Base xsmall</p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-xs&quot;
          </pre>
        </div>


        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-xs strong'>Base xsmall strong</p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-xs strong&quot;
          </pre>
        </div>


        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-xs uppercase mb-6'>Base xsmall uppercase</p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-xs uppercase&quot;
          </pre>
        </div>

        <div
          className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
        >
          <p className='fontStyle-xs uppercase strong'>
            Base xsmall uppercase strong
          </p>
          <pre
            className={[
              'inline-block',
              'px-2',
              'py-1.5',
              'mt-2',
              'text-xs',
              'font-mono',
              'bg-gray-100',
              'text-gray-600'
            ].join(' ')}>
            className=&quot;fontStyle-xs uppercase strong&quot;
          </pre>
        </div>
      </div>
    </div>
  )
}
