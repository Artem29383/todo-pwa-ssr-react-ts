import { all, fork, join } from 'redux-saga/effects';

import { sagaMiddleware } from '../src/store/server';

type SagaWorker = (...args: any[]) => void;

export default (sagasToRun: any, params: Record<string, string>) => {
  const sagas = sagasToRun.map(saga => {
    if (Array.isArray(saga)) {
      return saga[0].bind(null, saga[1](params)) as SagaWorker;
    }

    return saga;
  });

  return sagaMiddleware
    .run(function*() {
      const tasks = yield all(sagas.map(saga => fork(saga)));
      // @ts-ignore
      yield all(tasks.map(task => join(task)));
    })
    .toPromise();
};
