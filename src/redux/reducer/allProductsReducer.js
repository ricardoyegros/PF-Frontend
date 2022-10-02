import { GET_ALL_PRODUCTS } from "../actions";

const initialState = {
    allProducts: [],
    totalPage: 0,
    page: 0
}

export default function allProductsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload.content,
                totalPage: action.payload.totalPage,
            }

        default: return state;
    }
}