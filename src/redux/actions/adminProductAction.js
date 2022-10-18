import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS"

export function getProducts () {
    return async function (dispatch) {
        try {
            let products = await axios.get(`https://techstore123.herokuapp.com/filter?size=100`)
            //console.log(products.data.content)
            return dispatch({type: GET_PRODUCTS, payload: products.data.content});
        } catch (error) {
            console.log(error);
        }
    }
};