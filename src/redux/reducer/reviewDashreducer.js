import { GET_ALL_REVIEWS } from "../actions/reviewsDash-actions";
import { DELETE_REVIEW } from "../actions/reviewsDash-actions";


const initialState = {
    reviews: []
};

export default function reviewsDashReducer (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            };
        case DELETE_REVIEW:
            return {
                ...state,
                reviews: state.reviews.filter(item => item.id !== Number(action.payload))
            }
        default:
            return state;
    };
};