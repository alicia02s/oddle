import React from 'react'
import './style.css'

// import oddleLogo from './../public/oddle.svg'
import QuestionMark from '../../svg/QuestionMark'
import SettingsIcon from '../../svg/SettingsIcon'
import Button from '../../components/Button'

function GameFrontEnd() {
  return (
    <div className='GameFrontEndDiv'>
      <div className='Header'>
        <div className='HeaderMenuLeft'>
          <h3>Leaderboard</h3>
          <h3>Level 1</h3>
        </div>

        <div className='HeaderTitleMenu'>
          <h2 className='HeaderTitle'>Oddle
            <div className='HeaderMenus'>
              <QuestionMark color="#6B6B6B" width="36" height="36" />
              <SettingsIcon color="#6B6B6B" width="36" height="36" />
            </div>
          </h2>
          
        </div>
        

      </div>

      <div className='Game'>
        <h3 className='TaskDescription'>Three of the words relate. Select the odd man out</h3>
        <div className='Options'>
          {/* Soon I will just map out the options! */}
          <Button textInButton={"normal-game"} type="normal" size="game" />
          <Button textInButton={"selected-game"} type="selected" size="game" />
          <Button textInButton={"bob"} type="selected" size="game" />
          <Button textInButton={"choice4"} type="selected" size="game" />
          <Button textInButton={"long word very long. MORE LONG"} type="selected" size="game" />
        </div>
      </div>
    </div>
  )
}

export default GameFrontEnd