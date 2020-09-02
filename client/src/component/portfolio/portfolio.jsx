import React from 'react'
import './portfolio.css'

import Data from '../portfolio/data/data'

import project1 from './project1.png'
import project2 from './project2.png'
import project3 from './project3.png'
import project4 from './project4.png'

export default function Portfolio() {

  return (
    <>
      <div id='portfolio' className='portfolioContainer'>
        
        <div className='projectContainer'>
          <Data
            codeLink={'https://github.com/AldairGithub/Ecommerce-App'}
            siteLink={'https://ecommerce-marketplace.netlify.app/'}
            img={project3}
            title={'Ecommerce Marketplace'}
            description={'Create and display items other users can buy based on categories as well as price range'}
          />
        </div>

        <div className='projectContainer'>
          <Data
            codeLink={'https://github.com/jpress7639/a-new-space'}
            siteLink={'https://space-tank.netlify.app/'}
            img={project4}
            title={'A New Space'}
            description={'Connects users with a playlist or radio preference centered around the user\'s style'}
          />
        </div>

        <div className='projectContainer'>
          <Data
            codeLink={'https://github.com/AldairGithub/weather-app'}
            siteLink={'https://weather-app-simplified.netlify.app/'}
            img={project2}
            title={'Weather App Simplified'}
            description={'Displays current weather conditions based on current location, allows user to search for weather in other parts of the world'}
          />
        </div>
        
        <div className='projectContainer'>
          <Data
            codeLink={'https://git.generalassemb.ly/acarneiro/random-pokemon-team-generator'}
            siteLink={'https://pages.git.generalassemb.ly/acarneiro/random-pokemon-team-generator/#'}
            img={project1}
            title={'Random Pokemon Generator'}
            description={'Challenges the user by creating a randomized team, with set moves and abilities as well as sprites'}
          />
        </div>

      </div>
    </>
  )
}