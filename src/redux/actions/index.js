import axios from 'axios';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const DETAIL_PRODUCT = 'DETAIL_PRODUCT';
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
//export const CLEAR  = "CLEAR";
export const FILTER_CATEGORIES = 'FILTER_CATEGORIES';
export const FILTER_BRANDS = 'FILTER_BRANDS';
export const GET_CATEGORYS_NAMES = 'GET_CATEGORYS_NAMES';
export const PRE_FILTER = 'PRE_FILTER';
export const FILTER_BRAND2 = 'FILTER_BRAND2';
export const IS_IN_USE = 'IS_IN_USE';
export const GET_USER_ID = 'GET_USER_ID';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function getAllProducts(page) {
    return async function (dispatch) {
        console.log(page);
        let allProducts = await fetch(`http://https://techstore123.herokuapp.com/products?page=${page}`)
            .then((res) => res.json())
            .then((products) => products);
        return dispatch({ type: GET_ALL_PRODUCTS, payload: allProducts });
    };
}

export function getDetailProduct(i) {
    return async function (dispatch) {
        try {
            let detailProduct = await axios.get(`https://techstore123.herokuapp.com/products/${i}`);
            return dispatch({
                type: DETAIL_PRODUCT,
                payload: detailProduct.data
            });
        } catch (error) {
            console.log(error);
        }
    };
}
//aqui funcion para el fecth de la ruta de busqueda
export function getItem(product) {
    return async function (dispatch) {
        let item = await fetch(`https://techstore123.herokuapp.com/products?name=${product}`)
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
        axios.post('https://techstore123.herokuapp.com/products', form).catch((error) => console.log(error));
    };
}

//=====================>>>>>>  JULIAN
export function createUsers(input) {
    return async (dispatch) => {
        try {
            let newUser = await axios.post('http://localhost:3001/users/register', input);
            return dispatch({ type: CREATE_USER, payload: newUser.data });
        } catch (error) {
            console.log(error);
        }
    };
}

export function getIdUsers(id, token) {
    return async function (dispatch) {
        try {
            let user = await axios.get(`http://localhost:3001/users/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return dispatch({
                type: GET_USER_ID,
                payload: user.data
            });
        } catch (error) {
            alert('User not Found');
            console.log(error);
        }
    };
}

export function updateUser(input, token, id) {
    return async (dispatch) => {
        try {
            let updateUser = await axios.put(`http://localhost:3001/users/updateprofile`, input, {
                headers: { Authorization: `Bearer ${token}` }
            });

            return dispatch({ type: UPDATE_USER, payload: updateUser.data });
        } catch (error) {
            console.log(error);
        }
    };
}

export function loginUser(input) {
    return async (dispatch) => {
        try {
            let userData = await axios.post('http://localhost:3001/users/login', input);
            console.log(userData.data);
            return dispatch({ type: LOGIN_USER, payload: userData.data });
        } catch (error) {
            console.log(error);
        }
    };
}

export function logoutUser() {
    return async (dispatch) => {
        return dispatch({ type: LOGOUT_USER, payload: [] });
    };
}

//==================================  fin julian

export function getCategories(category) {
    return async function (dispatch) {
        try {
            console.log(category, 'soy category');
            let { categoryId, brandId, type, sort, page, size } = category;
            let url = `https://techstore123.herokuapp.com/filter?type=${type || ''}&sort=${sort || ''}&categoryId=${
                categoryId || ''
            }&brandId=${brandId || ''}&page=${page || ''}&size=${size || ''}`;
            let detailProduct = await axios.get(url);
            console.log(url, 'soy url');
            return dispatch({
                type: FILTER_CATEGORIES,
                payload: detailProduct.data.content
            });
        } catch (error) {
            console.log(error);
        }
    };
}

//==================================  fin julian

// export function getCategories(category) {
//   return async function (dispatch) {
//     try {
//       console.log(category, "soy category")
//       let { categoryId, brandId, type, sort, page, size } = category;
//       let url = `https://techstore123.herokuapp.com/filter?type=${type || ""}&sort=${sort || ""
//         }&categoryId=${categoryId || ""}&brandId=${brandId || ""}&page=${page || ""
//         }&size=${size || ""}`;
//       let detailProduct = await axios.get(url);
//       console.log(url, "soy url");
//       return dispatch({
//         type: FILTER_CATEGORIES,
//         payload: detailProduct.data.content
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

//==================================  fin julian

// export function getCategories(category) {
//   return async function (dispatch) {
//     try {
//       console.log(category, "soy category")
//       let { categoryId, brandId, type, sort, page, size } = category;
//       let url = `https://techstore123.herokuapp.com/filter?type=${type || ""}&sort=${sort || ""
//         }&categoryId=${categoryId || ""}&brandId=${brandId || ""}&page=${page || ""
//         }&size=${size || ""}`;
//       let detailProduct = await axios.get(url);
//       console.log(url, "soy url");
//       return dispatch({
//         type: FILTER_CATEGORIES,
//         payload: detailProduct.data.content
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

export function getCategoryNames() {
    return async (dispatch) => {
        try {
            await axios.get('https://techstore123.herokuapp.com/categorys').then((r) => {
                return dispatch({
                    type: GET_CATEGORYS_NAMES,
                    payload: r.data
                });
            });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export function preFilter(filtros) {
    return async (dispatch) => {
        try {
            let { categoryId, brandId, type, sort, page, size, name, search } = filtros;
            let url = `https://techstore123.herokuapp.com/filter?type=${type || ''}&sort=${sort || ''}&categoryId=${
                categoryId || ''
            }&brandId=${brandId || ''}&page=${page - 1 || '0'}&size=${size || '9'}&name=${name || ''}`;
            await axios.get(url).then((r) => {
                return dispatch({
                    type: PRE_FILTER,
                    payload: [r.data, search, name]
                });
            });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export function getBrands() {
    return async (dispatch) => {
        try {
            await axios.get('https://techstore123.herokuapp.com/brands').then((r) => {
                return dispatch({
                    type: FILTER_BRAND2,
                    payload: r.data
                });
            });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export function isInUse(filtros) {
    return async (dispatch) => {
        try {
            return dispatch({ type: IS_IN_USE, payload: filtros });
        } catch (error) {
            console.log(error.message);
        }
    };
}
