import { DETAIL_ID_PRODUCT } from "../actions/getIdProduct";

const initialState = {
    detailProduct: [],
};

export default function detailIdProductReducer(state = initialState, action) {
    switch (action.type) {
        case DETAIL_ID_PRODUCT:
            return {
                ...state,
                detailProduct: action.payload,
            };

        default:
            return state;
    }
}
