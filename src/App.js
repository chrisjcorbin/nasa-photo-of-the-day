import './App.css';
import React, { useState, useEffect } from 'react' ;
import axios from 'axios';

import Image from './components/Image'
import NasaCard from './components/NasaCard'
import NeObjectList from './components/NeObjectList'

export default function App() {
    const [nasaData, setNasaData] = useState([]); 

    console.log(nasaData);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?date=2020-08-12&api_key=GDdo3o23kAIbSuYznvKFkSAdT6PaJE05mDZZIPUa')
        .then(res => {
            // console.log(res)
            setNasaData(res.data)
        })
        .catch(err => {
            console.log(err)
    })
}, [])

return (
    <div>
        <Image url={nasaData.url}/>
        <NasaCard title={nasaData.title} copyright={nasaData.copyright} description={nasaData.explanation}/>
        <NeObjectList />
    </div>
)
}