import React, {useState, useEffect} from "react";
import StationService from "../services/stations";

//Importataan linkki
import { Link} from 'react-router-dom';

const StationList = () => {

    const [stationData, setStationData] = useState([]);
 
    useEffect(() => {
        StationService.getAll().then(data => {
            setStationData(data)
            console.log(data)
        })
    },[])

    return (
        <div>
            <h1>Station List</h1>

            {stationData.map(data => (
           
                <p key={data.id}><Link to={`/stations/${data.id}`} state={{...data}}>{data.nimi}</Link></p>
                     /* <p key={data.id}><Link to={`/stations/${data.id}`}>{data.nimi}</Link></p> */
            ))}

            {/* <Link to='/singleStation'>sinkku2</Link> */}
            {/* {stationData.map(data => (
                <p key={data.id}>{data.nimi}</p>
            ))} */}
        </div>
    )
}

export default StationList;