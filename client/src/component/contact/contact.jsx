import React from 'react'
import './contact.css'

import GitHubIcon from './GitHub-Mark-32px.png'
import LinkedInIcon from './linkedin.png'

import Footer from '../footer/footer'

export default function Contact() {
  return (
    <>
    <div className='contactContainer'>
      <div>
        <h1 className='title'>Contact Me</h1>
        <p className='paragraph'>Business Inquiries:</p>
        <p className='paragraph'>aldaircarneirovera@gmail.com</p>
      </div>
        <div className='iconContainer'>
          <a href='https://github.com/AldairGithub' target='_blank' rel="noopener noreferrer">
            <img className='imgContainer' src={GitHubIcon} alt={'GitHub Icon Link'}/>
          </a>
          <a href='https://www.linkedin.com/in/aldair-carneiro/' target='_blank' rel="noopener noreferrer">
            <img className='imgContainer' src={LinkedInIcon} alt={'LinkedIn Icon Link'}/>
          </a>
      </div>
    </div>

    <Footer />
    </>
  )
}