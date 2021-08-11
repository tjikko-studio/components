import React from 'react'

export const List = ({
  items = [],
  Component
}) => {
  console.log(items)
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
