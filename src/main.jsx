import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import App from './App.jsx'
import LandingPage from './LandingPage.jsx'
import Game from './Game.jsx'

import './Style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/LandingPage' element={<LandingPage />} />
        <Route exact path='/Game' element={<Game />} />
      </Routes>
    </Router>
    
  </React.StrictMode>,
)
