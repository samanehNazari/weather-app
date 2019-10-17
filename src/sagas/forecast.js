import { all, call, put, takeLatest } from 'redux-saga/effects';
import { forecast } from '../services';
import { ActionTypes } from '../constants';

const {FORECAST_GET, FORECAST_GET_SUCCESS, FORECAST_GET_FAILURE} = ActionTypes;


export function* getForecast({payload}) {
  try {
    const response = yield call(forecast.get, payload);
    console.log("getForecast",response);
    
    yield put({
      type: FORECAST_GET_SUCCESS,
      payload: {data: response.data},
    });
  }
  catch (err) {
    yield put({
      type: FORECAST_GET_FAILURE,
      payload: {message: err},
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(FORECAST_GET, getForecast),
  ]);
}
