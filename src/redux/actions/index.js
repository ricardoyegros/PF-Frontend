import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const DETAIL_PRODUCT = "DETAIL_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const CREATE_USER = "CREATE_USER";
//export const CLEAR  = "CLEAR";
export const FILTER_CATEGORIES = "FILTER_CATEGORIES";
export const FILTER_BRANDS = "FILTER_BRANDS";
export const GET_CATEGORYS_NAMES = "GET_CATEGORYS_NAMES";
export const PRE_FILTER = "PRE_FILTER";
export const FILTER_BRAND2 = "FILTER_BRAND2";

export function getAllProducts(page) {
  return async function (dispatch) {
    console.log(page)
    let allProducts = await fetch(
      `https://techstore123.herokuapp.com/products?page=${page}`
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
      console.log(category, "soy category")
      let { categoryId, brandId, type, sort, page, size } = category;
      let url = `https://techstore123.herokuapp.com/filter?type=${type || ""}&sort=${sort || ""
        }&categoryId=${categoryId || ""}&brandId=${brandId || ""}&page=${page || ""
        }&size=${size || ""}`;
      let detailProduct = await axios.get(url);
      console.log(url, "soy url");
      return dispatch({
        type: FILTER_CATEGORIES,
        payload: detailProduct.data.content
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCategoryNames() {
  return async (dispatch) => {
    try {
      await axios.get("https://techstore123.herokuapp.com/categorys").then(r => {
        return dispatch({ type: GET_CATEGORYS_NAMES, payload: r.data })
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export function preFilter(filtros) {
  return async (dispatch) => {
    try {
      let { categoryId, brandId, type, sort, page, size } = filtros;
      let url = `https://techstore123.herokuapp.com/filter?type=${type || ""}&sort=${sort || ""
        }&categoryId=${categoryId || ""}&brandId=${brandId || ""}&page=${page || ""
        }&size=${size || ""}`
      await axios.get(url)
        .then(r => {
          return dispatch({ type: PRE_FILTER, payload: r.data })
        })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export function getBrands() {
  return async (dispatch) => {
    try {
      await axios.get('https://techstore123.herokuapp.com/brands')
        .then(r => {
          return dispatch({
            type: FILTER_BRAND2,
            payload: r.data
          })
        })
    } catch (error) {
      console.log(error.message)
    }
  }
}