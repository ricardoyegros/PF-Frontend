import axios from "axios";
export const ACTIONS = {
    ADD_TO_CART : "ADD_TO_CART",
    REMOVE_ONE_FROM_CART : "REMOVE_ONE_FROM_CART",
    REMOVE_ONE_ALL_FROM_CART : "REMOVE_ONE_ALL_FROM_CART",
    CLEAR_CART : "CLEAR_CART"
};

export function addToCart (id) {
    return async function (dispatch){
        try {
            let product = await axios.get(
                `https://techstore123.herokuapp.com/products/${id}`
            );
            console.log(id, product, "soy action")
            return dispatch({
                type: ACTIONS.ADD_TO_CART,
                payload: product.data,
            });  
        } catch (error) {
            console.log(error);
        }
    }
};

export function handleReduce1 (id) {
    return async function (dispatch){
        try {
            let product = await axios.get(
                `https://techstore123.herokuapp.com/products/${id}`
            );
            return dispatch({
                type: ACTIONS.REMOVE_ONE_FROM_CART,
                payload: product.data,
            });  
        } catch (error) {
            console.log(error);
        }
    }
};
export function deleteFromCart (id) {
    return async function (dispatch){
        try {
            console.log(id, "soy ID")
            return dispatch({
                type: ACTIONS.REMOVE_ONE_ALL_FROM_CART,
                payload: id,
            });  
        } catch (error) {
            console.log(error);
        }
    }
};
export function cartPost (cart) {
    return function (){
        try {
            axios.post("https://techstore123.herokuapp.com", cart)
        } catch (error) {
            console.log(error);
        }
    }
};
export function clearCart () {
    return async function (dispatch){
        try{    return dispatch({
                type: ACTIONS.CLEAR_CART,
                payload: []
            });  
        } catch (error) {
            console.log(error);
        }
    }
};