import { GET_USER_ID } from "../actions";

const initialState = {
    userId: {},
};

export default function userIdReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_ID:
            return {
                ...state,
                userId: action.payload,
            };
        default:
            return state;
    }
}
