import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const DETAIL_PRODUCT = "DETAIL_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const CREATE_USER = "CREATE_USER";
//export const CLEAR  = "CLEAR";

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
    let detailProduct = await fetch(
      `https://rickandmortyapi.com/api/character/${i}`
    )
      .then((res) => res.json())
      .then((product) => product);

    return dispatch({ type: DETAIL_PRODUCT, payload: detailProduct });
  };
}
//aqui funcion para el fecth de la ruta de busqueda
export function getItem(product) {
  return async function (dispatch) {
    let item = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${product}`
    )
      .then((res) => res.json())
      .then((item) => item)
      .catch((error) => alert(error));
    return dispatch({ type: SEARCH_PRODUCT, payload: item });
  };
}

export function createProduct(form) {
  return function (dispatch) {
    axios
      .post("https://pf-tech-store.herokuapp.com/products", form)
      .catch((error) => console.log(error));
  };
};

//=====================>>>>>>  JULIAN
export function createUsers(form){
  return async () => {
    try{
      let newUser = await axios.post(
        "http://localhost:3001/users",
         form
         );
         alert("A new user is registred!")
         return newUser;

    }catch(error){
      alert("name already exist");
      console.log(error);

    }
  };


};
  
  /* return function (dispatch){
      axios
      .post("https://pf-tech-store.herokuapp.com/users/register", form)
      .catch((error) => console.log(error)); 
  }; */



/* export function clear (){
  return { 
    type: CLEAR,
     payload: [] 
    };

}; */
