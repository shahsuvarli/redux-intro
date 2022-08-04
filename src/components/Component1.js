import React, { useEffect } from "react";
import axios from "axios";

function Component1() {
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/550?api_key=d83f024ca7d748222de8223f34bb78d2"
      )
      .then((res) => {});
  };

  return <div>Component1</div>;
}

export default Component1;
