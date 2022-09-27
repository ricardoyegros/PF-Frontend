export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export function getAllProducts () {
    return async function (dispatch){
        let allProducts = await fetch("https://rickandmortyapi.com/api/character").then(
            res => res.json()
        ).then(products => products.results);
        return dispatch({type: GET_ALL_PRODUCTS, payload: allProducts});
    }
};

