import { SEARCH_PRODUCT } from "../actions";



const initialState = {
    productItem : [],


}
// hay q ver la ruta de donde trae los productos
export default function searchReducer(state = initialState, action,) {
        
    switch(action.type){
        case SEARCH_PRODUCT :
            if(!action.payload.length) alert("Producto no encontrado, seras redireccionado al home")
           return{
            ...state,
            productItem : action.payload
           } 
        
        default: return state;
    }
}