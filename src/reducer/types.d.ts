import {mixed} from "utility-types/dist/utility-types";

import {FullMoves, MovieDetail} from "../types";

export interface InitialStateReducer {
  movies: FullMoves[];
  movieDetail: MovieDetail;
  activeGenre: string;
  genres: Array<mixed>;
  activeCard: void;
  filmsLength: number;
  isPlayingMovie: boolean;
}

export interface ActionTypeReducer {
  CHANGE_GENRE_FILTER: string;
  GET_FILMS_BY_GENRE: string;
  SET_FILMS_LENGTH: string;
  SET_ACTIVE_FILM: string;
  IS_PLAYING_FILM: string;
  ACTIVATE_PLAYING_FILM: string;
}

export interface TypeAndPayloadReducer {
  type: string,
  payload: number | string | boolean,
}
