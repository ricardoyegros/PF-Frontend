import { CREATE_USER } from "../actions";
import { UPDATE_USER } from "../actions";

const initialState = {
    user: {},

};

export default function createUsers(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user: action.payload
            };
        case UPDATE_USER:
            return {
                ...state,
                user:  action.payload,
            }    

        default:
            return state;
    }
}
