import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from "./../models";

export const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(sagaMiddleware),
  reducer: rootReducer,
  devTools: true,
});
