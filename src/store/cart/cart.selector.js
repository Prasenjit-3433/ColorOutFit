import { createSelector } from 'reselect';

// select cartReducer's state
const selectCartReducerState = (state) => state.cart;

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
