import React from 'react'
import { styled } from './../stitches.config';
import {Link } from "react-router-dom";

function Button({
    onClick,
    textInButton,
    type,
    size,
    linkTo,
  }) {

  const StyledButton = styled('button', {
    display: "flex",
    justifyContent: "center",
    fontFamily: "sans-serif",

    color: "white",    

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
          py: "$xxxl",
          minWidth: "16rem",
          borderRadius: "$rounded_lg",
          fontSize: "$lg",
          fontWeight: "$bold",
        },
        normal: {
          py: "$lg",
          minWidth: "8rem",
          borderRadius: "$rounded_md",
          fontSize: "$sm",
          fontWeight: "normal",
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

  if (linkTo) {
    return (
      <Link to={linkTo}>
        <StyledButton       
                type={type}
                size={size}
                onClick={onClick}
                style={{margin: 'auto'}}
            > 
          {textInButton}
        </StyledButton>
      </Link>
      
    )
  } else {
    return (
      <StyledButton       
              type={type}
              size={size}
              onClick={onClick}
              style={{margin: 'auto'}}
          > 
        {textInButton}
      </StyledButton>
      
    )
  }
}

export default Button