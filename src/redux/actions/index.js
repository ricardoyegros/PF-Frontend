export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const DELETE_FILTER = "DELETE_FILTER";

export function getAllProducts () {
    return async function (dispatch){
        let allProducts = await fetch("https://rickandmortyapi.com/api/character")
                            .then(res => res.json())
                            .then(products => products.results);
        dispatch({type: GET_ALL_PRODUCTS, payload: allProducts});
    }
};

export function filterByCategory(category, products) { 
    return function(dispatch) {
        dispatch({ type: FILTER_BY_CATEGORY, payload: {category, products}})
    }
}

export function deleteFilter(marca) {
    return function(dispatch) {
        dispatch({ type: DELETE_FILTER, payload: marca})
    }
}
