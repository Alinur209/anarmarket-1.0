import { combineReducers } from "redux";
import bannersReducer from "./bannersReducer";
import loadingReducer from "./loadingReducer";
import partnersReducer from "./partnersReducer";
import productReducer from "./productReducer";


const rootReducer = combineReducers({
    loading: loadingReducer,
    products: productReducer,
    partners: partnersReducer,
    banners: bannersReducer
})

export default rootReducer