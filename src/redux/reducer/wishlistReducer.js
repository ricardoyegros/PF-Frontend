import { ADD_FAVORITE, REMOVE_FAVORITE, GET_FAVORITE, GET_PRODUCTS_FAVORITE } from "../actions/wishlistActions";


const initialState = {
    favorite: [],
    message: {},
    products: [],
};

export default function reviewsDashReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                message: action.payload
            };
        case REMOVE_FAVORITE:
            let prod = state.products.filter(e => e.id !==action.payload.id)
            return {
                ...state,
                products: prod
            };
        case GET_FAVORITE:
            let fav
            if(action.payload.products.length > 0){
                fav = action.payload.products.map(prod => prod.id )
            } else {fav = []}
            //console.log(fav)
            return {
                ...state,
                favorite: fav
            };
        case GET_PRODUCTS_FAVORITE:
            return {
                ...state,
                products: action.payload
            };

        default:
            return state;
    };
};