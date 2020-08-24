import React from 'react'

import Data from '../portfolio/data/data'
import Footer from '../footer/footer'

import project1 from './project1.png'

export default function Portfolio() {
  return (
    <>
      <div>
        <Data
          img={project1}
          title={'Random Pokemon Generator'}
          description={'Challenges the user by creating a randomized team, with set moves and abilities as well as sprites'}
        />
      </div>
      <Footer />
    </>
  )
}