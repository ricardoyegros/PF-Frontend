import { combineReducers } from "redux";
import allProductsReducer from "./allProductsReducer";
import detailProductReducer from "./detailReducer";
import searchReducer from "./searchReducer";
import usersReducers from "./usersReducers";
import filterCategoriesReducer from "./filterCategoryReducer";
import categorysNameReducer from "./categorysReducer";
import userIdReducer from "./userIdReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import reviewsReducer from "./reviewsReducer";
import allItemsCartReducer from "./allItemsCartReducer";
import allUserReducer from './allUserReducer';


export default combineReducers({
    allProductsReducer,
    detailProductReducer,
    searchReducer,
    filterCategoriesReducer,
    usersReducers,
    allUserReducer,
    categorysNameReducer,
    userIdReducer,
    shoppingCartReducer,
    reviewsReducer,
    allItemsCartReducer
});
