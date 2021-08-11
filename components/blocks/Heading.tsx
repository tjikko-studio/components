import React, { FC, HTMLAttributes } from 'react'

export interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * text to show as question
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
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
  level,
  text,
  className
}) => {
  const Content = () => {
    switch(level){
      case 'h1':
        return <h1 className={`${className}`} >{text}</h1>
      case 'h2':
        return <h2 className={`${className}`} >{text}</h2>
      case 'h3':
        return <h3 className={`${className}`} >{text}</h3>
      case 'h4':
        return <h4 className={`${className}`} >{text}</h4>
      case 'h5':
        return <h5 className={`${className}`} >{text}</h5>
      case 'h6':
        return <h6 className={`${className}`} >{text}</h6> 
      default:
        return <span className={`${className}`} >{text}</span>
    }
  }
  return (
    <>
      <Content />
    </>
  )
}
