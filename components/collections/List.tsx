import React from 'react'

export const List = ({
  items = [],
  Component
}) => {
  return (
    <>
      {items.map((props) => {
        return (
          <Component key={JSON.stringify(props)} {...props} />
        )
      })}
    </>
  )
}
