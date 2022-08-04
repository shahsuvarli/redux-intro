import { ARTIR, FILL_MOVIES } from "../types/home";

export const setArtir = (payload) => {
  return { type: ARTIR, payload };
};

export const fillMovies = (payload) => {
  return { type: FILL_MOVIES, payload };
};
