export interface AuthorizationStatusUser {
  AUTH: string,
  NO_AUTH: string,
}

export interface InitialStateUser {
  authorizationStatus: string,
}

export interface ActionTypeUser {
  REQUIRED_AUTHORIZATION: string,
}

export interface TypeAndPayloadUser {
  type: string,
  payload: number | string | boolean,
}
