import React from 'react'
import './LandingPage.css'

import oddleLogo from './../../../public/oddle.svg'
import Button from '../../components/Button'

function LandingPage() {
  return (
    <div className='LandingPageDiv'>
      <img src={oddleLogo} className="logo react" alt="React logo"/>
      <h1 className='OddleTitle'>Oddle</h1>
      <h2>Given X words select the odd word out.</h2>
      <Button textInButton="Play Oddle" color="normal" size="normal" linkTo="/Game" />

      <h4>April 11, 2024</h4>
      <h4>No. 0</h4>
      <h4>Edited by Rahl</h4>
    </div>
  )
}

export default LandingPage