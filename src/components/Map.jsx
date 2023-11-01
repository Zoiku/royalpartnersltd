import "../styles/Map.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Map = () => {
  const center = { lat: 5.573825, lng: -0.181943 };
  const markerPosition = { lat: 5.573825, lng: -0.181943 };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  return (
    isLoaded && (
      <GoogleMap mapContainerClassName="map" center={center} zoom={18}>
        <Marker position={markerPosition} />
      </GoogleMap>
    )
  );
};

export default Map;
