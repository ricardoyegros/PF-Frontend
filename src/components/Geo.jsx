
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGeolocation } from "../redux/actions/geoActions"
import { Box, Typography , Alert} from "@mui/material"
import Loading from './Loading';
const {
  API_KEY_GOOGLEMAP
} = process.env


function Geo() {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGeolocation());
  }, [dispatch]);

  const geo = useSelector((state) => state.geoReducer.geo);

  
  const defaultPosition = {
    lat: -34.607510000000005,
    lng: -58.44661000000001
  };


  const containerStyle = {
        width: '600px',
        height: '400px',  
}



  const { isLoaded } = useLoadScript({
    googleMapsApiKey:"AIzaSyC6HWG4jjGKymPNCJyTBW0_BJrMkwZ4W_4"
  })
  if (!isLoaded) return <div><Loading/></div>;


  function codingUrl(string){
      let convertString = [string].map((word) => word.split(" ").join("+").split(",").join("%2C"))
    return convertString
  }

  return (
    <>
<Box
display={"flex"}
justifyContent={"center"}
alignItems={"center"}
m={5}
  >
<div class="container">
<div class="shadow-lg p-2 mb-5 bg-white rounded">
  <Box
  display={"flex"}
  justifyContent={"center"} 
  alignItems={"center"}
  mt={5}
  mb={3}
  ml={3}>
  <Typography variant='h4' >Encuentra tu sucursal mas cercana</Typography>
  </Box>
  <div class="container-fliud" 
  style={{
    "width":"100%",
    "height":"100%",
    "padding":"2rem"
     }}>
    <div class="wrapper row">
      <div class="col-md-6" 
      style={{
      "display": "flex",
      "justifyContent":"flex-end",
      "maxWidth":"40rem"
      
      }}>
        
       { geo &&
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultPosition}
        zoom={11}

      >
        {/* <Marker position={defaultPosition} title={title} /> */}
        {geo.map((p) => (
          
          <Marker position={{ lat: p.latitude, lng: p.longitude }} title={p.name} />
        ))}
      </GoogleMap>}
      
      </div>
      <div class=" col-md-6" >
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Direccion</th>
    </tr>
  </thead>
  <tbody>
    {geo.length ? (
        geo.map((branch) => (
            <tr >
            <th scope="row">{branch.name}</th>
            <td> <a href={`https://www.google.com/maps/search/?api=1&query=${codingUrl(branch.address)}`} target="_blanck"
               style={{"color":"inherit"}}>
            {branch.address}</a></td>
           
            </tr>
          
        ))
    ) :  <Box display={"flex"} justifyContent={"center"} alignItems={"center"}><Alert severity="error">No se encontraron sucursales!</Alert></Box> }
  </tbody>
</table>

        </div>
      </div>
    </div>
  </div>
</div>
</Box>
    </>
  )
}

export default Geo
