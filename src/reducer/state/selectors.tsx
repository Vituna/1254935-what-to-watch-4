import {createSelector} from "reselect";

import {getFilms} from "../data/selectors";
import NameSpace from "../name-space";
import {DEFAULT_GENRE} from "../../consts";
import {getFilteredFilms} from "../../utils";

export const getCurrentGenre = (state) => state[NameSpace.STATE].genre;

export const getShownMovies = (state) => state[NameSpace.STATE].filmsLength;

export const getState = (state) => state[NameSpace.STATE].isPlayingMovie;

export const getFilmsByGenre = createSelector(
    getFilms,
    getCurrentGenre,
    (films, genre) => {
      return (genre === DEFAULT_GENRE) ? films : getFilteredFilms(films, genre);
    }
);
