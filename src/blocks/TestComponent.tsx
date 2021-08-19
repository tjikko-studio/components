import tw, { css } from 'twin.macro'

import React, { FC, HTMLAttributes } from 'react'


export interface TestComponentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * text to show as question
   */
  text?: string

  /**
   * Additional space-separated class names to append
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const TestComponent: FC<TestComponentProps> = ({
  text,
  className
}) => {
  return (
    <div css={[tw`inline-block bg-red-200 p-12 rounded-xl text-2xl`]} >
      I am a component with linked css style
    </div>
  )
}