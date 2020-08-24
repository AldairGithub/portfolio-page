import React from 'react'

export default function Data(props) {
  const dataContainer = {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center'
  }
  const portfolioImg = {
    float: 'left',
    width: '300px',
    height: '50%'
  }

  const { img } = props
  return (
    <div style={dataContainer}>
      <img style={portfolioImg} src={img} />
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}