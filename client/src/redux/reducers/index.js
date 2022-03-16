import { combineReducers } from "redux";
import authReducers from "./authReducers"
import productsReducers from "./productsReducers"
import storeReducers from "./storeReducers";


const rootReducer = combineReducers({
    authReducers,
    productsReducers,
    storeReducers,
    })
export default rootReducer