import { CHANGE_ADMIN, GET_USERS } from "../actions/adminUserAction";

const initialState = {
    users: [],
    isAdmin: false
};

export default function adminUsersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case CHANGE_ADMIN:
            const newUsers = state.users.map( (user) => {
                if(user.id === action.payload.id){
                    return action.payload
                }
                return user
            })
            return {
                ...state,
                users: newUsers
            };
        default:
            return state;
    }
}
