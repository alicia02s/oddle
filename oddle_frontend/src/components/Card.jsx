import React from "react"
import { styled } from './../stitches.config';
import Placeholder from 'react-bootstrap/Placeholder';

// function Card(props){
//     const oddle = "oddle"
//     return(
//         <div className="card" onClick={props.onClick}>
//             <h1>{props.card_word}</h1>  
//             <h2>{props.isOddle && oddle}</h2> 
//         </div>
        
//     )
// }

function Card({
    key,
    card_word,
    isOddle,
    onClick,
    type,
    size,
    placeHolder
  }) {
    const oddle = "oddle"
    
    const StyledButton = styled('button', {
        display: "flex",
        justifyContent: "center",
        // px: "$xxxl",
        py: "$xxxl",
        minWidth: "16rem",
        borderRadius: "$rounded_lg",

        fontFamily: "sans-serif",
        fontSize: "$lg",
        fontWeight: "$bold",
        color: "white",
        border: "none",

        variants: {
        type: {
            selected: {
                backgroundColor: '#9593FF',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'darkviolet',
                },
            },
            normal: {
                backgroundColor: '#ECECEC',
                color: 'black',
                '&:hover': {
                    backgroundColor: 'lightgray',
                },
            },
        },
        size: {
            game: {
            
            },
            else: {
            
            },
        },
        },

        // '&:hover': {
        //     padding: '$xxl',
        // },

        '&:focus': {
            outline: 'none',
            // outlineStyle: 'solid',
            // outlineWidth: '2px',
            // outlineOffset: '2px',
        },
    });

    return (
        <StyledButton       
            type={type}
            size={size}
            onClick={onClick}
        > 
            {!placeHolder && card_word}
            {placeHolder && <Placeholder 
          style={{
            width: "75%",
            display: "inline-block",
            minHeight: "1em",
            opacity: "1",
            backgroundColor: "#DDD8D8"}} animation="wave" size="lg" />}
        </StyledButton>
    )
}

export default Card