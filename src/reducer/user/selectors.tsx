import NameSpace from "../name-space";

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export const getShowSendError = (state) => state[NameSpace.USER].showSendError;
