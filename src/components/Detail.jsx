import { Box, Typography , Grid, CardMedia, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { getDetailProduct } from "../redux/actions";
import { createTheme } from "@mui/material";
import { ThemeProvider } from '@emotion/react';




export default function Detail () {
    const { i } = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDetailProduct(i));
    },[dispatch,i])
    let detailProduct = useSelector(state =>state.detailProductReducer.detailProduct )
    console.log(detailProduct)

    const theme = createTheme({
        palette: {
          primary: {
            // aqui el color primario un gris suave para que el logo se pueda ver.
            main: "#cfcfcf",
            light:"#cfcfcf",
            dark:"#707070"
          },
          secondary: {
            // de secundario un azul suave para evitar que sea muy chocante 
            main: '#4f83cc',
            light:"#4f83cc",
            dark:"#002f6c"
          },
        },
        //aqui aumente un poco el tamaño de todo
        typography : {
          fontSize: 12
        }
      });




    return (
        <ThemeProvider theme={theme}>
        <Box bgcolor={"white"} mb={10}>
            <Box 
            borderBottom={"solid 1px"} 
            bgcolor={"whitesmoke"} 
            borderColor={theme.palette.primary.main} 
            width={"100%"} 
            height={80}
            display="flex"
            alignItems={"center"}
            justifyContent={"flex-end"}
            >
            <Box 
            display="flex"
            justifyContent={"space-evenly"}
            width="50%">
            <Typography variant={"h5"}>
                Price
            </Typography>
            <Typography variant={"h5"} >
                {`$ ${detailProduct.status}`}
            </Typography>
            {/* falta onclick funcion para añadir a carrito */}
            <Button 
            variant="contained"
            size="large"
             >Add to Cart</Button>
            </Box>
            </Box>
        <Grid container spacing={12} justifyContent="center" alignItems="center" >
          <Grid item>
          <Box>
            <CardMedia component={"img"} src={detailProduct.image} sx={{height:"20rem", width:"20rem"}}/>
          </Box>
          </Grid>
          <Grid item>
          <Box>
            <Typography variant="subtitle1" component="p">
                 {`categoria : ${detailProduct.gender}`}
            </Typography>
            <Typography variant="h4" component="p"  marginTop={10}>
                 {detailProduct.name}
            </Typography>
            <Typography variant="h6" component="p"  marginTop={10}>
                 {` Aqui deberia ir descripcion: ${detailProduct.species}`}
            </Typography>

          </Box>
          </Grid>
          </Grid>
          </Box>
          </ThemeProvider>
    )
};