import React, { useState, useEffect } from 'react'; 
import style from 'styled-components'; 

const StyledNasaCard = style.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
`


const NasaCard = (props) => {
    return (
        <StyledNasaCard>
            <h2>{props.title}</h2>
                <p>Copyright: {props.copyright} </p> 
            <div>
                <p>{props.description}</p>
            </div>
        </StyledNasaCard>
    )
}

export default NasaCard; 