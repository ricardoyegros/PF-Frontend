import axios from "axios";
import React from "react";
export const GET_CART_ITEMS = "GET_CART_ITEMS"

export function getAllCartItems (email) {
    return async function (dispatch) {
        try {
            let cart = await axios.get(`https://techstore123.herokuapp.com/carts?email=${email}`)
           
            return dispatch({type: GET_CART_ITEMS, payload: cart.data});
        } catch (error) {
            console.log(error);
        }
    }
};