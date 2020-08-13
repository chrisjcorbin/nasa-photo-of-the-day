import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import style from 'styled-components';
import NeObjectCard from './NeObjectCard';

const StyledNeObjectList = style.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`

function NeObjectList() {
    const [neObject, setNeObject] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=GDdo3o23kAIbSuYznvKFkSAdT6PaJE05mDZZIPUa')
        .then(response => {
            console.log(response.data.near_earth_objects)
            setNeObject(response.data.near_earth_objects)
        })
        .catch(error => {
            console.log(error)
        })
    }, []);

    return (
        <StyledNeObjectList>
           {neObject.filter(body => body.is_sentry_object === true).map(filteredBody => {
               return (
                   <NeObjectCard
                   key={filteredBody.id}
                   name={filteredBody.name}
                   orbitDeterminationDate={filteredBody.orbital_data.orbit_determination_date} 
                   firstObservationDate={filteredBody.orbital_data.first_observation_date} 
                   lastObservationDate={filteredBody.orbital_data.last_observation_date}
                   />
               )
           })}
        </StyledNeObjectList>
    )
} 

export default NeObjectList;