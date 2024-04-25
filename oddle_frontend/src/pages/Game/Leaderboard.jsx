import React from 'react'
import axios from 'axios'
import './Leaderboard.css'

function Leaderboard() {
    console.log("api call")
        const date = new Date();
        const dateString = date.toString();
        const chopped_date = dateString.substring(0, 15);
        console.log(date)
        console.log(dateString)
        console.log(chopped_date)

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            // remember to fill in query parameters
            url: `http://localhost:3003/topten?date=${chopped_date}`,
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            //console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });

    function getDailyTopTen() {
        console.log("api call")
        const date = new Date();
        const dateString = date.toString();
        const chopped_date = dateString.substring(0, 15);
        console.log(date)
        console.log(dateString)
        console.log(chopped_date)

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            // remember to fill in query parameters
            url: `http://localhost:3003/topten?date=${chopped_date}`,
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            //console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
    }
  return (

    <div className='popupOverlay'>
        <div className='popupContent'>
            <h2>Oddle Leaderboard</h2>
            <div className='LeaderboardAndFilters'>
                <div className='Filters'></div>
                <ul className='Leaderboard'>
                    <li>user 1</li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default Leaderboard