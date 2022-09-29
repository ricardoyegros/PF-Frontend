import { GET_ALL_PRODUCTS } from "../actions/actionAllProducts"

export const initialState = {
  products: [],
  allProducts: [],
}

export default function allProductsReducer(state = initialState, action) {
  console.log(action.payload)
  switch(action.type){
    case GET_ALL_PRODUCTS :
      return{
        ...state,
        allProducts : action.payload,
        products : action.payload
      }  
    default:
      return state;
  }
};
