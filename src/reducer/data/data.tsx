import {AxiosResponse, AxiosInstance} from "axios";

import {extend} from "../../utils";
import {filmAdapter} from "../../adapter/adapter";
import {InitialStateData, ActionTypeData, TypeAndPayloadData} from "./types";
import {FullMoves, FilmMain} from "../../types";

const initialState: InitialStateData = {
  movies: [],
  promoFilm: {},
};

const ActionType: ActionTypeData = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`
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
  }
};

const Operation = {
  loadFilms: () => (dispatch: any, getState: FullMoves, api: AxiosInstance) => {
    return api.get(`/films`)
      .then((response: AxiosResponse) => {
        dispatch(ActionCreator.loadFilms(response.data.map((film: string) => filmAdapter(film))));
      });
  },
  loadPromoFilm: () => (dispatch: any, getState: FilmMain, api: AxiosInstance) => {
    return api.get(`/films/promo`)
      .then((response: AxiosResponse) => {
        dispatch(ActionCreator.loadPromoFilm(filmAdapter(response.data)));
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
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
