import React, { useState } from 'react'

import Home from './home/home'
import Portfolio from './portfolio/portfolio'
import Contact from './contact/contact'
import Footer from './footer/footer'

export default function Main() {
  let [isBottom, setIsBottom] = useState(false)
  
  window.addEventListener('scroll', function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setIsBottom(true)
    } else { 
      setIsBottom(false)
    }
  })
  
  return (
    <main>
      <Home />
      <Portfolio />
      <Contact />
      <Footer isBottom={isBottom} setIsBottom={setIsBottom}/>
    </main>
  )
} 