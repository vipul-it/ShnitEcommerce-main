// import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/ActionType";

// const reducers = (initialState = [], actions) => {
//   switch (actions) {
//     case ADD_TO_CART:
//       return [...initialState, ...actions.payload];

//     case REMOVE_FROM_CART:
//       const deleteArray = initialState.filter((item, index)=>{
//         return index !== actions.payload;
//       });

//       return deleteArray;

//       default: 
//       return initialState;
//   }
// };

// export default reducers;

const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case 'DELETE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  
  