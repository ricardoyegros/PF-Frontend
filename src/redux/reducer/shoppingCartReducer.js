import { ACTIONS } from "../actions/cart-actions";

const initialState = {
    cart : [],
    shipping: {}
} 
export default function shoppingCartReducer (state = initialState, action) {
    switch(action.type){
        case ACTIONS.ADD_TO_CART :
            let newProduct = state.cart.find(p => p.id === action.payload.id) 
            if(newProduct){
                return {
                    ...state, cart : state.cart.map((item) => item.id === action.payload.id ? {...item , quantity: item.quantity + 1}: item) 
                }
            } else {
                return {
                    ...state, cart : [...state.cart , {...action.payload, quantity : 1}]
                }
            }
        case ACTIONS.REMOVE_ONE_FROM_CART :
            let newProduct2 = state.cart.find(p => p.id === action.payload.id) 
            if(newProduct2){
                return {
                    ...state, cart : state.cart.map((item) => item.id === action.payload.id ? {...item , quantity: item.quantity - 1}: item) 
                }
            }
        case ACTIONS.REMOVE_ONE_ALL_FROM_CART : 
            console.log(action.payload)
            return {
                ...state, cart: state.cart.filter(item => item.id !== action.payload)
            }
        case ACTIONS.CLEAR_CART : 
            return {
                ...state.cart, cart : []
            }
        case ACTIONS.SHIPPING_DATA :
            return {
                ...state,
                shipping: action.payload
            } 
        default: return state
    }
}