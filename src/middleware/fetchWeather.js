import { fetchWeatherPending, fetchWeatherSuccess, fetchWeatherError, fetchLocationSucess } from "../actions/weatherActions";

function fetchWeather(location) {
    return dispatch => {
        dispatch(fetchWeatherPending());
        fetch(`https://www.metaweather.com/api/location/search/?lattlong=${location.latitude},${location.longitude}`)
            .then(res => res.json())
            .then(res => {
                dispatch(fetchLocationSucess(res[0].title))
                fetch(`https://www.metaweather.com/api/location/${res[0].woeid}`)
                    .then(data => data.json())
                    .then(data => {
                        dispatch(fetchWeatherSuccess(data.consolidated_weather));
                        return data.consolidated_weather;
                    })
            })
            .catch(error => {
                dispatch(fetchWeatherError(error));
            })
    }
}

export default fetchWeather;
