import {FILTER_CATEGORIES} from "../actions";

const initialState = {
    categoryProduct : undefined
}


export default function filterCategory(state = initialState, action) {

    switch(action.type){
        case FILTER_CATEGORIES :
           return{
            ...state,
            categoryProduct : action.payload
           } 
        
        default: return state;
    }
}