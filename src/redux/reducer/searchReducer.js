import { SEARCH_PRODUCT } from "../actions";


const initialState = {
    productItem : []
}
// hay q ver la ruta de donde trae los productos
export default function searchReducer(state = initialState, action) {
    switch(action.type){
        case SEARCH_PRODUCT :
           return{
            ...state,
            productItem : action.payload
           } 
        
        default: return state;
    }
}