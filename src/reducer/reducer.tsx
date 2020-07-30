import {ReactNode} from "react";

import {movies} from "../mocks/movies.js";
import {movieDetail} from "../mocks/movie-info.js";
import {DefaultGenre, FILMS_LENGTH} from "../consts.js";
import {extend} from "../utils.js";
import {FullMoves} from "../types";
import {InitialStateReducer, ActionTypeReducer, TypeAndPayloadReducer} from "./types";

const genres = Array.from(new Set(movies.map((film: { genre: string }) => film.genre)));
genres.unshift(DefaultGenre);

const initialState: InitialStateReducer = {
  movies,
  movieDetail,
  activeGenre: DefaultGenre,
  genres,
  activeCard: null,
  filmsLength: FILMS_LENGTH,
  isPlayingMovie: false,
};

const ActionType: ActionTypeReducer = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  SET_FILMS_LENGTH: `SET_FILMS_LENGTH`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  IS_PLAYING_FILM: `IS_PLAYING_FILM`,
  ACTIVATE_PLAYING_FILM: `ACTIVATE_PLAYING_FILM`,
};

const getFilmsByGenre = (films: FullMoves[], genre: string): ReactNode => {
  return films.filter((film) => film.genre === genre);
};

const ActionCreator = {
  changeFilter: (filter: string): ReactNode => ({
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: filter,
  }),

  getFilmsByGenre: (genre: string): ReactNode => {
    if (genre === DefaultGenre) {
      return {
        type: ActionType.GET_FILMS_BY_GENRE,
        payload: initialState.movies,
      };
    }

    const filteredFilms: ReactNode = getFilmsByGenre(initialState.movies, genre);

    return {
      type: ActionType.GET_FILMS_BY_GENRE,
      payload: filteredFilms,
    };
  },

  changeFilmsLength: (): TypeAndPayloadReducer => ({
    type: ActionType.SET_FILMS_LENGTH,
    payload: FILMS_LENGTH,
  }),

  changeActiveFilm: (filmTitle: string): TypeAndPayloadReducer => ({
    type: ActionType.SET_ACTIVE_FILM,
    payload: filmTitle,
  }),

  dropIsPlayingFilm: (): TypeAndPayloadReducer => ({
    type: ActionType.IS_PLAYING_FILM,
    payload: false,
  }),

  activatePlayingFilm: (): TypeAndPayloadReducer => ({
    type: ActionType.ACTIVATE_PLAYING_FILM,
    payload: true,
  }),
};

const reducer = (state = extend(initialState), action: TypeAndPayloadReducer): ReactNode => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.GET_FILMS_BY_GENRE:
      return extend(state, {
        movies: action.payload,
      });

    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {
        activeCard: action.payload,
      });

    case ActionType.SET_FILMS_LENGTH:
      return extend(state, {
        filmsLength: state.filmsLength + action.payload,
      });

    case ActionType.IS_PLAYING_FILM:
      return extend(state, {
        isPlayingMovie: action.payload,
      });

    case ActionType.ACTIVATE_PLAYING_FILM:
      return extend(state, {
        isPlayingMovie: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
