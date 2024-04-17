import React from 'react'
import { styled } from '../../../stitches.config';

function Button({
    buttonFunction,
    textInButton,
    specifiClassName,
    bgColor,
    textColor,
    type,
  }) {
    const StyledButton = styled('button', {
        display: "flex",
        flexDirection: "flex-row",
        alignItems: "items-center",
        justifyContent: "justify-center",
        px: "$xl",
        py: "$lg",
        borderRadius: "$rounded_md",
        text: "$sm",
        fontWeight: "$bold",


        backgroundImage: "linear-gradient(to bottom right, #ff5f69, #68e1fd)",
        color:"black",

        variants: {
        },

        '&:hover': {
            padding: '$xxl'
        },

        '&:focus-visible': {
            outlineStyle: 'solid',
            outlineWidth: '2px',
            outlineOffset: '2px',
        },
    });

  return (
    <StyledButton       
        type={type}
        onClick={buttonFunction}
        css={{
            background: bgColor
            }}
        className={`${specifiClassName}`}> 
        <p className={`text-lg ${textColor}`}> {textInButton} </p>
    </StyledButton>
  )
}

export default Button