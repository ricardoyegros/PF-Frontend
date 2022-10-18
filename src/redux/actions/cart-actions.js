import axios from "axios";
export const ACTIONS = {
    ADD_TO_CART : "ADD_TO_CART",
    REMOVE_ONE_FROM_CART : "REMOVE_ONE_FROM_CART",
    REMOVE_ONE_ALL_FROM_CART : "REMOVE_ONE_ALL_FROM_CART",
    CLEAR_CART : "CLEAR_CART",
    SHIPPING_DATA : "SHIPPING_DATA"
};

export function addToCart (id) {
    return async function (dispatch){
        try {
            let product = await axios.get(
                `https://techstore123.herokuapp.com/products/${id}`
            );
            let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
            let duplicate = cart.filter(p => p.name === product.data.name)
            if(duplicate.length === 0) {
                let productToAdd = {
                    ...product.data,
                    quantity : 1
                }
                cart.push(productToAdd)
            }else {
                cart = cart.map((item) => item.id === product.data.id ? {...item , quantity: item.quantity + 1}: item)
            }
            localStorage.setItem("cart", JSON.stringify(cart))
            dispatch({
                type: ACTIONS.ADD_TO_CART,
                payload: cart,
            });  
        } catch (error) {
            console.log(error);
        }
    }
};


export function handleReduce1 (id) {
    return async function (dispatch){
        try {
            let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
            let duplicate = cart.filter(p => p.id === id)
            if(duplicate.length > 0) {
                cart = cart.map((item) => item.id === id ? {...item , quantity: item.quantity - 1}: item)
            }
            localStorage.setItem("cart", JSON.stringify(cart))
            dispatch({
                type: ACTIONS.REMOVE_ONE_FROM_CART,
                payload: cart,
            });  
        } catch (error) {
            console.log(error);
        }
    }
};
// export function handleReduce1 (id) {
//     return async function (dispatch){
//         try {
//             let product = await axios.get(
//                 `https://techstore123.herokuapp.com/products/${id}`
//             );
//             let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
//             let duplicate = cart.filter(p => p.id === product.data.id)
//             if(duplicate.length > 0) {
//                 cart = cart.map((item) => item.id === product.data.id ? {...item , quantity: item.quantity - 1}: item)
//             }
//             localStorage.setItem("cart", JSON.stringify(cart))
//             dispatch({
//                 type: ACTIONS.REMOVE_ONE_FROM_CART,
//                 payload: cart,
//             });  
//         } catch (error) {
//             console.log(error);
//         }
//     }
// };
export function deleteFromCart (id) {
    return async function (dispatch){
        try {
            let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
            let duplicate = cart.filter(p => p.id === id)
            if(duplicate.length > 0) {
                cart = cart.filter(item => item.id !== id)
            }
            localStorage.setItem("cart", JSON.stringify(cart))
            dispatch({
                type: ACTIONS.REMOVE_ONE_ALL_FROM_CART,
                payload: cart
            });  
        } catch (error) {
            console.log(error);
        }
    }
};
// export function deleteFromCart (id) {
//     return async function (dispatch){
//         try {
//             let product = await axios.get(
//                 `https://techstore123.herokuapp.com/products/${id}`
//             );
//             let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
//             let duplicate = cart.filter(p => p.id === product.data.id)
//             if(duplicate.length > 0) {
//                 cart = cart.filter(item => item.id !== product.data.id)
//             }
//             localStorage.setItem("cart", JSON.stringify(cart))
//             dispatch({
//                 type: ACTIONS.REMOVE_ONE_ALL_FROM_CART,
//                 payload: cart
//             });  
//         } catch (error) {
//             console.log(error);
//         }
//     }
// };
export function shippingData (data) {
    return async function (dispatch){
        try {
            console.log(data, "soy data")
            return dispatch({
                type: ACTIONS.SHIPPING_DATA,
                payload: data
            });  
        } catch (error) {
            console.log(error);
        }
    }
};
export function cartPost (cart) {
    return function (){
        try {
            axios.post("https://techstore123.herokuapp.com", cart)
        } catch (error) {
            console.log(error);
        }
    }
};
export function clearCart () {
    return async function (dispatch){
        try{
            let cart = [];
            localStorage.setItem("cart", JSON.stringify(cart))
            dispatch({
                type: ACTIONS.CLEAR_CART,
                payload: cart
            });  
        } catch (error) {
            console.log(error);
        }
    }
};