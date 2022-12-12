import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/firebase.utils';
import { signInSuccess, signOutSuccess, signInFailed, signOutFailed, signUpFailed } from './user.action';

export type UserState = {
    readonly currentUser: null | UserData;
    readonly isLoading: boolean;
    readonly error: null | Error
}

const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action: AnyAction): UserState => {
    if(signInSuccess.match(action)) {
        return { ...state, currentUser: action.payload };
    }

    if(signOutSuccess.match(action)) {
        return { ...state, currentUser: null };
    }

    if( signUpFailed.match(action) || signInFailed.match(action) || signOutFailed.match(action)) {
        return { ...state, error: action.payload };
    }

    return state;
}