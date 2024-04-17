import React from 'react'
import './LandingPage.css'

// import oddleLogo from './../public/oddle.svg'
import QuestionMark from '../svg/QuestionMark'
import SettingsIcon from '../svg/SettingsIcon'
import Button from '../components/Button'

function GameFrontEnd() {
  return (
    <div className='GameFrontEndDiv'>
      <div className='Header'>
        <div className='HeaderMenuLeft'>
          <h3>Leaderboard</h3>
          <h3>Level 1</h3>
        </div>
        <div className='HeaderTitle'>
          <h2>Oddle</h2>
        </div>
        <div className='HeaderMenuCenter'>
          <QuestionMark color="#6B6B6B" width="36" height="36" />
          <SettingsIcon color="#6B6B6B" width="36" height="36" />
        </div>
      </div>

      <div className='Game'>
        <h3 className='TaskDescription'>Three of the words relate. Select the odd man out</h3>
        <div>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default GameFrontEnd