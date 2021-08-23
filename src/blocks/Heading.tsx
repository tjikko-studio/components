import React, {FC, HTMLAttributes} from 'react'
import tw, { styled } from 'twin.macro';

export interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Text semantic tag
   * (It won't be the same for a hero as for section)
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  /**
   * text alignment
   */
  alignment?: 'left' | 'center' | 'right'
  AlignmentTextMaps ?: any

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
export const Heading: FC<HeadingProps> = ({
  level = 'h3',
  alignment = 'left',
  text = '',
  className = ''
}) => {

  const HeaderTag: keyof JSX.IntrinsicElements = level || 'h3'

  const Header = styled(HeaderTag)(({ 
    AlignmentTextMaps = {
      left: tw`w-max`,
      center: tw`text-center`,
      right: tw`text-right`,
    }}: HeadingProps) => [
      tw`w-full`,
      alignment && AlignmentTextMaps[alignment],
      className
    ]
  )

  return (
    <Header className={className} >
      {text}
    </Header>
  )
}
