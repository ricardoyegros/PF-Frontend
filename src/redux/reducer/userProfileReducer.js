import { GET_ORDERS_FINISH, GET_ORDERS_ONWAY, GET_ORDERS_PENDING } from "../actions/userProfileActions";

const initialState = {
    onWay: false,
    pendings: false,
    finish: false
};

export default function userProfileReducer(state = initialState, action) {
    switch (action.payload) {
        case GET_ORDERS_ONWAY:
            return {
                ...state,
                onWay: action.payload
            };
        case GET_ORDERS_PENDING:
            return {
                ...state,
                pendings: action.payload
            };
        case GET_ORDERS_FINISH:
            return {
                ...state,
                finish: action.payload
            };
        default :
        return state;
    };
};