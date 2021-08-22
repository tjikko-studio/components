import React, { FC, HTMLAttributes } from 'react'
import tw, { styled } from 'twin.macro';

const StyledInput = styled.input(({ hasBorder = null }) => [
  `color: black;`,
  hasBorder && tw`border-purple-500`,
])
const Input = () => <StyledInput hasBorder />

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
  text = 'I am a component with linked css style',
  className = '',
}) => { 

  return (
    <div>
      <StyledInput hasBorder />
    </div>
  )
}
