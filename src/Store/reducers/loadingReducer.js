import { TOGGLE_LOADING } from "../types"

const initialState = {
    loading: false
}

const loadingReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_LOADING:
            return {...state, loading: !state.loading}
        default:
            return state
    }
}

export default loadingReducer 

export const toggleLoading = () => ({type: TOGGLE_LOADING})
