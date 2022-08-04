import * as types from "../types/home";

const initState = {
  price: 10,
  value: 0,
  movies: [],
};

export const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ARTIR:
      return { ...state, price: action.payload };
    case types.AZALT:
      return { ...state, value: action.payload };
    case types.FILL_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};
