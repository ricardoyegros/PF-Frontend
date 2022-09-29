// import {
//     GET_ALL_PRODUCTS, 
//     FILTER_BY_CATEGORY,
//     DELETE_FILTER
// } from "../actions";

// const initialState = {
//     products: [],
//     allProducts: [],
// }

// export default function reducer(state = initialState, action) {
//     switch(action.type){
//         case GET_ALL_PRODUCTS :
//            return{
//                 ...state,
//                 allProducts : action.payload,
//                 products : action.payload
//            }
//         case FILTER_BY_CATEGORY:
//             const products = action.payload.products
//             const productsFiltered = products.filter(product => product.gender === action.payload.category)
//             return {
//                 ...state,
//                 allProducts: productsFiltered
//             }
//         // case DELETE_FILTER:
//         //     return {
//         //         ...state,
//         //         allProducts : 
//         //     }    
//         default:
//             return state;
//     }
// }

import { combineReducers } from 'redux'
import allProductsReducer from './allProductsReducer';
import categoryFilterReducer from "./filterByCategoryReducer";

export default combineReducers({
  allProductsReducer,
  categoryFilterReducer
});
