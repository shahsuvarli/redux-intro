import React from "react";
import { connect } from "react-redux";
import { setArtir } from "./store/reducers/actions/products";

function ReduxWithConnect(props) {
  return (
    <div className="cards">
      <button
        onClick={() => {
          props.artirDispatch(1000);
        }}
      >
        ARTIR (with connect)
      </button>
      price:{props.price}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    price: state.products.price,
    count: state.products.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { artirDispatch: (payload) => dispatch(setArtir(payload)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxWithConnect);
