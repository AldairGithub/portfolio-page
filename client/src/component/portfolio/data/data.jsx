import React from 'react'

export default function Data(props) {
  const { img } = props
  return (
    <div>
      {/* <img src={ require (`./.${img}`)} /> */}
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}