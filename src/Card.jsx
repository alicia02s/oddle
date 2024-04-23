import React from "react"

function Card(props){
    const oddle = "oddle"
    return(
        <div className="card" onClick={props.onClick}>
            <h1>{props.card_word}</h1>  
        </div>
        
    )
}

export default Card