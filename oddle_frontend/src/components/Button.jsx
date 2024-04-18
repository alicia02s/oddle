import React from 'react'
import { styled } from './../stitches.config';

function Button({
    buttonFunction,
    textInButton,
    type,
    size,
  }) {

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
        onClick={buttonFunction}
        style={{margin: 'auto'}}
    > 
        {textInButton}
    </StyledButton>
  )
}

export default Button