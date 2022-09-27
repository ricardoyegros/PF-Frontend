import {combineReducers} from "redux";
import allProductsReducer from "./allProductsReducer";
import detailProductReducer from "./detailReducer";
 

export default combineReducers({
    allProductsReducer,
    detailProductReducer
  })
