import React, { useEffect } from "react";
import axios from "axios";
import { store } from "../store";
import { batch, useDispatch, useSelector } from "react-redux";
import { fillMovies, setArtir } from "../store/actions/home";

const Component1 = (props) => {
  const state = useSelector((state) => state);
  // const homePrice = useSelector((state) => state.home.price);

  const dispatch = useDispatch();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios
      .get(
        "http://www.omdbapi.com/?s=series&apikey=9094cc9e"
      )
      .then((res) => {
        dispatch(fillMovies(res.data.Search));
      });
  };

  console.log("props", props);
  console.log("state", state);

  return (
    <div>
      Component1
      <button
        onClick={() =>
          batch(() => {
            dispatch(setArtir(100));
            dispatch({ type: "AZALT", payload: -100 });
          })
        }
      >
        price deyish
      </button>
      <button
        onClick={() => {
          console.log(store.getState());
        }}
      >
        show store
      </button>
      <div>{props.mehsulQiymeti}</div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   mehsulQiymeti: state.home.price,
//   subCategories: state.categories.sub_categories,
// });

// export default connect(mapStateToProps, null)(Component1);
export default Component1;
