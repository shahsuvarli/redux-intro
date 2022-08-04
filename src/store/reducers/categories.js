import * as types from "../types/category";

const initState = {
  sub_categories: ["drink", "food"],
};

export const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_SUB:
      return { ...state, sub_categories: action.payload };
    default:
      return state;
  }
};
