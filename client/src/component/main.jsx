import React from 'react'
import { Route } from 'react-router-dom'

import Home from './home/home'
import Portfolio from './portfolio/portfolio'
import Contact from './contact/contact'

export default function Main() {
  return (
    <main>
      <Route exact path='/' render={() => (
        <Home />
      )} />
      <Route exact path='/portfolio' render={() => (
        <Portfolio />
      )} />
      <Route exact path='/contact' render={() => (
        <Contact />
      )} />
    </main>
  )
} 