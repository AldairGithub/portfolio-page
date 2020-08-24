import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer-position'>
      <div className='footer-container'>
        <Link to='/'>Home</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link path='#'>Contact Me</Link>
      </div>
    </div>
  )
}