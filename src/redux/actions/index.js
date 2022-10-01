import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const DETAIL_PRODUCT = "DETAIL_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const CREATE_USER = "CREATE_USER";
//export const CLEAR  = "CLEAR";
export const FILTER_CATEGORIES = "FILTER_CATEGORIES";
export const FILTER_BRANDS = "FILTER_BRANDS";

export function getAllProducts() {
    return async function (dispatch) {
        let allProducts = await fetch(
            "https://pf-tech-store.herokuapp.com/products"
        )
            .then((res) => res.json())
            .then((products) => products);
        return dispatch({ type: GET_ALL_PRODUCTS, payload: allProducts });
    };
}

export function getDetailProduct(i) {
    return async function (dispatch) {
        try {
            let detailProduct = await axios.get(
                `https://pf-tech-store.herokuapp.com/products/${i}`
            );
            return dispatch({
                type: DETAIL_PRODUCT,
                payload: detailProduct.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}
//aqui funcion para el fecth de la ruta de busqueda
export function getItem(product) {
    return async function (dispatch) {
        let item = await fetch(
            `https://pf-tech-store.herokuapp.com/products?name=${product}`
        )
            .then((res) => res.json())
            .then((item) => item)
            .catch((error) => alert(error));
        return dispatch({ type: SEARCH_PRODUCT, payload: item });
    };
}

export function createProduct(form) {
    console.log(form);
    return function (dispatch) {
        axios
            .post("https://pf-tech-store.herokuapp.com/products", form)
            .catch((error) => console.log(error));
    };
}

//=====================>>>>>>  JULIAN
export function createUsers(input) {
    console.log(input);
    return async () => {
        try {
            let newUser = await axios.post(
                "http://localhost:3001/users/register",
                input
            );
            alert("A new user is registred!");
            return newUser;
        } catch (error) {
            alert("name already exist");
            console.log(error);
        }
    };
}

//==================================  fin julian

export function getCategories(category) {
    return async function (dispatch) {
        try {
            let detailProduct = await axios.get(
                `https://pf-tech-store.herokuapp.com/filter?page=1&size=25`,
                category
            );
            console.log(category, "hola23");
            return dispatch({
                type: FILTER_CATEGORIES,
                payload: detailProduct.data.content,
            });
        } catch (error) {
            console.log(error);
        }
    };
}
