import React, { FC, HTMLAttributes } from 'react'
import tw, { styled } from 'twin.macro';


export interface TestComponentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * text to show as question
   */
  text?: string
  hasBorder?: boolean
  alignment?: string,
  AlignmentTextMaps ?: any,

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
  hasBorder,
  alignment
}) => { 
  const HeaderTag: keyof JSX.IntrinsicElements = 'h3'

  const Text = styled(HeaderTag)(({ 
    AlignmentTextMaps = {
      default: tw`opacity-40`,
      left: tw`text-left`,
      center: tw`text-center`,
      right: tw`text-right`,
    }}: TestComponentProps) => [
      tw`w-full`,
      hasBorder && tw`border border-red-500`,
      alignment &&  AlignmentTextMaps[alignment]
    ]
  )

  return (
    <div>
      <Text>
        {text}
      </Text>
    </div>
  )
}
