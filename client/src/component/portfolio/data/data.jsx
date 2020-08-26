import React from 'react'
import './data.css'

export default function Data(props) {

  const { img } = props
  const { title } = props
  const { description } = props
  return (
    <div className='dataContainer'>
      <img className='portfolioImg' src={img} alt={title}/>
      <div className='textContainer'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}