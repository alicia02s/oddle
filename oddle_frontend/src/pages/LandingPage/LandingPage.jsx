import React from 'react'
import './LandingPage.css'

import oddleLogo from './../../../public/oddle.svg'
import Button from '../../components/Button'

function LandingPage() {
  return (
    <div className='LandingPageDiv'>
      <img src={oddleLogo} className="logo react" alt="React logo"/>
      <div className='wavy'>
        <span style={{ '--i': '1'}}>O</span>
        <span style={{ '--i': '2'}}>D</span>
        <span style={{ '--i': '3'}}>D</span>
        <span style={{ '--i': '4'}}>L</span>
        <span style={{ '--i': '5'}}>E</span>
        <span style={{ '--i': '6'}}>!</span>
      </div>
      <h2>Given X words, select the word out.</h2>
      <Button textInButton="Play Oddle" color="normal" size="normal" linkTo="/Game" />

      <h4>April 11, 2024</h4>
      <h4>No. 0</h4>
      <h4>Edited by Rahl</h4>
    </div>
  )
}

export default LandingPage