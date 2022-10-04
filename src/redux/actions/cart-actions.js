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
                `http://localhost:3001/products/${id}`
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
                `http://localhost:3001/products/${id}`
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