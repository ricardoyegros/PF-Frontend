import { GET_REVIEWS } from "../actions/reviewsActions";

const initialState = {
    reviews: false
};

export default function reviewsReducer (state = initialState, action) {
    switch (action.type) {
        case GET_REVIEWS:
            console.log(action.payload)
            return {
                ...state,
                reviews: action.payload
            };
        default:
            return state;
    };
};