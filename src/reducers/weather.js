import { combineReducers } from 'redux';
import { FETCH_WEATHER_PENDING, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR, FETCH_LOCATION_SUCCESS } from '../types/Types';
const initialState = {
    pending: false,
    data: [],
    error: null,
    title: null
}
export const weather = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload,
            }
        case FETCH_WEATHER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case FETCH_LOCATION_SUCCESS:
            return {
                ...state,
                title: action.payload
            }
        default:
            return state;
    }
}

export default combineReducers({
    weather
})