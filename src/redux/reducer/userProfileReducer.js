import { GET_ORDERS_FINISH, GET_ORDERS_ONWAY, GET_ORDERS_PENDING } from "../actions/userProfileActions";

const initialState = {
    onway: false,
    pendings: false,
    finish: false
};

export default function userProfileReducer(state = initialState, action) {
    
    switch (action.type) {
        case GET_ORDERS_ONWAY:
            return {
                ...state,
                onway: action.payload.content
            };
        case GET_ORDERS_PENDING:
            return {
                ...state,
                pendings: action.payload.content
            };
        case GET_ORDERS_FINISH:
            return {
                ...state,
                finish: action.payload.content
            };
        default :
        return state;
    };
};