import React from 'react'

import Data from '../portfolio/data/data'
import Footer from '../footer/footer'

import project1 from './project1.png'

export default function Portfolio() {
  const title = {
    textAlign: 'center',
    marginTop: '150px'
  }
  return (
    <>
      <div>
        <h1 style={title}>Portfolio</h1>
        <Data />
        <a
          href='https://pages.git.generalassemb.ly/acarneiro/random-pokemon-team-generator/#'
          target='_blank'
        >
        <Data
          img={project1}
          title={'Random Pokemon Generator'}
          description={'Challenges the user by creating a randomized team, with set moves and abilities as well as sprites'}
          />
        </a>
      </div>
      <Footer />
    </>
  )
}