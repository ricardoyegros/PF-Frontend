import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGeolocation } from "../../redux/actions/geoActions"


 export function Map() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGeolocation());
  }, [dispatch]);

  const geo = useSelector((state) => state.geoReducer.geo);
  console.log(geo)

  const defaultPosition = {
    lat: -16.495576292607318,
    lng: -68.1334731733453
  };

  const pos = [
    {
      lat: -16.495576292607318,
      lng: -68.1334731733453,
      title: "titulo 1"
    },
    {
      lat: -16.49856239536191,
      lng: -68.12415571869423,
      title: "titulo 2"
    }
  ]

  const containerStyle = {
    width: '830px',
    height: '300px',
    margin: "0 0 0 0",
  };
  const title = "Plazon"
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAOI1Z-IoNqr0_-o0XnWapHbivPg0Hhnj4"
  })
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      { geo &&
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultPosition}
        zoom={13}

      >
        {/* <Marker position={defaultPosition} title={title} /> */}
        {pos.map((p) => (
          
          <Marker position={{ lat: p.lat, lng: p.lng }} title={p.title} />
        ))}
      </GoogleMap>}
    </div>
  )
}

