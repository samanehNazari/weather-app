import { handleActions } from 'redux-actions';
import { ActionTypes, STATUS } from '../constants';
import immutable from 'immutability-helper';

export const forecastState = {
  data: {},
  status: STATUS.IDLE,
  message: '',
};

const {FORECAST_GET, FORECAST_GET_SUCCESS, FORECAST_GET_FAILURE} = ActionTypes;

export default {
  forecast: handleActions({
    [FORECAST_GET]: (state) => immutable(state, {
      status: {$set: STATUS.IDLE},
      data: {$set: {}},
    }),
    [FORECAST_GET_SUCCESS]: (state, {payload}) => immutable(state, {
      data: {$set: payload.data.list || {}},
      status: {$set: STATUS.READY},
    }),
    [FORECAST_GET_FAILURE]: (state, {payload}) => immutable(state, {
      message: {$set: payload.message},
      status: {$set: STATUS.ERROR},
    }),
  }, forecastState)
}
