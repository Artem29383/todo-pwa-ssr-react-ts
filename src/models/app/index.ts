/* eslint-disable no-param-reassign, @typescript-eslint/no-unused-vars  */

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface App {
  list: { id: number, text: string, checked: boolean }[]
}

const initialState: App = {
  list: [{
    id: 3, checked: false, text: 'hui'
  }]
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setList(state: App, { payload }: PayloadAction<any>) {
      state.list = payload;
    },
    getList() {
      //
    },
  },
  extraReducers: {},
});

export const { actions } = appSlice;

export default appSlice.reducer;
