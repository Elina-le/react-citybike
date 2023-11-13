import React, {useState, useEffect} from "react";
import StationService from "../../services/stations";
import { Link } from 'react-router-dom';
import Loading from '../Loading';

const StationList = () => {

    const [stationData, setStationData] = useState([]);
    const [searchItem, setSearchItem] = useState("")
    const [filteredStations, setFilteredStations] = useState([])
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        StationService.getAll().then(data => {
            setStationData(data);
            setFilteredStations(data);
            setLoading(false);
        })
    },[])

    const handleSearchInputChange = (event) => {
        const searchTerm = event.target.value;
        setSearchItem(searchTerm)
   
        const filteredItems = stationData.filter((station) =>
        station.nimi.toLowerCase().includes(searchTerm.toLowerCase()))

        setFilteredStations(filteredItems);
    }

    return (
        <div>
            <h1>Station List</h1>
            <input
                type="text"
                value={searchItem}
                onChange={handleSearchInputChange}
                placeholder='Type to search'
            />

            { loading ? <Loading /> : filteredStations.map(data => 
                (<p key={data.id}><Link to={`/stations/${data.id}`} state={{...data}}>{data.nimi}</Link></p>)
            )}
        </div>
    )
}

export default StationList;