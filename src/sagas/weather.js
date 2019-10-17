import { all, call, put, takeLatest } from 'redux-saga/effects';
import { weather } from '../services';
import { ActionTypes } from '../constants';

const {WEATHER_GET, WEATHER_GET_SUCCESS, WEATHER_GET_FAILURE} = ActionTypes;


export function* getWeather({payload}) {
  try {
    const response = yield call(weather.get, payload);
    console.log("getWeather",response);
    
    yield put({
      type: WEATHER_GET_SUCCESS,
      payload: {data: response.data},
    });
  }
  catch (err) {
    yield put({
      type: WEATHER_GET_FAILURE,
      payload: {message: err},
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(WEATHER_GET, getWeather),
  ]);
}
