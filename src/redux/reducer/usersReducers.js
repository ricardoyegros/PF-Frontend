import { CREATE_USER } from "../actions";
import { UPDATE_USER } from "../actions";
import { LOGIN_USER } from "../actions";
import { LOGOUT_USER } from "../actions";

const initialState = {
    user: {},
    token: "",
};

export default function createUsers(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user: action.payload,
                token: action.payload.token,
            };
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload,
            };
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                token: action.payload.token,
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: {},
                token: "",
            };

        default:
            return state;
    }
}
