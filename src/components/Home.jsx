import {React, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { getAllProducts } from "../redux/actions/index.js";
import CardProduct from "./Card";
import { Grid, Typography, Link} from "@mui/material"


export default function Home () {
    const dispatch = useDispatch();
    const products = useSelector(state => state.allProductsReducer.allProducts);
    const item = useSelector(state => state.searchReducer.productItem)
    console.log(products,"all")
    console.log(item,"item")
    useEffect(()=>{
        dispatch(getAllProducts());
    }, [dispatch]);
    return (
        <div>
            <Typography m={2} variant="h3" align="center" >Productos</Typography>
            <Grid container spacing={6} justifyContent="center" >
            <Grid item>  
              <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non iusto omnis illum laboriosam ea inventore assumenda aspernatur explicabo minima repellat sunt consequuntur adipisci officia, debitis voluptatum nam! Repellat, quod earum.</Typography>
            </Grid>
            {!item.length ? products.map((el, i) => 
            <Grid item mb={5}  key={i} >
            <Link href={`/detalle/${i}`} >
            <CardProduct
             nombre={el.name}
             imagen={el.images.length > 0 ? el.images[0].url : "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"}
             categoria={el.category.name}
             precio={el.salePrice}
             marca={el.brand.name}/>
             </Link>
             </Grid>
             ) : item.map((el, i) => 
             <Grid item mb={5}  key={i} >
             <Link href={`/detalle/${i}`} >
             <CardProduct
              nombre={el.name}
              imagen={el.images.length > 0 ? el.images[0].url : "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"}
              categoria={el.category.name}
              precio={el.salePrice}
              marca={el.brand.name}/>
              </Link>
              </Grid>
              )}
             </Grid>
        </div>
    )
};