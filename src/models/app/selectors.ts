import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "@/models";

export const listSelector = createSelector(
    (state: RootState) => state,
    state => state.app.list
);