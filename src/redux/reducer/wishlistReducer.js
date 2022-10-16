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
            let fav
            console.log(action.payload.products)
            if(action.payload.products.length > 0){
                console.log("testeando")
                fav = action.payload.products.map(prod => prod.id )
            } else {fav = []}
            //console.log(fav)
            return {
                ...state,
                favorite: fav
            };

        default:
            return state;
    };
};