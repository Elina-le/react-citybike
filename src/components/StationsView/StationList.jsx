import React, {useState, useEffect} from "react";
import StationService from "../../services/stations";
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { useErrorBoundary } from 'react-error-boundary'
import styles from './StationList.module.css';
import Button from '../Button';


const StationList = () => {

    const { showBoundary } = useErrorBoundary();
    const [stationData, setStationData] = useState([]);
    const [searchItem, setSearchItem] = useState("")
    const [filteredStations, setFilteredStations] = useState([])
    const [loading, setLoading] = useState(true);

    const loadData = () => {
        StationService.getAll().then(data => {
            setStationData(data);
            setFilteredStations(data);
            setLoading(false);
        }).catch(error => {
            showBoundary(error)
        });
    }

    useEffect(() => {
        loadData()
    },[])

    const handleSearchInputChange = (event) => {
        const searchTerm = event.target.value;
        setSearchItem(searchTerm)
        const filteredItems = stationData.filter((station) =>
        station.nimi.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredStations(filteredItems);
    }

    const clearInput = () => {
        setSearchItem("");
        setFilteredStations(stationData)
    }

    const handleCityClick = selectedCity => () => {
        console.log(selectedCity);
        const cityFilteredStations = selectedCity ? stationData.filter((station) => station.kaupunki === selectedCity) : stationData;
        console.log(cityFilteredStations)
        setFilteredStations(cityFilteredStations);
    }

    return (
        <div className={styles.stationsSection}>
            <div className={styles.leftAlignContainer}>
                <h1>Stations</h1>
                <input className={styles.input}
                    type="text"
                    value={searchItem}
                    onChange={handleSearchInputChange}
                    placeholder='Type to search'
                />
                <div>
                    <Button text="All Stations" backgroundColor="#0174be" color="white" width="126px" margin="0 10px 0 0" onClick={clearInput}/>
                    <Button text="Helsinki" backgroundColor="#035ba4" color="white" width="126px" margin="0 10px 0 0" onClick={handleCityClick("Helsinki")}/>
                    <Button text="Espoo" backgroundColor="#035ba4" color="white" width="126px" margin="0" onClick={handleCityClick("Espoo")}/>
                </div>
                <div className={styles.linkContainer}>
                    { loading ? <Loading /> : filteredStations.map(data => 
                        (<p className={styles.stationLink} key={data.id}>
                            <Link className={styles.link} to={`/stations/${data.id}`} state={{...data}}>{data.nimi}</Link>
                        </p>)
                    )}
                </div>
            </div>
        </div>
    )
}

export default StationList;