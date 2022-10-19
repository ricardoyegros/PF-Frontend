import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getDetailProduct } from "../redux/actions";
import { createTheme } from "@mui/material";
import { addToCart } from "../redux/actions/cart-actions";
import { styled } from '@mui/material/styles';
import { clearDetail } from "../redux/actions/detail-actions";
import Loading from "./Loading";
import Reviews from "./Reviews";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from "axios";





const StyledBoxPrice = styled(Box)(({}) => ({
    marginTop: "10px",
    paddingBottom: "5px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    boxShadow: "0px 1px 2px 0px rgba(151, 154, 141, 1)",
}));

export default function Detail() {
    const { i } = useParams();

    let dispatch = useDispatch();
    let navigate = useNavigate();

    
    let allReviews = useSelector((state)=> state.reviewsDashReducer.reviews)
    
    const  [data, setData] = useState({})
    useEffect( async ()=>{
      try {
      let product = await axios.get( `https://techstore123.herokuapp.com/products/${i}`)
        setData(product.data)
      } catch (error) {
        console.log(error)
      }
      
    },[])




    useEffect(() => {
        dispatch(clearDetail());
    }, []);

    useEffect(() => {
        dispatch(getDetailProduct(i));
    }, []);



  let detailProduct = useSelector(state => state.detailProductReducer.detailProduct)


    function handleClickButton(e) {
        dispatch(addToCart(i));
        navigate("/shopping-cart");
    }



  return (
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
  <Reviews id={i} /> 
	</div> 
  </Box>
    
  )
};




/* {detailProduct.salePrice ?
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
    <Reviews id={i} /> */