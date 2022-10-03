import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const DETAIL_PRODUCT = "DETAIL_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const CREATE_USER = "CREATE_USER";
export const UPDATE_USER = "UPDATE_USER";
//export const CLEAR  = "CLEAR";
export const FILTER_CATEGORIES = "FILTER_CATEGORIES";
export const FILTER_BRANDS = "FILTER_BRANDS";
export const GET_USER_ID = "GET_USER_ID";
export const LOGIN_USER = "LOGIN_USER";

export function getAllProducts() {
    return async function (dispatch) {
        let allProducts = await fetch(
            "https://techstore123.herokuapp.com/products"
        )
            .then((res) => res.json())
            .then((products) => products.content);
        return dispatch({ type: GET_ALL_PRODUCTS, payload: allProducts });
    };
}

export function getDetailProduct(i) {
    return async function (dispatch) {
        try {
            let detailProduct = await axios.get(
                `https://techstore123.herokuapp.com/products/${i}`
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
            `https://techstore123.herokuapp.com/products?name=${product}`
        )
            .then((res) => res.json())
            .then((item) => item)
            .catch((error) => alert(error));
        console.log(item);
        return dispatch({ type: SEARCH_PRODUCT, payload: item.content });
    };
}

export function createProduct(form) {
    console.log(form);
    return function (dispatch) {
        axios
            .post("https://techstore123.herokuapp.com/products", form)
            .catch((error) => console.log(error));
    };
}

//=====================>>>>>>  JULIAN
export function createUsers(input) {
    return async (dispatch) => {
        try {
            let newUser = await axios.post(
                "http://localhost:3001/users/register",
                input
            );
            return dispatch({ type: CREATE_USER, payload: newUser.data });
        } catch (error) {
            console.log(error);
        }
    };
};

export function getIdUsers(id) {
    return async function (dispatch) {
        try {
            let user = await axios.get(`http://localhost:3001/users/${id}`);
            return dispatch({
                type: GET_USER_ID,
                payload: user.data,
            });
        } catch (error) {
            alert("User not Found");
            console.log(error);
        }
    };
}


export function updateUser(input, token){
    return async (dispatch) => {
        try {
            
            let updateUser = await axios.put(
                "http://localhost:3001/users/updateprofile",
                input, 
                {headers:{ "Authorization" : `Bearer ${token}` }}
                
            );
            
            return dispatch({ type: UPDATE_USER, payload: updateUser.data });
        } catch (error) {
            console.log(error);
        }
    };

};

export function loginUser(input) {
    return async (dispatch) => {
        try {
            let userData = await axios.post(
                "http://localhost:3001/users/login",
                input
            );
            console.log(userData.data)
            return dispatch({ type: LOGIN_USER, payload: userData.data });
        } catch (error) {
            console.log(error);
        }
    };
};




//==================================  fin julian

export function getCategories(category) {
    return async function (dispatch) {
        try {
            console.log(category, "soy category");
            let { categoryId, brandId, type, sort, page, size } = category;
            let url = `https://techstore123.herokuapp.com/filter?type=${
                type || ""
            }&sort=${sort || ""}&categoryId=${categoryId || ""}&brandId=${
                brandId || ""
            }&page=${page || ""}&size=${size || ""}`;
            let detailProduct = await axios.get(url);
            console.log(url, "soy url");
            return dispatch({
                type: FILTER_CATEGORIES,
                payload: detailProduct.data.content,
            });
        } catch (error) {
            console.log(error);
        }
    };
}
