import {match} from "react-router";
import {mixed} from "utility-types/dist/utility-types";
import {FullMoves, MovieComments, FilmMain} from "../../types";

export interface InitialStateData {
  movies: FullMoves[],
  promoFilm: object,
}

export interface ActionTypeData {
  LOAD_FILMS: string,
  LOAD_PROMO_FILM: string,
}

export interface TypeAndPayloadData {
  type: string,
  payload: number | string | boolean,
}

export interface SelectorsData {
  comments: MovieComments[];
}

export interface DataStore {
  movies: FullMoves[],
  movie: FilmMain,
}
