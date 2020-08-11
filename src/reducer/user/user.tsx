import {AxiosInstance} from "axios";

import {extend} from "../../utils";
import {FullMoves} from "../../types";
import {AuthorizationStatusUser, InitialStateUser, ActionTypeUser, TypeAndPayloadUser} from "./types";

const AuthorizationStatus: AuthorizationStatusUser = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState: InitialStateUser = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  onReviewSuccess: false,
  showSendError: false,
  favoritesFilms: [],
};

const ActionType: ActionTypeUser = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SEND_REVIEW: `SEND_REVIEW`,
  SET_SHOW_SEND_ERROR: `SET_SHOW_SEND_ERROR`,
};

const ActionCreator = {
  requireAuthorization: (status: string): TypeAndPayloadUser => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  sendReview: (status) => {
    return {
      type: ActionType.SEND_REVIEW,
      payload: status,
    };
  },

  setShowSendError: (status) => {
    return {
      type: ActionType.SET_SHOW_SEND_ERROR,
      payload: status,
    };
  },
};

const reducer = (state = extend(initialState), action: TypeAndPayloadUser): React.ReactNode => {
  switch (action.type) {

    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.SEND_REVIEW:
      return extend(state, {
        onReviewSuccess: action.payload,
      });

    case ActionType.SET_SHOW_SEND_ERROR:
      return extend(state, {
        showSendError: action.payload,
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch: any, getState: FullMoves, api: AxiosInstance) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData: { email: string; password: string }) => (dispatch: any, getState: FullMoves, api: AxiosInstance) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      });
  },

  sendReview: (reviewData: { rating: string; comment: string }) => (dispatch: any, getState: FullMoves, api: AxiosInstance) => {
    return api.post(`/comments/1`, {
      rating: reviewData.rating,
      comment: reviewData.comment,
    })
      .then(() => {
        dispatch(ActionCreator.sendReview(true));
      })

      .catch((err) => {
        dispatch(ActionCreator.setShowSendError(true));
        throw err;
      });
  },
};

export {reducer, ActionType, ActionCreator, AuthorizationStatus, Operation};
