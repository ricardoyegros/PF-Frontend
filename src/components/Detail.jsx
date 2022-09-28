import { Box, Typography , Grid, CardMedia, AppBar, Toolbar, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { getDetailProduct } from "../redux/actions";
import image from "../assets/images/image-detail.png"
import { createTheme } from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import { margin, textAlign } from "@mui/system";



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
          fontSize: 15
        }
      });




    return (
        <ThemeProvider theme={theme}>
        <Box bgcolor={theme.palette.primary.main}>
            <Box borderTop={"solid 1px"} 
            borderBottom={"solid 1px"} 
            bgcolor={"whitesmoke"} 
            borderColor={theme.palette.secondary.main} 
            width={"100%"} 
            height={80}
            display="flex"
            alignItems={"center"}
            justifyContent={"flex-end"}
            >
            <Box 
            display="flex"
            justifyContent={"space-evenly"}
            width="40%">
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
        <Grid container spacing={0}>
        <Grid item xs={6}>
          <Box sx={{
         height:"100vh",
         display:"flex",
         flexDirection:"column",
         alignItems:"center",
         justifyContent:"center",
         textAlign:"justify"
         }}>
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
          <Grid item xs={6}>
          <Box  sx={{
            height:"100vh"}}>
            <CardMedia component={"img"} src={detailProduct.image} sx={{height:"100%"}}/>
          </Box>
          </Grid>
          </Grid>
           <Box sx={{
            backgroundColor:"black",
            height:"100%", width:"100%"}}>
          <Grid container spacing={0}>
          <Grid item xs={6}>
            <Typography variant="h2" align="center" sx={{color:"white",marginTop:10,fontWeight:"700"}}>
            Superior Creating Experience
            </Typography>
            <Typography variant="h4" align="justify" component="p" sx={{color:"white",marginTop:30,marginLeft:15,marginRight:15}}>
            The 13th Gen Intel® Core™ processor family offers faster P-cores and more 
            E-cores with support for DDR4/DDR5 and PCIe 4.0/5.0. That provides a 
            platform that can max out multitasking and choice for configurability.
            </Typography>
            
          </Grid>
          <Grid item xs={6}>
            <CardMedia component={"img"} src={image} height="100%" width="25%"/>
          </Grid>
          </Grid>
          </Box>
          </Box>
          </ThemeProvider>
    )
};