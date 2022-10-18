import {  Typography , Button , Box, Input  , Alert} from "@mui/material";
import { styled } from '@mui/material/styles';
import { Map } from "./Map";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { deleteBranch } from "../../redux/actions/dashboard-actions/deleteBranch";



const StyledBox = styled(Box)(({ }) => ({
    margin:"40px",
    padding:"4rem 1rem 0 1rem",
    width: "600px",
    display:"flex",
    flexDirection:"column",

    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"
  }));


export function Sucursales(){
    let token = localStorage.token;

    const [data , setData] = useState({})
    let dispatch = useDispatch()

  useEffect(()=> {
         axios.get("https://techstore123.herokuapp.com/geo")
         .then(branches => setData(branches.data))
         .catch(error => console.log(error))
    },[data])



    function handleDelete(e){
        e.preventDefault()
        dispatch(deleteBranch(e.target.value))

    }

//nombre , direcion, longitud , latitud 
    return(
        <>
        <Box display={"flex"} justifyContent={"center"} >
        <StyledBox>
            <Box mb={5}>
            <Typography variant="h3" align="center">
                Crear una sucursal
            </Typography>
            </Box>
            <Map/>
       </StyledBox>
       <StyledBox>
            <Box mb={5}>
            <Typography variant="h3" align="center">
                Sucursales Registradas
            </Typography>
            </Box>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Direccion</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {data.length ? (
        data.map((branch) => (
            <tr >
            <th scope="row">{branch.name}</th>
            <td>{branch.address}</td>
            <td><button type="button" value={branch.id} onClick={handleDelete} class="btn btn-danger">Borrar</button></td>
            </tr>
              
        ))
    ) :  <Box display={"flex"} justifyContent={"center"} alignItems={"center"}><Alert severity="error">No se encontraron sucursales!</Alert></Box> }
  </tbody>
</table>
       </StyledBox>
       </Box>
        </>
    )
}