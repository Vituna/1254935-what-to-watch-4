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
};

const ActionType: ActionTypeUser = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

const ActionCreator = {
  requireAuthorization: (status: string): TypeAndPayloadUser => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
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
};


export {reducer, ActionType, ActionCreator, AuthorizationStatus, Operation};
