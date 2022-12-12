import { createSelector } from 'reselect';

import { UserState } from './user.reducer';

export const selectUserReducerState = (state): UserState => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducerState],
    (userReducerState) => userReducerState.currentUser
);