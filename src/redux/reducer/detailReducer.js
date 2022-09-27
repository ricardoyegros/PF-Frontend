import {DETAIL_PRODUCT} from "../actions";

const initialState = {
    detailProduct : []
}

export default function detailProductReducer(state = initialState, action) {
    switch(action.type){
        case DETAIL_PRODUCT :
           return{
            ...state,
            DETAIL_PRODUCT : action.payload
           } 
        
        default: return state;
    }
}