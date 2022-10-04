import React from "react";
import {useDispatch} from "react-redux";
import { handleReduce1, addToCart, clearCart } from "../redux/actions/cart-actions";

export default function Cart ({name, salePrice, image, stock, id, quantity}) {
    let dispatch = useDispatch();    
    function handleButton (e){
        if(quantity > 1)
        dispatch(handleReduce1(id))
    }
    function handleButton2 (e){
        dispatch(addToCart(id))
    }
    function handleButton3 (e){
        dispatch(clearCart())
    }

    return (
        <>
            <h1>{name}</h1>
            <h3>${salePrice}.00</h3>
            <img src={image} />
            <h4>Stock:{stock}</h4>
            <h4>Quantity: {quantity}</h4>
            <h4>Sub-Total: ${salePrice * quantity}.00</h4>
            <button onClick={handleButton}>Quitar uno</button>
            <button onClick={handleButton2}>Sumar uno</button>
            <button onClick={handleButton3}>Limpiar todo</button>
        </>
    )
};