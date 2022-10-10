import { Box, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getDetailProduct } from "../redux/actions";
import { createTheme } from "@mui/material";
import { addToCart } from "../redux/actions/cart-actions";
import { styled } from '@mui/material/styles';
<<<<<<< HEAD
import { clearDetail } from "../redux/actions/detail-actions";
import Loading from "./Loading";
=======
>>>>>>> ffe853a (cambie detail y navbar estilos)
import Reviews from "./Reviews";




const StyledBox = styled(Box)(({ }) => ({
  margin:"40px",
  padding:"40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent:"center",
  flexDirection:"row",
  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"
}));

const StyledBoxPrice = styled(Box)(({ }) => ({
  marginTop:"10px",
  paddingBottom:"5px",
  display:"flex",
  justifyContent:"flex-end",
  alignItems:"center",
  boxShadow: "0px 1px 2px 0px rgba(151, 154, 141, 1)",
  
}));



export default function Detail() {
  const { i } = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(clearDetail())
  },[])


  useEffect(() => {
    dispatch(getDetailProduct(i))
  }, [])



  let detailProduct = useSelector(state => state.detailProductReducer.detailProduct)

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
<<<<<<< HEAD
    {detailProduct.salePrice ?
    <StyledBoxPrice>
    <Box  display={"flex"} alignItems={"center"} justifyContent={"flex-end"} mr={4} >
    <Typography variant={"h5"}  sx={{ marginRight: 3 }}>
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
</StyledBoxPrice> : <Box display={"flex"} justifyContent={"center"} alignItems={"center"} m={50}><Loading/></Box>  }
      
         
{(detailProduct.name && detailProduct.images && detailProduct.description) ?  
<StyledBox >

<Box width={"30%"}
    sx={{display:{
      xs:"none",
      md:"flex"
    }}}
  justifyContent={"center"}
  m={5}   >
  <Box
    component="img"
    src={detailProduct.images && detailProduct.images[0]?.url}
    />
  
</Box>
<Box width={"60%"}
 height={450} 
 display={"flex"}
 flexDirection={"column"}
 alignItems={"flex-start"}
>
    <Typography variant="h6" component="p" >
      {`categoria > ${detailProduct.name && detailProduct.category.name}`}
    </Typography>
    <Typography variant="h4" component="p" marginTop={15}>
      {detailProduct?.name}
    </Typography>
    <Typography variant="h6" component="p" marginTop={4}>
      {`${detailProduct?.description}`}
    </Typography>  
</Box>
</StyledBox> : <Box display={"flex"} justifyContent={"center"} alignItems={"center"} m={50}><Loading/></Box> }
=======
      <StyledBoxPrice>
            <Box  display={"flex"} alignItems={"center"} justifyContent={"flex-end"} mr={4} >
            <Typography variant={"h5"}  sx={{ marginRight: 3 }}>
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
      </StyledBoxPrice>
          
        <StyledBox >

          <Box width={"30%"}
              sx={{display:{
                xs:"none",
                md:"flex"
              }}}
            justifyContent={"center"}
            m={5}   >
            <Box
              component="img"
              src={detailProduct.images && detailProduct.images[0]?.url || 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'}
              />
            
          </Box>
          <Box width={"60%"}
           height={450} 
           display={"flex"}
           flexDirection={"column"}
           alignItems={"flex-start"}
>
              <Typography variant="h6" component="p" >
                {`categoria > ${detailProduct.name && detailProduct.category.name}`}
              </Typography>
              <Typography variant="h4" component="p" marginTop={15}>
                {detailProduct?.name}
              </Typography>
              <Typography variant="h6" component="p" marginTop={4}>
                {`${detailProduct?.description}`}
              </Typography>  
          </Box>
        </StyledBox>
>>>>>>> ffe853a (cambie detail y navbar estilos)
      <Reviews id={i} />
    </>
  )
};