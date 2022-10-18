import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGeolocation } from "../redux/actions/geoActions"
import { Box, Typography , Alert} from "@mui/material"


function Geo() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGeolocation());
  }, [dispatch]);

  const geo = useSelector((state) => state.geoReducer.geo);
  console.log(geo)
  
  const defaultPosition = {
    lat: -34.607510000000005,
    lng: -58.44661000000001
  };


  const containerStyle = {
        width: '600px',
        height: '400px',  
}



  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAOI1Z-IoNqr0_-o0XnWapHbivPg0Hhnj4"
  })
  if (!isLoaded) return <div>Loading...</div>;

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
        zoom={13}

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
            <td> <a href={`https://www.google.com/maps/@${branch.latitude},${branch.longitude},11z`} target="_blanck"
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

/* 
<Box
display={"flex"}
justifyContent={"center"}
alignItems={"center"}
m={5}
  >
<div class="container">
<div class="shadow-lg p-2 mb-5 bg-white rounded">
  <div class="container-fliud">
    <div class="wrapper row">
      <div class="col-md-6" 
      style={{
      "display": "flex",
      "justifyContent":"center",
      "alignItems":"center"}}>
          <div id="pic-1"><img src={detailProduct.images && detailProduct.images[0].url} style={{"maxWidth":"20rem","marginBottom":"0.5rem"}} /></div>
      </div>
      <div class="details col-md-6">
        <h3 class="product-title" style={{"margin": "3rem 1rem 3rem 1rem","textAlign":"justify"}}>{detailProduct.name && detailProduct.name}</h3>
        <div class="rating">
          <div class="stars">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          <span class="review-no" style={{"margin":"2rem 0 2rem 1rem"}}>41 reviews</span>
        </div>
        <p class="product-description" style={{"margin":"2rem 0 2rem 1rem"}}>{detailProduct.description && detailProduct.description}</p>
        <h4 class="price" style={{"margin":"4rem 0 2rem 1rem"}}>Precio actual <span>${detailProduct.salePrice && detailProduct.salePrice}</span></h4>
          <div class="action-buttons" 
          style={{
           "display":"flex",
           "gap":"5rem", 
           "flexDirection": "row",
           "justifyContent":"center",
           "margin":"4rem 0 2rem 0"}}>
        <Button color="success"  onClick={handleClickButton}><ShoppingCartIcon fontSize={"large"}/></Button>
        <Button color="error"><FavoriteBorderIcon fontSize={"large"}/></Button>
        </div>
      </div>
    </div>
  </div>
</div>
</div> 
<Reviews id={i} /> 
</Box> */