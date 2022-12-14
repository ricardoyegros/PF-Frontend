import { DETAIL_PRODUCT } from "../actions";
import { CLEAR } from "../actions/detail-actions";

const initialState = {
    detailProduct: {},
};

export default function detailProductReducer(state = initialState, action) {
    switch (action.type) {
        case DETAIL_PRODUCT:
            return {
                ...state,
                detailProduct: action.payload,
            };
        case CLEAR:
            return {
                ...state,
                detailProduct: action.payload,
            };

        default:
            return state;
    }
};
