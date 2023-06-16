import { addItemToCart, removeItemFromCart } from './Action';

export const addItemToCart = data =>({

    type: ADD_TO_CART,
    payload: data,
});

export const removeItemFromCart = index => ({
    type: REMOVE_FROM_CART,
    payload: index,
});