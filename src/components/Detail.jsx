import { Box, Typography, Grid, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getDetailProduct } from "../redux/actions";
import { createTheme } from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import { addToCart } from "../redux/actions/cart-actions";
import Reviews from "./Reviews";



export default function Detail() {
  const { i } = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(getDetailProduct(i));
  }, [dispatch, i])
  let detailProduct = useSelector(state => state.detailProductReducer.detailProduct)
  // console.log(detailProduct)
  // console.log(i)

  const theme = createTheme({
    palette: {
      primary: {
        // aqui el color primario un gris suave para que el logo se pueda ver.
        main: "#cfcfcf",
        light: "#cfcfcf",
        dark: "#707070"
      },
      secondary: {
        // de secundario un azul suave para evitar que sea muy chocante 
        main: '#4f83cc',
        light: "#4f83cc",
        dark: "#002f6c"
      },
    },
    //aqui aumente un poco el tamaño de todo
    typography: {
      fontSize: 12
    }
  });

  function handleClickButton(e) {
    dispatch(addToCart(i));
    navigate("/shopping-cart")
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box bgcolor={"white"} mb={10} flexGrow={1}>
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
              justifyContent={"flex-end"}
              alignItems={"center"}
              width="50%"
              marginRight={15}>
              <Typography variant={"h5"} sx={{ marginRight: 3 }}>
                Precio
              </Typography>
              <Typography variant={"h5"} sx={{ marginRight: 5 }}>
                {` $ ${detailProduct?.salePrice}`}
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={handleClickButton}
              >Agregar al carrito</Button>
            </Box>
          </Box>
          <Grid container spacing={0} justifyContent="center" alignItems="center" direction="row" wrap="wrap-reverse">
            <Grid item xs="10" sm="auto" xl="3" md="4"  >
              <Box
                component="img"
                src={detailProduct.images && detailProduct.images[0]?.url || 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'}
                sx={
                  {
                    maxHeight: 300,
                    maxWidth: 300,
                    padding: 5
                  }}>
              </Box>
            </Grid>
            <Grid item xs="10" sm="auto" xl="3" md="4" >
              <Box>
                <Typography variant="h6" component="p" marginTop={5}>
                  {`categoria : ${detailProduct.name && detailProduct.category.name}`}
                </Typography>
                <Typography variant="h4" component="p" marginTop={5}>
                  {detailProduct?.name}
                </Typography>
                <Typography variant="h6" component="p" marginTop={4}>
                  {`${detailProduct?.description}`}
                </Typography>

              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
      <Reviews id={i} />
    </>

  )
};