import React, { FC, HTMLAttributes } from 'react'
import tw, { css, styled } from 'twin.macro';


export interface TestComponentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Text semantic tag
   * (It won't be the same for a hero as for section)
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

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
  level = 'h3',
  text = 'I am a component with linked css style',
  hasBorder = false,
  alignment = 'left',
  className = 'underline' // classnames don't work with twin macro
}) => { 
  
  const HeaderTag: keyof JSX.IntrinsicElements = level || 'h3'
  const Header = styled(HeaderTag)(({ 
    AlignmentTextMaps = {
      left: tw`w-max`,
      center: tw`text-center`,
      right: tw`text-right`,
    }}: TestComponentProps) => [
      tw`w-full`,
      alignment && AlignmentTextMaps[alignment],
    ]
  )

  const Input = tw.input`border border-black`

  return (
    <div>
      <Header tw="border hover:border-black" >
        {text}
      </Header>
      <Input />
    </div>
  )
}
