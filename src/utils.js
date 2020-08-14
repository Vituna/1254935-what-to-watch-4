import {createBrowserHistory} from "history";

import {DefaultGenre} from "./consts";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getFilteredFilms = (films, genre) => {
  return films.filter((film) => film.genre === genre);
};

export const getGenresList = (movies) => [DefaultGenre, ...new Set(movies.map((film) => film.genre))];

export const history = createBrowserHistory();

export const getCurentFilm = (films, props) => {
  return films.find((film) => film.id === Number(props.match.params.id));
};

export const getRatingLevel = (rating) => {
  if (rating >= 0 && rating < 3) {
    return `Bad`;
  }
  if (rating < 5) {
    return `Normal`;
  }
  if (rating < 8) {
    return `Good`;
  }
  if (rating < 10) {
    return `Very good`;
  }
  if (rating === 10) {
    return `Awesome`;
  }
  return null;
};
