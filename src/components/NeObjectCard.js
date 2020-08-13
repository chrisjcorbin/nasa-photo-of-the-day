import React from 'react'; 
import style from 'styled-components'; 

const StyledNeObjectCard = style.div`
display: flex;
flex-direction: column;
border: 1px solid rebeccapurple; 
width: 40%;
align-items: center;
align-content: center;
margin: 2% 0;
`


const NeObjectCard = (props) => {

    return (
        <StyledNeObjectCard className='NeObjectCard'>
            <h3>Near-Earth Object Name: {props.name}</h3>
            <h4>Orbit Determination Date: {props.orbitDeterminationDate}</h4>
            <div>
                <p>First Observation Date: {props.firstObservationDate}</p>
                <p>Last Observation Date: {props.lastObservationDate}</p>
            </div>
        </StyledNeObjectCard>
    )
}

export default NeObjectCard;