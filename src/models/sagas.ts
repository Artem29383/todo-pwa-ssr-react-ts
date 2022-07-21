import { all } from 'redux-saga/effects';
import appSaga from './../models/app/sagas';

export const rootSaga = function* rootSaga() {
  yield all([
    appSaga()
  ]);
};
