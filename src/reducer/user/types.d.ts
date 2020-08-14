import {Review, FullMoves} from "../../types";

export interface AuthorizationStatusUser {
  AUTH: string,
  NO_AUTH: string,
}

export interface InitialStateUser {
  authorizationStatus: string,
  onReviewSuccess: boolean,
  showSendError: boolean
  favoritesFilms: FullMoves[],
  isSent: boolean,
  reviews: Review[],
}

export interface ActionTypeUser {
  REQUIRED_AUTHORIZATION: string,
  SEND_REVIEW: string,
  SET_SHOW_SEND_ERROR: string
  LOAD_REVIEV: string,
  LOAD_FAVORITES_FILMS: string,
  ADD_FAVORITES_FILM: string,
  DELETE_FAVORITES_FILM: string,
  ACTIVATE_SENT: string,
  DEACTIVATE_SENT: string,

}

export interface TypeAndPayloadUser {
  type: string | number,
  payload: any,
}
