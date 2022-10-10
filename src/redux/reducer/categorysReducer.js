import { FILTER_BRAND2, GET_CATEGORYS_NAMES, IS_IN_USE, PRE_FILTER } from "../actions";


const initialState = {
    name: '',
    search: false,
    categorys: [],
    brands: [],
    filtrado: undefined,
    categoryName: false,
    brandName: false,
    sortName: false,
    typeName: false
};

export default function categorysNameReducer(state = initialState, action) {
    // console.log(action.payload)
    switch (action.type) {
        case GET_CATEGORYS_NAMES:
            return {
                ...state,
                categorys: action.payload
            }; break;
        case PRE_FILTER:
            return {
                ...state,
                filtrado: action.payload[0],
                search: action.payload[1],
                name: action.payload[2]
            }; break;
        case FILTER_BRAND2:
            return {
                ...state,
                brands: action.payload
            }; break;
        case IS_IN_USE:
            return {
                ...state,
                brandName: action.payload.brandName,
                categoryName: action.payload.categoryName,
                sortName: action.payload.sortName,
                typeName: action.payload.typeName
            }
        default: return state;
    };
};