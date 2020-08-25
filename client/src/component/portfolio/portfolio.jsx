import React from 'react'

import Data from '../portfolio/data/data'
import Footer from '../footer/footer'

import project1 from './project1.png'
import project2 from './project2.png'
import project3 from './project3.png'

export default function Portfolio() {
  const title = {
    textAlign: 'center',
  }
  const projectContainer = {
    marginBottom: '40px'
  }
  
  const projectLink = {
    textDecoration: 'none',
    color: 'black'
  }
  return (
    <>
      <div>
        <h1 style={title}>Portfolio</h1>
        <div style={projectContainer}>
          <a
            style={projectLink}
            href='https://ecommerce-marketplace.netlify.app/'
            target='_blank'>
            <Data
              img={project3}
              title={'Ecommerce Marketplace'}
              description={'Create and display items other users can buy based on categories as well as price range'}
            />
          </a>
        </div>

        <div style={projectContainer}>
          <a
            style={projectLink}
            href='https://weather-app-simplified.netlify.app/'
            target='_blank'>
            <Data
              img={project2}
              title={'Weather App Simplified'}
              description={'Displays current weather conditions based on current location, allows user to search for weather in other parts of the world'}
            />
          </a>
        </div>
        
        <div style={projectContainer}>
          <a
            style={projectLink}
            href='https://pages.git.generalassemb.ly/acarneiro/random-pokemon-team-generator/#'
            target='_blank'>
            <Data
              img={project1}
              title={'Random Pokemon Generator'}
              description={'Challenges the user by creating a randomized team, with set moves and abilities as well as sprites'}
            />
          </a>
        </div>

      </div>
      <Footer />
    </>
  )
}