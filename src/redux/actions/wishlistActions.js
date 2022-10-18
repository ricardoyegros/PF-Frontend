import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const GET_FAVORITE = "GET_FAVORITE"
export const GET_PRODUCTS_FAVORITE = "GET_PRODUCTS_FAVORITE"


export function addFavorite(idUser, idProduct) {
    return async function (dispatch) {
        try {
            const body = {
                idUser,
                idProduct
            }
            console.log(body)
            const addFav = await axios.post("https://techstore123.herokuapp.com/favorite", body)
            
            return dispatch({ type: ADD_FAVORITE, payload: addFav.data });
        } catch (error) {
            console.log(error);
        }
    }
};

export function removeFavorite(idUser, idProduct) {
    return async function (dispatch) {
        try {
            const body = {
                idUser,
                idProduct
            }
            const removeFav = await axios.post("https://techstore123.herokuapp.com/favorite/delete", body)
            
            return dispatch({ type: REMOVE_FAVORITE, payload: removeFav.data });
        } catch (error) {
            console.log(error);
        }
    }
};

export function getFavoriteProducts() {
    return async function (dispatch) {
        try {
            const id = localStorage.id
            console.log(id)
            const favorites = await axios.get(`https://techstore123.herokuapp.com/favorite?id=${id}`)
            console.log(favorites.data.products)
            return dispatch({ type: GET_PRODUCTS_FAVORITE, payload: favorites.data.products });
        } catch (error) {
            console.log(error);
        }
    }
};

export function getFavorite() {
    return async function (dispatch) {
        try {
            const id = localStorage.id
            const favorites = await axios.get(`https://techstore123.herokuapp.com/favorite?id=${id}`)
            //console.log(favorites.data.products)
            return dispatch({ type: GET_FAVORITE, payload: favorites.data });
        } catch (error) {
            // console.log(error);
        }
    }
};


