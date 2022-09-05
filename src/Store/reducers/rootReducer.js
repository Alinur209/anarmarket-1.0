import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import productReducer from "./productReducer";


const rootReducer = combineReducers({
    loading: loadingReducer,
    products: productReducer
})

export default rootReducer