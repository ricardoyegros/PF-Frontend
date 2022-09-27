import {React, useEffect, useState} from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import {useSelector, useDispatch} from "react-redux";
import { getAllProducts } from "../redux/actions/index.js";
import Card from "./Card";
import CategoryFilter from "./CategoryFilter.jsx";
import Pagination from "@mui/material/Pagination";
import './Styles/cards.css'


export default function Home () {
    const allProducts = useSelector(state => state.allProducts);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1)
    const cardsPerPage = 5
    const lastProduct = currentPage * cardsPerPage
    const firstProduct = lastProduct - cardsPerPage
    const amountOfProducts = allProducts.slice(firstProduct, lastProduct)

    useEffect(()=>{
        dispatch(getAllProducts());
    }, [dispatch]);

    // let products = allProducts.slice(0,5);

    const handleOnChange = (e, page) => {
        console.log(e, page)
        e.preventDefault();
        setCurrentPage(page)
    }
    return (
        <div>
            <Navbar/>
            <Pagination count={Math.ceil(allProducts.length/cardsPerPage)} onChange={handleOnChange} />
            <CategoryFilter productsPerPage={amountOfProducts} paginate={setCurrentPage} />
            <div className="cards-box">
                {amountOfProducts?.map((el, i) => 
                    <Card 
                        key={i} 
                        nombre={el.name} 
                        imagen={el.image} 
                        categoria={el.gender} 
                        precio={el.status} 
                        rating={el.species}
                    />
                )}
            </div>
            <Footer/>
        </div>
    )
};
