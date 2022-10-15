import { ADD_FAVORITE, REMOVE_FAVORITE, GET_FAVORITE } from "../actions/wishlistActions";


const initialState = {
    favorite: [],
    message: {}
};

export default function reviewsDashReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                message: action.payload
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                message: action.payload
            };
        case GET_FAVORITE:
            return {
                ...state,
                favorite: action.payload
            };

        default:
            return state;
    };
};