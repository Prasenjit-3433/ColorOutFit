import { createSelector } from 'reselect';

import { RootState } from '../store';

import { UserState } from './user.reducer';

export const selectUserReducerState = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducerState],
    (userReducerState) => userReducerState.currentUser
);