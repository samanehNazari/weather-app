import { combineReducers } from 'redux'
import weather from './weather'
import forecast from './forecast'

const rootReducer =  combineReducers({
  ...weather,
  ...forecast
})

export default rootReducer;
