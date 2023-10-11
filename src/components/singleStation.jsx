import React from "react";
import { useLocation } from 'react-router-dom';

const SingleStation = () => {

    let { state } = useLocation();
    console.log(state)

    return (
        <div>
            <h1>Single Station</h1>

            <p>Station name: {state.nimi}</p>
            <p>Address: {state.adress}</p>
            <p>City: {state.kaupunki}</p>
        </div>
    )
}

export default SingleStation;