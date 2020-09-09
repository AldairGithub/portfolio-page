import React from 'react'
import './footer.css'

import Attribute from '../attribute/attribute'

export default function Footer(props) {
  const pageAtBottom = props.isBottom ? 'attr-visible' : 'attr-not-visible'
  return (
    <div className={` ${pageAtBottom}`}>
      <div className='footer-container'>
        <a className='footer-link' href='#home'>Home</a>
        <a className='footer-link' href='#portfolio'>Portfolio</a>
        <a className='footer-link' href='#contact'>Contact</a>
        <a className='footer-link' href='https://drive.google.com/file/d/14Rrbn_m2MD-HgBEvZYoF-n-il9LKJWzI/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Resume</a>
      </div>
      <Attribute isBottom={props.isBottom}/>
    </div>
    
  )
}