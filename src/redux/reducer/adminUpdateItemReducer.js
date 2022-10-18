import { UP_DATE_ITEM } from "../actions/updateItem";

const initialState = {
    response: [],
};

export default function adminUpdateItemReducer(state = initialState, action) {
    switch (action.type) {
        case UP_DATE_ITEM:
            return {
                ...state,
                response: action.payload,
            };
        default:
            return state;
    }
};