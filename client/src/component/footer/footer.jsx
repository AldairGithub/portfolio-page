import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer-position'>
      <div className='footer-container'>
        <Link to='/'>Home</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/contact'>Contact Me</Link>
      </div>

      <div className='attribution-container'>
        <div className='attribution'>
          <span>Favicon by <a href='https://www.linkedin.com/in/kelly-marray/' target='_blank' rel="noopener noreferrer">Kelly Marray</a></span>
        </div>
        <div className='attribution'>
          <span>Photo by <a href="https://unsplash.com/@dancalders?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target='_blank' rel="noopener noreferrer">Dan Calderwood</a> on <a href="https://unsplash.com/backgrounds/art/smoke?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target='_blank' rel="noopener noreferrer">Unsplash</a></span>
        </div>
        <div className='attribution'>
          Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target='_blank' rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target='_blank' rel="noopener noreferrer"> www.flaticon.com</a>
        </div>
      </div>
      
    </div>
  )
}