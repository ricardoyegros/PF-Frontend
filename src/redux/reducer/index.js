import {combineReducers} from "redux";
import allProductsReducer from "./allProductsReducer";
import detailProductReducer from "./detailReducer";
import searchReducer from "./searchReducer";
import  usersReducers from "./usersReducers"
import filterCategoriesReducer from "./filterCategoryReducer";

export default combineReducers({
    allProductsReducer,
    detailProductReducer,
    searchReducer,
    usersReducers,
    filterCategoriesReducer
  })
