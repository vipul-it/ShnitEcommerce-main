// import { addItemToCart, removeItemFromCart } from './cartAction';

// export const addItemToCart = data =>({

//     type: ADD_TO_CART,
//     payload: data,
// });

// export const removeItemFromCart = index => ({
//     type: REMOVE_FROM_CART,
//     payload: index,
// });

export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  
  export const deleteFromCart = (productId) => {
    return {
      type: 'DELETE_FROM_CART',
      payload: productId,
    };
  };
  