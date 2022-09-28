import {combineReducers} from "redux";
import allProductsReducer from "./allProductsReducer";
import detailProductReducer from "./detailReducer";
import searchReducer from "./searchReducer";
 

export default combineReducers({
    allProductsReducer,
    detailProductReducer,
    searchReducer
  })
