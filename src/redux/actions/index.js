

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const DETAIL_PRODUCT = "DETAIL_PRODUCT"

export function getAllProducts () {
    return async function (dispatch){
        let allProducts = await fetch("https://rickandmortyapi.com/api/character").then(
            res => res.json()
        ).then(products => products.results);
        return dispatch({type: GET_ALL_PRODUCTS, payload: allProducts});
    }
};

export function getDetailProduct(i){
    return async function(dispatch){
        let detailProduct =  await fetch(`https://rickandmortyapi.com/api/character/${i}`).then(
            res => res.json()
        ).then(product => product.results)
        return dispatch({type:DETAIL_PRODUCT})

    }
}