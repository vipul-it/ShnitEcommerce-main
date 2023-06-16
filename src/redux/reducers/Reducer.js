import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/ActionType";

const reducers = (initialState = [], actions) => {
  switch (actions) {
    case ADD_TO_CART:
      return [...initialState, ...actions.payload];

    case REMOVE_FROM_CART:
      const deleteArray = initialState.filter((item, index)=>{
        return index !== actions.payload;
      });

      return deleteArray;

      default: 
      return initialState;
  }
};

export default reducers;
