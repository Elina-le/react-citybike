import React, {useMemo} from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Map = (props) => {

    const x = parseFloat(props.x)
    const y = parseFloat(props.y) 
    const center = useMemo(() => ({ lat: y, lng: x }), []);

    return <div className="map">
        <GoogleMap mapContainerClassName="map-container"
        center={center} 
        zoom={15} 
        options={{streetViewControl: false}}>
            <Marker position={{ lat: y, lng: x }}/>
        </GoogleMap>
    </div>
}

export default Map;
