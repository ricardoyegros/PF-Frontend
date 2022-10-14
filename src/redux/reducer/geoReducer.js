import { GET_GEOLOCATION } from "../actions/geoActions";


const initialState = {
    geo : [],

}
// hay q ver la ruta de donde trae los productos
export default function searchReducer(state = initialState, action,) {
    switch(action.type){
        case GET_GEOLOCATION :
            
           return{
            ...state,
            geo : action.payload
           } 
        
        default: return state;
    }
}