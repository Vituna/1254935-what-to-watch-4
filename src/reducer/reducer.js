import movieСardsSettings from "../mocks/movie-cards-settings.js";
import {movieDetails, movieDetail} from "../mocks/movie-info.js";
import movieReviews from "../mocks/movie-reviews.js";
import {DefaultGenre} from "../consts.js";
import {extend} from "../utils.js";

const movieTitle = movieDetails.title;
const movieGenre = movieDetails.genre;
const movieReleaseDate = movieDetails.year;

const genres = Array.from(new Set(movieСardsSettings.map((film) => film.genre)));
genres.unshift(DefaultGenre);

const initialState = {
  movieСardsSettings,
  movieDetails,
  movieTitle,
  movieGenre,
  movieReleaseDate,
  movieDetail,
  movieReviews,
  activeGenre: DefaultGenre,
  genres,
  activeCard: null,
};

const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
};

const getFilmsByGenre = (movies, genre) => {
  return movies.filter((movie) => movie.genre === genre);
};

const ActionCreator = {
  changeFilter: (filter) => ({
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: filter,
  }),

  getFilmsByGenre: (genre) => {
    if (genre === DefaultGenre) {
      return {
        type: ActionType.GET_FILMS_BY_GENRE,
        payload: initialState.movieСardsSettings,
      };
    }

    const filteredFilms = getFilmsByGenre(initialState.movieСardsSettings, genre);

    return {
      type: ActionType.GET_FILMS_BY_GENRE,
      payload: filteredFilms,
    };
  },
};

const reducer = (state = extend(initialState), action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.GET_FILMS_BY_GENRE:
      return extend(state, {
        movieСardsSettings: action.payload,
      });

    case ActionType.GET_ACTIVE_FILM:
      return extend(state, {
        activeCard: action.payload,
      });

  }

  return state;
};

export {reducer, ActionType, ActionCreator, genres, getFilmsByGenre};
