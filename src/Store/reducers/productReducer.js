import API from "../../API/API"
import { SET_SEARCHED_PRODUCT,SET_LOADED_PRODUCT, RESET_ACTIVE_PRODUCT, SET_FEATURED_PRODUCT, SET_PRODUCT_LOADING_FALSE, SET_PRODUCT_LOADING_TRUE, SET_PRODUCT, SET_PRODUCT_ERROR } from "../types"

const initialState = {
    active: {},
    error: '',
    isLoading: true,
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCHED_PRODUCT:
            return {...state, active: action.payload}

        case SET_PRODUCT:   
            const active_product = action.payload
                if(state.active.list) {
                    active_product.list = [...state.active.list, ...active_product.list]
                }
            return {...state, active: active_product}
        case SET_FEATURED_PRODUCT:
                return {...state, active: action.payload}
        case SET_PRODUCT_LOADING_TRUE:
            return {...state, isLoading: true}
        case SET_PRODUCT_LOADING_FALSE:
            return {...state, isLoading: false}
        case RESET_ACTIVE_PRODUCT:
            if( action.payload === "Поиск") {
                return {...state}
            }
            return {...state, active: {}}
        case SET_PRODUCT_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}

export const resetActiveProduct = product => ({type: RESET_ACTIVE_PRODUCT, payload: product})
export const setProductLoadingTrue = () => ({type: SET_PRODUCT_LOADING_TRUE})
export const setProductLoadingFalse = () => ({type: SET_PRODUCT_LOADING_FALSE})

export const getProduct = (product, params) => async dispatch => {
    console.log(product, params)
    dispatch(setProductLoadingTrue())
        const response = await API.getProduct(product, params)
            if(response.status) {
                dispatch({type: SET_PRODUCT, payload: response.response})
            }else {
                dispatch({type: SET_PRODUCT_ERROR, payload: response.error ? response.error : "Что то пошло не так.."})
            }
    dispatch(setProductLoadingFalse())
}

export const setSearchedProduct = (product, params) => async dispatch => {
    dispatch(setProductLoadingTrue())
    const response = await API.getProduct(product, params)
        if(response.status) {
            dispatch({type: SET_SEARCHED_PRODUCT, payload: response.response})
        }else {
            dispatch({type: SET_PRODUCT_ERROR, payload: response.error ? response.error : "Что то пошло не так.."})
        }
    dispatch(setProductLoadingFalse())
}

export default productReducer
