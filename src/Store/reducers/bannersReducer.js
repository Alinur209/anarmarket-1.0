import API from "../../API/API"
import { ErrorCreator } from "../../utiles"
import { SET_BANNERS_LOADING_TRUE, SET_BANNERS_LOADING_FALSE, SET_BANNERS_ERROR, SET_BANNERS } from "../types"


const initialState = {
    banners: [],
    error: {},
    isLoading: false
}

const bannersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_BANNERS:
            return {...state, banners: action.payload}
        case SET_BANNERS_ERROR:
            return {...state, error: action.payload}
        case SET_BANNERS_LOADING_TRUE:
            return {...state, isLoading: true}
        case SET_BANNERS_LOADING_FALSE:
            return {...state, isLoading: false}
        default:
            return state
    }
}   

export const getBanners = () => async dispatch => {
    dispatch(setBannersLoadingTrue())

        const response = await API.getBanners()
    
        if(response.status === 200)  {
            dispatch({type: SET_BANNERS, payload: response.data})
        }else {
            dispatch(setBannersError(new ErrorCreator(response.status, response.statusText)))
        }
        
    dispatch(setBannersLoadingFalse())
}

export const setBannersLoadingTrue = () => ({type: SET_BANNERS_LOADING_TRUE})
export const setBannersLoadingFalse = () => ({type: SET_BANNERS_LOADING_FALSE})
export const setBannersError = payload => ({type: SET_BANNERS_ERROR, payload})

export default bannersReducer