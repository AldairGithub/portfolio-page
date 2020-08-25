import React from 'react'

import GitHubIcon from './GitHub-Mark-32px.png'
import LinkedInIcon from './linkedin.png'

import Footer from '../footer/footer'

export default function Contact() {
  const contactContainer = { 
    marginTop: '10%',
    marginLeft: '10%'
  }
  const title = { 
    marginBottom: '50px'
  }
  const paragraph = {
    margin: '0',
    padding: '0'
  }
  const iconContainer = {
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'flex-start'
  }
  const imgContainer = {
    marginRight: '20px'
  }
  const attribution = { 
    marginBottom: '10px',
    marginLeft: '20px',
    fontSize: '20%',
    position: 'fixed',
    bottom: '0'
  }
  return (
    <>
    <div style={contactContainer}>
      <div>
        <h1 style={title}>Contact Me</h1>
        <p style={paragraph}>Business Inquiries:</p>
        <p style={paragraph}>aldaircarneirovera@gmail.com</p>
      </div>
        <div style={iconContainer}>
          <a href='https://github.com/AldairGithub' target='_blank' rel="noopener noreferrer">
            <img style={imgContainer} src={GitHubIcon} alt={'GitHub Icon Link'}/>
          </a>
          <a href='https://www.linkedin.com/in/aldair-carneiro/' target='_blank' rel="noopener noreferrer">
            <img style={imgContainer} src={LinkedInIcon} alt={'LinkedIn Icon Link'}/>
          </a>
      </div>
    </div>
      
    <div style={attribution}>
      Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </div>
    <Footer />
    </>
  )
}