import { TextField, Typography , Button , Box, Divider } from "@mui/material";
import React from "react";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { Map } from "./Map";
import Sidebar from "./Sidebar"


const StyledBox = styled(Box)(({ }) => ({
    margin:"40px",
    padding:"40px",
    display: "flex",
    width: "860px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"
  }));


export function Sucursales(){
    let token = localStorage.token;

    const [input, setInput]= useState({})

    function handleChange(e){
        setInput({...input, [e.target.name] : e.target.value})
    }


    function handleSubmit (e){
        e.preventDefault()
        console.log(input)
        setInput({});
    }


//nombre , direcion, longitud , latitud 
    return(
        <>
        <Sidebar/>
        <Box display={"flex"} justifyContent={"center"}>
           
                <StyledBox>
                <Typography variant="h3" align="center">
                    Crear una sucursal
                    
                </Typography>
                {token ? <form onSubmit={handleSubmit}>
                    <Typography>Nombe de Sucursal</Typography>
                    <TextField
                      label={"Nombre"}
                      required
                      placeholder="Nombre de sucursal"
                      name={"name"}
                      value={input.name}
                      onChange={handleChange}>
                    </TextField>
                    <Typography>Direccion</Typography>
                    <TextField
                        label={"Direccion"}
                        required
                        placeholder="Direccion (calle y numero)"
                        name={"address"}
                        value={input.address}
                        onChange={handleChange}>
                    </TextField>
                    <Divider/>
                    <Button 
                        variant={"contained"}
                        type={"submit"}
                        disabled={!input}>
                        Crear
                    </Button>
                </form> : <Typography>No eres Admin</Typography>  }
                
              <Map/> 
            
        
       </StyledBox>
       </Box>
        </>
    )
}