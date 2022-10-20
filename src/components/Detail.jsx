import { Box , Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getDetailProduct } from "../redux/actions";
import { createTheme } from "@mui/material";
import { addToCart } from "../redux/actions/cart-actions";
import { clearDetail } from "../redux/actions/detail-actions";
import Reviews from "./Reviews";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from "axios";






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
        dispatch(addToCart(detailProduct.name));
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
            <div style={{"margin": "3rem 1rem 3rem 1rem"}}>
              {detailProduct.stock > 0 ? <Button variant="outlined" color={"success"}><CheckCircleIcon/>Disponible</Button> : <Button variant="outlined"  color={"error"}><CancelIcon/>No disponible</Button>}
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
					   {detailProduct.stock > 0 ? <Button color="success"  onClick={handleClickButton}><ShoppingCartIcon fontSize={"large"}/></Button> : <Button color="success" disabled onClick={handleClickButton}><ShoppingCartIcon fontSize={"large"}/></Button>}	
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
