import {React, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { getAllProducts } from "../redux/actions/index.js";
import CardProduct from "./Card";
import {Grid, Typography, Link} from "@mui/material"


export default function Home () {
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.allProductsReducer.allProducts);
    useEffect(()=>{
        dispatch(getAllProducts());
    }, [dispatch]);
    let products =allProducts.slice(0,6);
    return (
        <div>
            <Typography m={2} variant="h3" align="center" >Productos</Typography>
            <Grid  mb={5} container spacing={12} justifyContent="center">
            {products?.map((el, i) => 
            <Grid item key={i} >
            <Link href={`/detalle/${i}`} >
            <CardProduct
             nombre={el.name}
             imagen={el.image}
             categoria={el.gender}
             precio={el.status}
             rating={el.species}/>
             </Link>
             </Grid>
             )}
             </Grid>
        </div>
    )
};