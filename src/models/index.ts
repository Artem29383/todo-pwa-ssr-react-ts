import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import appReducer from './app';

import history from './../history';

export const rootReducer = combineReducers({
  app: appReducer,
  router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;
