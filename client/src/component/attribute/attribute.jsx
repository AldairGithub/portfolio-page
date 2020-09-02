import React from 'react'
import './attribute.css'

export default function Attribute(props) {
  const attrVisible = props.isBottom ? 'visible' : 'not-visible'
  return (
    <>
      <div className={`${attrVisible}`}>
        <div className='attribution'>
          <span>Favicon by <a href='https://www.linkedin.com/in/kelly-marray/' target='_blank' rel="noopener noreferrer">Kelly Marray</a></span>
        </div>
        <div className='attribution'>
          <span>Photo by <a href="https://unsplash.com/@dancalders?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target='_blank' rel="noopener noreferrer">Dan Calderwood</a> on <a href="https://unsplash.com/backgrounds/art/smoke?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target='_blank' rel="noopener noreferrer">Unsplash</a></span>
        </div>
        <div className='copyright'>
          <h4>&copy; 2020 Aldair Carneiro</h4>
        </div>
      </div>
    </>
  )
}