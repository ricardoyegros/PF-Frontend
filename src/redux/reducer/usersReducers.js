import { CREATE_USER } from "../actions";

const initialState = {
    /* name: "",
    lastName: "",
    email: "",
    token: "", */
    user: {},
};

export default function createUsers(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                /* name: action.payload.name,
                lastName: action.payload.lastName,
                email: action.payload.email,
                token: action.payload.token, */
                user: action.payload
            };

        default:
            return state;
    }
}
