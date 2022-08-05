import axios from "axios";
import * as types from "../types/products";

export const fillProducts = () => {
  axios.get("https://fakestoreapi.com/products").then((res) => {
    return { type: types.GET_PRODUCTS, payload: res.data };
  });
};

export const setArtir = (payload) => {
  return { type: types.ARTIR, payload };
};
