import {GET_ALL_PRODUCTS, FILTER_BY_CATEGORY} from "../actions";

const initialState = {
    products: [],
    allProducts: []
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case GET_ALL_PRODUCTS :
           return{
                ...state,
                allProducts : action.payload,
                products : action.payload
           }
        case FILTER_BY_CATEGORY:
            console.log(state.allProducts)
            const productsFiltered = state.products.filter(product => product.gender === action.payload)
            console.log(productsFiltered)
            return {
                ...state,
                allProducts: productsFiltered
            }
        default:
            return state;
    }
}
