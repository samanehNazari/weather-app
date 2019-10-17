import { createActions } from 'redux-actions';
import { ActionTypes } from '../constants';

const {WEATHER_GET} = ActionTypes;

export const {
  weatherGet: getWeather
} = createActions({
  [WEATHER_GET]: (payload) => ({payload})
});
