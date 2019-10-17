import { createActions } from 'redux-actions';
import { ActionTypes } from '../constants';

const {FORECAST_GET} = ActionTypes;

export const {
  forecastGet: getForecast
} = createActions({
  [FORECAST_GET]: (payload) => ({payload})
});
