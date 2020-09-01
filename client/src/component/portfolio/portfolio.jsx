import React from 'react'
import './portfolio.css'

import Data from '../portfolio/data/data'
import Footer from '../footer/footer'

import project1 from './project1.png'
import project2 from './project2.png'
import project3 from './project3.png'
import project4 from './project4.png'

export default function Portfolio() {

  return (
    <>
      <div id='portfolio' className='portfolioContainer'>
        
        <div className='projectContainer'>
          <a
            className='projectLink'
            href='https://ecommerce-marketplace.netlify.app/'
            target='_blank'
            rel="noopener noreferrer">
            <Data
              img={project3}
              title={'Ecommerce Marketplace'}
              description={'Create and display items other users can buy based on categories as well as price range'}
            />
          </a>
        </div>

        <div className='projectContainer'>
          <a
            className='projectLink'
            href='https://space-tank.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'>
            <Data
              img={project4}
              title={'A New Space'}
              description={'Connects users with a playlist or radio preference centered around the user\'s style'}/>
          </a>
        </div>

        <div className='projectContainer'>
          <a
            className='projectLink'
            href='https://weather-app-simplified.netlify.app/'
            target='_blank'
            rel="noopener noreferrer">
            <Data
              img={project2}
              title={'Weather App Simplified'}
              description={'Displays current weather conditions based on current location, allows user to search for weather in other parts of the world'}
            />
          </a>
        </div>
        
        <div className='projectContainer'>
          <a
            className='projectLink'
            href='https://pages.git.generalassemb.ly/acarneiro/random-pokemon-team-generator/#'
            target='_blank'
            rel="noopener noreferrer">
            <Data
              img={project1}
              title={'Random Pokemon Generator'}
              description={'Challenges the user by creating a randomized team, with set moves and abilities as well as sprites'}
            />
          </a>
        </div>

      </div>
      <div className='clear'></div>
      {/* <Footer /> */}
    </>
  )
}