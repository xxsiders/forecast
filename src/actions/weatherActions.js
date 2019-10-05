import { FETCH_WEATHER_PENDING, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR, FETCH_LOCATION_SUCCESS } from "../types/Types"



export function fetchWeatherPending() {
    return {
        type: FETCH_WEATHER_PENDING
    }
}
export function fetchWeatherSuccess(data) {
    return {
        type: FETCH_WEATHER_SUCCESS,
        payload: data
    }
}
export function fetchWeatherError(error) {
    return {
        type: FETCH_WEATHER_ERROR,
        error: error
    }
}

export function fetchLocationSucess(data) {
    return {
        type: FETCH_LOCATION_SUCCESS,
        payload: data
    }
}