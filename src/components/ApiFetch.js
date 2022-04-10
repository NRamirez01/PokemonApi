import React, {useEffect, useState} from 'react';

import axios from 'axios';

const ApiFetch = (props) => {
    const [responseData, setResponseData] = useState([]);

    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response=>{setResponseData(response.data.results)})
    },[])
    return(
    responseData.map((pokemon, index) => {
        return (
        <ul key={index}>{pokemon.name}</ul>
        )})
    );
}


export default ApiFetch;