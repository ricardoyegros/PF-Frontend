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
import userProfileReducer from "./userProfileReducer";
import geoReducer from "./geoReducer";
import allUserReducer from "./allUserReducer";
import wishlistReducer from "./wishlistReducer"
import reviewsDashReducer from "./reviewDashreducer";

export default combineReducers({
    allProductsReducer,
    detailProductReducer,
    searchReducer,
    filterCategoriesReducer,
    usersReducers,
    categorysNameReducer,
    userIdReducer,
    shoppingCartReducer,
    reviewsReducer,
    allItemsCartReducer,
    userProfileReducer,
    geoReducer,
    allUserReducer,
    //wishlistReducer,
    reviewsDashReducer
});
