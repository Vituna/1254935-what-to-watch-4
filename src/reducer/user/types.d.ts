export interface AuthorizationStatusUser {
  AUTH: string,
  NO_AUTH: string,
}

export interface InitialStateUser {
  authorizationStatus: string,
  onReviewSuccess: boolean,
  showSendError: boolean
}

export interface ActionTypeUser {
  REQUIRED_AUTHORIZATION: string,
  SEND_REVIEW: string,
  SET_SHOW_SEND_ERROR: string
}

export interface TypeAndPayloadUser {
  type: string,
  payload: number | string | boolean,
}
