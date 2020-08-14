import NameSpace from "../name-space";

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export const getShowSendError = (state) => state[NameSpace.USER].showSendError;

export const getFavoritesFilms = (state) => state[NameSpace.USER].favoritesFilms;

export const getOnReviewSuccess = (state) => state[NameSpace.USER].onReviewSuccess;

export const getReviews = (state) => state[NameSpace.USER].reviews;

export const getIsSent = (state) => state[NameSpace.USER].isSent;
