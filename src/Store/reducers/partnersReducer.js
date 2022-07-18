import API from "../../API/API"
import { ErrorCreator } from "../../utiles"
import { SET_PARTNERS_LOADING_TRUE, SET_PARTNERS_LOADING_FALSE, SET_PARTNERS_ERROR, RESET_PARTNERS, SET_PARTNERS } from "../types"


const initialState = {
    partners: [],
    error: {},
    isLoading: false
}

const partnersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PARTNERS:
            return {...state, partners: action.payload}
        case RESET_PARTNERS:
            return {...state, partners: [], error: {}}
        case SET_PARTNERS_ERROR:
            return {...state, error: action.payload}
        case SET_PARTNERS_LOADING_TRUE:
            return {...state, isLoading: true}
        case SET_PARTNERS_LOADING_FALSE:
            return {...state, isLoading: false}
        default:
            return state
    }
}   

export const getPartners = () => async dispatch => {
    dispatch(setPartnersLoadingTrue())

        const response = await API.getPartners()
    
        if(response.status === 200)  {
            dispatch({type: SET_PARTNERS, payload: response.data})
        }else {
            dispatch(setPartnersError(new ErrorCreator(response.status, response.statusText)))
        }
        
    dispatch(setPartnersLoadingFalse())
}

export const setPartnersLoadingTrue = () => ({type: SET_PARTNERS_LOADING_TRUE})
export const setPartnersLoadingFalse = () => ({type: SET_PARTNERS_LOADING_FALSE})
export const setPartnersError = payload => ({type: SET_PARTNERS_ERROR, payload})
export const resetPartners = () => ({type: RESET_PARTNERS})

export default partnersReducer