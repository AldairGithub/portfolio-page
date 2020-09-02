import React from 'react'
import './data.css'

export default function Data(props) {

  const { img } = props
  const { title } = props
  const { description } = props
  const { siteLink } = props
  const { codeLink } = props
  return (
    <div className='dataContainer'>
      <img className='portfolioImg' src={img} alt={title}/>
      <div className='textContainer'>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className='portfolio-button-container'>
          <a href={siteLink}
            target='_blank'
            rel='noopener noreferrer'>
            <button className='portfolio-button'>Site</button>
          </a>
          <a href={codeLink}
            target='_blank'
            rel='noopener noreferrer'>
            <button className='portfolio-button'>Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}