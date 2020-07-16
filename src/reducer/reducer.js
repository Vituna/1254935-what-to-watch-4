import {movies} from "../mocks/movies.js";
import {movieDetail} from "../mocks/movie-info.js";
import {DefaultGenre, FILMS_LENGTH} from "../consts.js";
import {extend} from "../utils.js";

const genres = Array.from(new Set(movies.map((film) => film.genre)));
genres.unshift(DefaultGenre);

const initialState = {
  movies,
  movieDetail,
  activeGenre: DefaultGenre,
  genres,
  activeCard: null,
  filmsLength: FILMS_LENGTH,
};

const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  SET_FILMS_LENGTH: `SET_FILMS_LENGTH`,
};

const getFilmsByGenre = (films, genre) => {
  return films.filter((film) => film.genre === genre);
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
        payload: initialState.movies,
      };
    }

    const filteredFilms = getFilmsByGenre(initialState.movies, genre);

    return {
      type: ActionType.GET_FILMS_BY_GENRE,
      payload: filteredFilms,
    };
  },

  changeFilmsLength: () => ({
    type: ActionType.SET_FILMS_LENGTH,
    payload: FILMS_LENGTH,
  })
};

const reducer = (state = extend(initialState), action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.GET_FILMS_BY_GENRE:
      return extend(state, {
        movies: action.payload,
      });

    case ActionType.GET_ACTIVE_FILM:
      return extend(state, {
        activeCard: action.payload,
      });

    case ActionType.SET_FILMS_LENGTH:
      return extend(state, {
        filmsLength: state.filmsLength + action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
