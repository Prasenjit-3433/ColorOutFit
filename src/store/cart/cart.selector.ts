import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CartState } from './cart.reducer';

// select cartReducer's state
const selectCartReducerState = (state: RootState): CartState => state.cart;

// Gives us cartItems
export const selectCartItems = createSelector(
    [selectCartReducerState],
    (cartReducerState) => cartReducerState.cartItems
);

// Gives us isCartOpen
export const selectIsCartOpen = createSelector(
    [selectCartReducerState],
    (cartReducerState) => cartReducerState.isCartOpen
);

// calculate cartCount
export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0)
);

// calculate cartTotal
export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem)=> total + cartItem.quantity * cartItem.price, 0)
);
