import { GET_PRODUCTS } from "../actions/adminProductAction";

const initialState = {
    products: [],
};

export default function adminProductsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};