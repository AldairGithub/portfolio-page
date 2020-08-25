import React from 'react'

export default function Data(props) {
  const dataContainer = {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
  }
  const portfolioImg = {
    float: 'left',
    width: '300px',
    height: '50%'
  }

  const textContainer = {
    width: '30%',
    fontSize: '80%',
    marginLeft: '30px',
  }

  const { img } = props
  const { title } = props
  const { description } = props
  return (
    <div style={dataContainer}>
      <img style={portfolioImg} src={img} alt={title}/>
      <div style={textContainer}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}