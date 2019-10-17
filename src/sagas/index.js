import { all, fork } from 'redux-saga/effects';
import weather from './weather';
import forecast from './forecast';

export default function* rootSaga() {
  yield all([
    fork(weather),
    fork(forecast)
  ])
}
