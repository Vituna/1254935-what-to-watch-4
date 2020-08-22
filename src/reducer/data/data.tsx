import {AxiosResponse, AxiosInstance} from "axios";

import {extend} from "../../utils";
import {filmAdapter} from "../../adapter/adapter";
import {InitialStateData, ActionTypeData, TypeAndPayloadData} from "./types";

const initialState: InitialStateData = {
  movies: [],
  promoFilm: {},
  isLoadingFilms: true,
  isLoadingPromoFilm: true,
};

const ActionType: ActionTypeData = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOADING_FILMS: `LOADING_FILMS`,
  LOADING_PROMO_FILM: `LOADING_PROMO_FILM`,
};

const ActionCreator = {
  loadFilms: (movies: string): TypeAndPayloadData => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: movies
    };
  },
  loadPromoFilm: (promoFilm: string): TypeAndPayloadData => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: promoFilm
    };
  },
  loadingFilms: (bool) => ({
    type: ActionType.LOADING_FILMS,
    payload: bool
  }),
  loadingPromoFilm: (bool) => ({
    type: ActionType.LOADING_PROMO_FILM,
    payload: bool
  }),
};

const Operation = {
  loadFilms: () => (dispatch: any, getState, api: AxiosInstance) => {
    return api.get(`/films`)
      .then((response: AxiosResponse) => {
        dispatch(ActionCreator.loadFilms(response.data.map((film: string) => filmAdapter(film))));
        dispatch(ActionCreator.loadingFilms(false));
      });
  },
  loadPromoFilm: () => (dispatch: any, getState, api: AxiosInstance) => {
    return api.get(`/films/promo`)
      .then((response: AxiosResponse) => {
        dispatch(ActionCreator.loadPromoFilm(filmAdapter(response.data)));
        dispatch(ActionCreator.loadingPromoFilm(false));
      });
  }
};

const reducer = (state = extend(initialState), action: TypeAndPayloadData) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        movies: action.payload
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload
      });
    case ActionType.LOADING_FILMS:
      return extend(state, {
        isLoadingFilms: action.payload
      });
    case ActionType.LOADING_PROMO_FILM:
      return extend(state, {
        isLoadingPromoFilm: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
