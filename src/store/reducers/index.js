import { combineReducers } from "redux";
import { categoryReducer } from "./categories";
import { homeReducer } from "./home";

export const reducers = combineReducers({
  home: homeReducer,
  categories: categoryReducer,
});
