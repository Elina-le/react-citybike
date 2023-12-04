import React, {useMemo} from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import styles from './Map.module.css';

const Map = (props) => {

    const x = parseFloat(props.x)
    const y = parseFloat(props.y) 
    const center = useMemo(() => ({ lat: y, lng: x }), [x, y]);

    return <div className={styles.map}>
        <GoogleMap mapContainerClassName={styles.mapContainer}
        center={center} 
        zoom={15} 
        options={{streetViewControl: false}}>
            <MarkerF position={{ lat: y, lng: x }}/>
        </GoogleMap>
    </div>
}

export default Map;
