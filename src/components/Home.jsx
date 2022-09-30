import {React, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { getAllProducts } from "../redux/actions/index.js";
import CardProduct from "./Card";
import { Grid, Typography, Link} from "@mui/material"


export default function Home () {
    const dispatch = useDispatch();
    const products = useSelector(state => state.allProductsReducer.allProducts);
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
            {products?.map((el, i) => 
            <Grid item mb={5}  key={i} >
            <Link href={`/detalle/${i}`} >
            <CardProduct
             nombre={el.name}
             imagen={el.images[0].url}
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