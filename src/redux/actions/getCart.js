import axios from "axios";
import React from "react";
export const GET_CART_ITEMS = "GET_CART_ITEMS"

export function getAllCartItems (email) {
    return async function (dispatch) {
        try {
            let cart = await axios.get(`https://techstore123.herokuapp.com/carts?email=${email}`)
            if(cart.data.length > 0){
                localStorage.setItem("cart", JSON.stringify(cart.data))
                console.log(cart)
            }else{
                localStorage.cart = [];
            }
            dispatch({type: GET_CART_ITEMS, payload: cart});
        } catch (error) {
            console.log(error);
        }
    }
};