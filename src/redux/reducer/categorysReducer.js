import { FILTER_BRAND2, GET_CATEGORYS_NAMES, PRE_FILTER } from "../actions";


const initialState = {
    categorys: [],
    brands: [],
    filtrado: undefined 
};

export default function categorysNameReducer(state = initialState, action) {

    switch (action.type) {
        case GET_CATEGORYS_NAMES:
            return {
                ...state,
                categorys: action.payload
            }; break;
        case PRE_FILTER:
            return {
                ...state,
                filtrado: action.payload
            }; break;
        case FILTER_BRAND2:
            return {
                ...state,
                brands: action.payload
            }; break;

        default: return state;
    };
};