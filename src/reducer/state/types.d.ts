import {Move} from "../../types";

export interface InitialStateState {
  genre: `All genres`;
  activeCard: void;
  filmsLength: number;
  isPlayingMovie: boolean;
}

export interface ActionTypeState {
  CHANGE_GENRE_FILTER: string;
  CHANGE_FILTER_BY_GENRE: string;
  SET_FILMS_LENGTH: string;
  SET_ACTIVE_FILM: string;
  IS_PLAYING_FILM: string;
  ACTIVATE_PLAYING_FILM: string;
  GET_ACTIVE_FILM_ID: string;
  SET_FILMS_ADDED_TO_WATCH: string;
}

export interface TypeAndPayloadState {
  type: string,
  payload: number | string | boolean,
}

export interface SelectorsState {
  movies: string[];
  activeCard: string;
  isPlayingMovie: boolean
}

export interface GenresListState {
  activeGenre: string;
  allGenres: string[];
}

export interface MainFromState {
  movies: Move[];
  filmsLength: number;
  film: string;
  isPlayingMovie: boolean;
}

