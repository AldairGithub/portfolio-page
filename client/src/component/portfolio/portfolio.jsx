import React from 'react'

import Data from '../portfolio/data/data'
import Footer from '../footer/footer'

import project1 from './project1.png'

export default function Portfolio() {
  return (
    <>
      <p>this is the portfolio page</p>
      <div>
        {/* <img src={ require('./project1.png')} /> */}
        <img src={require(project1)} />
        <Data
          // img={project1}
          title={'Random Pokemon Generator'}
          description={'Challenges the user by creating a randomized team, with set moves and abilities as well as sprites'}
        />
      </div>
      <Footer />
    </>
  )
}