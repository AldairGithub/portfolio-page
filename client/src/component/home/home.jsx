import React from 'react'
import './home.css'

import GitHubIcon from './GitHub-Mark-32px.png'
import LinkedInIcon from './linkedin.png'

export default function Home() {
  
  return (
    <>
      <div className='img-container'>
        <img className='self' src={require('./IMG_1610.jpeg')} alt={'Aldair Carneiro Selfie'}/>
      </div>

      <div id='home' className='home-container'>
        

        
      <div className='title-container'>
        <div className='title'>
          <h1 className='title-name'>ALDAIR CARNEIRO</h1>
          <h1 className='title-role'>Software Engineer / Web Developer</h1>
          </div>

          <div className='iconContainer'>
          <a href='https://github.com/AldairGithub' target='_blank' rel="noopener noreferrer">
            <img className='imgContainer' src={GitHubIcon} alt={'GitHub Icon Link'}/>
          </a>
          <a href='https://www.linkedin.com/in/aldair-carneiro/' target='_blank' rel="noopener noreferrer">
            <img className='imgContainer' src={LinkedInIcon} alt={'LinkedIn Icon Link'}/>
          </a>
        </div> 
           
        <div className='description-container'>
          <p>With a background in law and customer experience, I love to focus on user-friendly experience and create web applications using React.js</p>
        </div>
          
      </div>
      
      <div className='clear'></div>
    </div>
    </>
  )
}