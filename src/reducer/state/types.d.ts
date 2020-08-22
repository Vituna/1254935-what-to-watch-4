import {Move} from "../../types";

export interface InitialStateState {
  genre: string;
  filmsLength: number;
}

export interface ActionTypeState {
  CHANGE_GENRE_FILTER: string;
  CHANGE_FILTER_BY_GENRE: string;
  SET_FILMS_LENGTH: string;
}

export interface TypeAndPayloadState {
  type: string,
  payload: number | string | boolean,
}
