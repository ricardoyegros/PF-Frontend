import {React, useEffect} from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import {useSelector, useDispatch} from "react-redux";
import { getAllProducts } from "../redux/actions/index.js";
import Card from "./Card";


export default function Home () {

    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.allProducts);
    useEffect(()=>{
        dispatch(getAllProducts());
    }, [dispatch]);
    let products =allProducts.slice(0,5);
    return (
        <div>
            <Navbar/>
            {products?.map((el, i) => <Card key={i} nombre={el.name} imagen={el.image} categoria={el.gender} precio={el.status} rating={el.species}/>)}
            <Footer/>
        </div>
    )
};
