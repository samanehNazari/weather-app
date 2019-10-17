import { handleActions } from 'redux-actions';
import { ActionTypes, STATUS } from '../constants';
import immutable from 'immutability-helper';

export const weatherState = {
  data: {},
  current: 0,
  status: STATUS.IDLE,
  message: '',
};

const {WEATHER_GET, WEATHER_GET_SUCCESS, WEATHER_GET_FAILURE} = ActionTypes;


export default {
  weather: handleActions({
    [WEATHER_GET]: (state) => immutable(state, {
      status: {$set: STATUS.IDLE},
      data: {$set: {}},
    }),
    [WEATHER_GET_SUCCESS]: (state, {payload}) => immutable(state, {
      data: {$set: payload.data || {}},
      current: {$set: payload.data.main},
      status: {$set: STATUS.READY},
    }),
    [WEATHER_GET_FAILURE]: (state, {payload}) => immutable(state, {
      message: {$set: payload.message},
      status: {$set: STATUS.ERROR},
    }),
  }, weatherState)
}
