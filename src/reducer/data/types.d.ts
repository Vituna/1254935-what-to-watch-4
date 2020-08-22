import {match} from "react-router";

import {FullMoves, FilmMain} from "../../types";

export interface InitialStateData {
  movies: FullMoves[],
  promoFilm: object,
  isLoadingFilms: boolean,
  isLoadingPromoFilm: boolean,
}

export interface ActionTypeData {
  LOAD_FILMS: string,
  LOAD_PROMO_FILM: string,
  LOADING_FILMS: string,
  LOADING_PROMO_FILM: string,
}

export interface TypeAndPayloadData {
  type: string,
  payload: number | string | boolean,
}
