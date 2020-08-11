import {ReactNode} from "react";

import {DefaultGenre, FILMS_LENGTH} from "../../consts";
import {extend} from "../../utils";
import {InitialStateState, ActionTypeState, TypeAndPayloadState} from "./types";

const initialState: InitialStateState = {
  genre: DefaultGenre,
  filmsLength: FILMS_LENGTH,
  isPlayingMovie: false,
  activeCard: null,
  filmsAddedToWatch: new Set(),
};

const ActionType: ActionTypeState = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  SET_FILMS_LENGTH: `SET_FILMS_LENGTH`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  IS_PLAYING_FILM: `IS_PLAYING_FILM`,
  ACTIVATE_PLAYING_FILM: `ACTIVATE_PLAYING_FILM`,
  GET_ACTIVE_FILM_ID: `GET_ACTIVE_FILM_ID`,
  SET_FILMS_ADDED_TO_WATCH: `SET_FILMS_ADDED_TO_WATCH`,
};

const ActionCreator = {
  changeFilter: (filter: string): ReactNode => ({
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: filter,
  }),

  changeCurrentGenre: (genre: string): ReactNode => ({
    type: ActionType.CHANGE_FILTER_BY_GENRE,
    payload: genre,
  }),

  changeActiveFilm: (filmTitle: string): ReactNode => ({
    type: ActionType.SET_ACTIVE_FILM,
    payload: filmTitle,
  }),

  changeFilmsLength: (): TypeAndPayloadState => ({
    type: ActionType.SET_FILMS_LENGTH,
    payload: FILMS_LENGTH,
  }),

  dropFilmsLength: (): TypeAndPayloadState => ({
    type: ActionType.SET_FILMS_LENGTH,
    payload: FILMS_LENGTH,
  }),

  dropIsPlayingFilm: (): TypeAndPayloadState => ({
    type: ActionType.IS_PLAYING_FILM,
    payload: false,
  }),

  activatePlayingFilm: (): TypeAndPayloadState => ({
    type: ActionType.ACTIVATE_PLAYING_FILM,
    payload: true,
  }),

  getActiveFilmId: (id: number): ReactNode => ({
    type: ActionType.GET_ACTIVE_FILM_ID,
    payload: id
  }),

  setFilmsAddedToWatch: (list) => ({
    type: ActionType.SET_FILMS_ADDED_TO_WATCH,
    payload: list,
  }),
};

const reducer = (state = extend(initialState), action: TypeAndPayloadState): ReactNode => {
  switch (action.type) {

    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {
        genre: action.payload,
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

    case ActionType.GET_ACTIVE_FILM_ID:
      return extend(state, {
        activeCard: action.payload
      });

    case ActionType.SET_FILMS_ADDED_TO_WATCH:
      return extend(state, {
        filmsAddedToWatch: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
