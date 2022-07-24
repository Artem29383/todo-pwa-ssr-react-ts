import { put, takeLatest } from 'redux-saga/effects';

import { actions } from './index';
import {Api} from "@/api/req";

function* listUpdate() {
  try {
    const response: {id: number, checked: boolean, text: string}[] = yield Api.get('/list');
    yield put({
      type: actions.setList.type,
      payload: response,
    });
  } catch (err) {
    //
  }
}

export default function*() {
  yield takeLatest(actions.getList.type, listUpdate);
}
