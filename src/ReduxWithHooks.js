import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS } from "./store/reducers/types/products";

function ReduxWithHooks() {
  const products = useSelector((state) => state.products.products);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(state)

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    });
  };

  return (
    <div className="cards">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          {product.category}
        </div>
      ))}
    </div>
  );
}

export default ReduxWithHooks;
