import * as types from "./types/products";

const initState = {
  products: [],
  price: 0,
  count: 10,
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ARTIR:
      return { ...state, price: action.payload };
    case types.SOLD:
      return { ...state, count: state.count - 1 };
    case types.GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
