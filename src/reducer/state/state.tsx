import {ReactNode} from "react";

import {DEFAULT_GENRE, FILMS_LENGTH} from "../../consts";
import {extend} from "../../utils";
import {InitialStateState, ActionTypeState, TypeAndPayloadState} from "./types";

const initialState: InitialStateState = {
  genre: DEFAULT_GENRE,
  filmsLength: FILMS_LENGTH,
};

const ActionType: ActionTypeState = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  SET_FILMS_LENGTH: `SET_FILMS_LENGTH`,
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

  changeFilmsLength: (): TypeAndPayloadState => ({
    type: ActionType.SET_FILMS_LENGTH,
    payload: FILMS_LENGTH,
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

    case ActionType.SET_FILMS_LENGTH:
      return extend(state, {
        filmsLength: state.filmsLength + action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
