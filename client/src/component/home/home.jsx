import React from 'react'
import './home.css'

export default function Home() {
  return (
    <div className='home-container'>
      <div>
        <img className='self' src={ require('./SELF.JPG')} />
      </div>
      <div className='title-container'>
        <h1>Hello! My name is Aldair Carneiro</h1>
        <h1>Software Engineer / Web Developer</h1>
      </div>
      <div className='description-container'>
        <p>With a background in law and customer experience, I love to focus on user-friendly experience and create web applications using React.js</p>
      </div>
    </div>
  )
}