import React, {FC, HTMLAttributes} from 'react'

export interface BlockQuoteProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * speech to display on BlockQuote
   */
  speech?: string
  /**
   * avatar to display on BlockQuote
   */
  avatarUrl?: string
  /**
   * alternate string for avatar
   */
  avatarAlt?: string
  /**
   * customer name to display on BlockQuote
   */
  customerName?: string
}

/**
 * Primary UI component for user interaction
 */
export const BlockQuote: FC<BlockQuoteProps> = ({
  speech = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  avatarUrl = '',
  avatarAlt = '',
  customerName = 'Maria Lopez, VP of Design at Meshery'
}) => {

  return (
    <div className='flex flex-col space-y-6 text-gray-900 dark:text-gray-50'
    >
      <p
        className={`font-normal text-lg text-center text-brand-900 dark:text-brand-50`}

      >“{speech}”</p>
      <img
        className="w-20 h-20 mx-auto rounded-full"
        src={avatarUrl}
        alt={avatarAlt}
      />
      <p className={`text-xs text-center uppercase`}>{customerName}</p>
    </div>
  )
}
