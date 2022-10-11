import React from "react";
import { GET_CART_ITEMS } from "../actions/getCart";
import { ACTIONS } from "../actions/cart-actions";

const initialState = {
    cartItems: []
};

export default function allItemsCartReducer (state = initialState, action) {
    switch (action.type){
    case GET_CART_ITEMS :
        return {
            ...state,
            cartItems : action.payload
        }
        case ACTIONS.ADD_TO_CART :
            let newProduct = state.cartItems.find(p => p.id === action.payload.id) 
            if(newProduct){
                return {
                    ...state, cartItems : state.cartItems.map((item) => item.id === action.payload.id ? {...item , quantity: item.quantity + 1}: item) 
                }
            } else {
                return {
                    ...state, cartItems : [...state.cartItems , {...action.payload, quantity : 1}]
                }
            }
        case ACTIONS.REMOVE_ONE_FROM_CART :
            let newProduct2 = state.cartItems.find(p => p.id === action.payload.id) 
            if(newProduct2){
                return {
                    ...state, cartItems : state.cartItems.map((item) => item.id === action.payload.id ? {...item , quantity: item.quantity - 1}: item) 
                }
            }
        case ACTIONS.REMOVE_ONE_ALL_FROM_CART : 
            console.log(action.payload)
            return {
                ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        case ACTIONS.CLEAR_CART : 
            return {
                ...state.cartItems, cartItems : []
            }
        default : return state;
    }
};