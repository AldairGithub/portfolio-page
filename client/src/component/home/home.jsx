import React from 'react'
import './home.css'

import Footer from '../footer/footer'

export default function Home() {
  
  return (
    <>
    <div className='home-container'>
      <div>
        <img className='self' src={require('./SELF.JPG')} alt={'Aldair Carneiro Selfie'}/>
      </div>
      <div className='title-container'>
        <h1 className='title-name'>Aldair Carneiro</h1>
        <h1 className='title-role'>Software Engineer / Web Developer</h1>
      </div>
      <div className='description-container'>
        <p>With a background in law and customer experience, I love to focus on user-friendly experience and create web applications using React.js</p>
      </div>

      <Footer />

    </div>
      
      <div className='attribution'>
        <span>Photo by <a href="https://unsplash.com/@dancalders?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target='_blank' rel="noopener noreferrer">Dan Calderwood</a> on <a href="https://unsplash.com/backgrounds/art/smoke?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target='_blank' rel="noopener noreferrer">Unsplash</a></span>
      </div>
    </>
  )
}