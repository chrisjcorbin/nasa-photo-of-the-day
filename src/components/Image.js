import React, { useState, useEffect }  from 'react';
import style from 'styled-components'; 

const StyledImage = style.div`
    display: flex;
    justify-content: center;
    margin-top: 1.25%;
    margin-bottom: 1.25%;
    img {
        height: 38vh;
    }
`

const Image = props => {
    return (
                <StyledImage><img 
                src={props.url}
                alt="NASA Astronomy Picture of the Day"
                /></StyledImage>
    );
}


export default Image;