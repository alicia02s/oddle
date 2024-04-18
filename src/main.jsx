import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import App from './App.jsx'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import Game from './pages/Game/Game.jsx'
import GameFrontEnd from './pages/GameFrontEnd/GameFrontEnd.jsx';


import './Style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/LandingPage' element={<LandingPage />} />
        <Route exact path='/Game' element={<Game />} />
        <Route exact path='/GameFrontEnd' element={<GameFrontEnd />} />
      </Routes>
    </Router>
    
  </React.StrictMode>,
)
