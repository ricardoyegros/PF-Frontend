import { TextField, Typography , Button , Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { GoogleMap } from "./Map"


const StyledBox = styled(Box)(({ }) => ({
    margin:"40px",
    padding:"40px",
    display: "flex",
    width: "600px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"
  }));


export function Sucursales(){

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
        <StyledBox>
            <Typography variant="h3" align="center">
                Crear una sucursal
            </Typography>
            <form onSubmit={handleSubmit}>
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
                 <Button 
                 variant={"contained"}
                  type={"submit"}
                disabled={!input}>
                     Crear
                    </Button>
            </form>
       {/*   <GoogleMap/> */}
       </StyledBox>
        </>
    )
}