import {createBrowserHistory} from "history";

import {DefaultGenre} from "./consts";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getFilteredFilms = (films, genre) => {
  return films.filter((film) => film.genre === genre);
};

export const getGenresList = (movies) => [DefaultGenre, ...new Set(movies.map((film) => film.genre))];

const history = createBrowserHistory();

export default history;
