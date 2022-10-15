import { Box , ButtonGroup , IconButton, Input , Button } from "@mui/material"


import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'

const center = { lat: -25.288520000000002, lng: -57.72285000000001 }

 export function Map() {

/*   const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC6HWG4jjGKymPNCJyTBW0_BJrMkwZ4W_4",
    libraries: ['places'],
  }) */

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  // const [distance, setDistance] = useState('')
  // const [duration, setDuration] = useState('')

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  // const destiantionRef = useRef()
/* 
  if (!isLoaded) {
    return <h2>Is Loading</h2>
  } */

/*   async function calculateRoute() {
    // if (originRef.current.value === '' || destiantionRef.current.value === '') {
    //   return
    // }
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
    console.log(results.routes[0].bounds.ab.lo)
    console.log(results.routes[0].bounds.Fa.lo)
    // setDistance(results.routes[0].legs[0].distance.text)
    // setDuration(results.routes[0].legs[0].duration.text)
  } */

  function clearRoute() {
    setDirectionsResponse(null)
    // setDistance('')
    // setDuration('')
    originRef.current.value = ''
    // destiantionRef.current.value = ''
  }

  return (
    <Box
      display={"flex"}
      flexDirection='column'
      alignItems='center'
      h='80vh'
      w='80vw'
    >
     {/* Google Map Box */}
      <div className='container'>
        <GoogleMap
          center={"center"}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
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
      </div> 
      <Box
        p={1}
        m={1} 
      >
        <Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input type='text' placeholder='Origin' ref={originRef} />
            </Autocomplete>
          </Box>
          {/* <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
              />
            </Autocomplete>
          </Box> */}

          <ButtonGroup>
            <Button colorScheme='pink' type='submit' /*  onClick={calculateRoute}  */>
              Search
            </Button>
            <Button
            onClick={clearRoute}>Cerrar</Button>
              
             
           

          </ButtonGroup>
        </Box>
        {/* <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
          />
        </HStack> */}
      </Box>
    </Box>
    
  )
}