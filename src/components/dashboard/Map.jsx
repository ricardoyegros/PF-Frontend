
import { Box , ButtonGroup , Input , Button } from "@mui/material";
import { createBranch } from "../../redux/actions/dashboard-actions/createBranch";
import { useDispatch } from "react-redux";
import Loading from "../Loading";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'

const {API_KEY_GOOGLEMAP} = process.env;
const center = { lat: -34.603683, lng: -58.381557 }
const libraries =  ['places']



 export function Map() {

  let dispatch = useDispatch()

  const [input, setInput] = useState({})
  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)

   const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC6HWG4jjGKymPNCJyTBW0_BJrMkwZ4W_4",
    libraries
  }) 


    function handleChange(e){
      setInput({...input,
        [e.target.name] : e.target.value,
        latitude: directionsResponse && directionsResponse.routes[0].bounds.ab.lo,
        longitude: directionsResponse && directionsResponse.routes[0].bounds.Fa.lo,
        address: originRef.current.value
      })
    }


    function handleSubmit(e){
      e.preventDefault()
      dispatch(createBranch(input))
      setInput({
        "address": " ",
        "name":" ",
        "latitude": " ",
        "longitude": " "

      })
      originRef.current.value = ""
      setDirectionsResponse("")
    }

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()


  const mapContinerStyle = {
    width: '600px',
    height: '400px',
}


  if (!isLoaded) {
    return (
      <Loading/>
    )
  } 

   async function calculateRoute() {
    if (originRef.current.value === '') {
    return
     }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: originRef.current.value,
      // destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    console.log(results.routes[0].bounds)
    console.log(results.routes[0].bounds.ab.lo,"lat")
    console.log(results.routes[0].bounds.Fa.lo,"lng")
  } 

  function clearRoute() {
    
    setDirectionsResponse("")
    originRef.current.value = ''
  }


  return (
    <>
  
     
      
      <Box 
      display={"flex"}
      alignItems={"center"}
      border="2px groove #fdfbfb;">
      <GoogleMap
          center={center}
          zoom={13}
          mapContainerStyle={mapContinerStyle}
          options={{
          zoomControl: false,
          streetViewControl: true,
          mapTypeControl: false,
          fullscreenControl: false,
         }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box> 
      <Box
      mt={5}
      ml={3}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}>
        
          <Box marginBottom={5}>
            <Autocomplete>
              <Input
               placeholder='Calle (Numero)' 
               inputRef={originRef} 
               name="address"
               value={originRef.current && originRef.current.value}
               onChange={handleChange}
             />
            </Autocomplete>
          </Box>
           <Box marginBottom={2}>
          <ButtonGroup>
            <Button type='submit'  onClick={calculateRoute} color={"success"} >
              Buscar
            </Button>
            <Button
            onClick={clearRoute} color={"error"}>Limpiar</Button>
          </ButtonGroup>
          </Box>
        
      </Box>

      <form style={{
       "display": "flex",
       "flexDirection":"column",
       "justifyContent":"center",
       "alignItems":"center",
       "margin":"10px 30px 10px 30px"
       }} onSubmit={handleSubmit}>
        <Input
        label={"Latitud"}
        placeholder="Lat"
        name={"lat"}
        fullWidth
        onChange={handleChange}
        value={directionsResponse && directionsResponse.routes[0].bounds.ab.lo}
        disabled
        ></Input>

        <Input
        label={"Longitud"}
        placeholder="Lng"
        name={"lng"}
        fullWidth
        value={directionsResponse && directionsResponse.routes[0].bounds.Fa.lo}
        onChange={handleChange}
        disabled
        ></Input>
        
        <Input
        label={"Nombre"}
        type={"text"}
        autoComplete={"off"}
        required
        fullWidth
        placeholder="Nombre de sucursal"
        name={"name"}
        value={input.name}
        onChange={handleChange}
        ></Input>
        <Box mt={6} mb={3}>
        <Button type={"submit"} variant={"outlined"}>Cargar</Button>
        </Box>
      </form>
      </>
    
  )
}

