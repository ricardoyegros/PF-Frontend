import { FILTER_BY_CATEGORY } from "../actions/actionFilterByCategory";
import initialState from './allProductsReducer'
console.log(initialState)
// const initialState = {
//   allProducts: []
// }

export default function categoryFilterReducer(state = initialState, action) {
  switch(action.type) {
    case FILTER_BY_CATEGORY:
      const products = action.payload.products
      const productsFiltered = products.filter(product => product.gender === action.payload.category)
      return {
        ...state,
        allProducts: productsFiltered
      }
    default: 
      return state  
  }
};
