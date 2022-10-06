import { ImagesearchRoller } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import Cart from "../components/Cart"
import { loadState } from "../localStorage/localStorage";


export default function ShoppingCart () {
    let cart = useSelector((state) => state.shoppingCartReducer.cart)
    const data = loadState()
    console.log(data.storage)


    return (
        <>
            <h1>Carrito de Compras</h1>
         {data.storage.cart.length ? 
             data.storage.cart?.map((products, i) => 
             <Cart
              key={i} 
              id={products.id} 
              name={products.name}
              salePrice={products.salePrice}
              stock={products.stock}
              quantity={products.quantity}
              image={products.images[0]?.url ||
                  "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"}/> ) :<p> Cargando Carrito...</p>} 
        </>
    )
};