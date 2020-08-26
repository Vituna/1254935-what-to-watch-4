import {createBrowserHistory} from "history";

import {DEFAULT_GENRE, RatingType, MovieRating, MAM_SIMILAR_CARDS} from "./consts";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getFilteredFilms = (films, genre) => films.filter((film) => film.genre === genre);


export const getGenresList = (movies) => [DEFAULT_GENRE, ...new Set(movies.map((film) => film.genre))];

export const history = createBrowserHistory();

export const getCurentFilm = (films, props) => {
  return films.find((film) => film.id === Number(props.match.params.id));
};

export const getRatingLevel = (rating) => {
  if (rating >= MovieRating.BAD && rating < MovieRating.NORMAL) {
    return RatingType.BAD;
  }
  if (rating < MovieRating.GOOD) {
    return RatingType.NORMAL;
  }
  if (rating < MovieRating.VERY_GOOD) {
    return RatingType.GOOD;
  }
  if (rating < MovieRating.AWESOME) {
    return RatingType.VERY_GOOD;
  }
  if (rating === MovieRating.AWESOME) {
    return RatingType.AWESOME;
  }
  return null;
};

export const getDeleteFavoritesFilm = (movie, favorit) => [favorit].filter((film) => film.id !== movie.id);

export const getSimilarCards = (movies, movie) => {
  return movies.filter((film) => movie && film.id !== movie.id && film.genre === movie.genre).slice(0, MAM_SIMILAR_CARDS);
};

