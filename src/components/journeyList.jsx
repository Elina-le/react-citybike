import React, {useState, useEffect} from "react";
import JourneyService from "../services/journeys";

const JourneyList = () => {

    const [journeyData, setJourneyData] = useState([])

    useEffect(() => {
        JourneyService.getAll().then(data => {
            setJourneyData(data)
            console.log(data)
        })
    },[])

    return (
        <div>
            <h1>Journeys</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Departure Station</th>
                        <th scope="col">Return Station</th>
                        <th scope="col">Covered Distance km</th>
                        <th scope="col">Duration Sec</th>
                    </tr>
                </thead>
                {journeyData.map(data => (
                    <tbody>
                        <tr key={data.id}>
                            <td>{data.departureStationName}</td>
                            <td>{data.returnStationName}</td>
                            <td>{data.kilometers}</td>
                            <td>{data.minutes}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default JourneyList;