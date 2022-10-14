import { GET_ALL_USER } from "../actions/index";

const initialState = {
    users: [],
};

export default function allUserReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USER:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
}
