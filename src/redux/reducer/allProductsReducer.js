import {GET_ALL_PRODUCTS} from "../actions";

const initialState = {
    allProducts : [],

}

export default function allProductsReducer(state = initialState, action) {
    switch(action.type){
        case GET_ALL_PRODUCTS :
           return{
            ...state,
            allProducts : action.payload
            
           } 
        
        default: return state;
    }
}