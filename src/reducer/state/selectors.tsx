import {createSelector} from "reselect";

import {getFilms} from "../data/selectors";
import NameSpace from "../name-space";
import {DefaultGenre} from "../../consts";
import {getFilteredFilms} from "../../utils";

export const getActiveFilmId = (state) => state[NameSpace.STATE].activeCard;

export const getActive = (state) => state[NameSpace.STATE].activeCard;

export const getCurrentGenre = (state) => state[NameSpace.STATE].genre;

export const getShownMovies = (state) => state[NameSpace.STATE].filmsLength;

export const getState = (state) => state[NameSpace.STATE].isPlayingMovie;

export const getFilmsByGenre = createSelector(
    getFilms,
    getCurrentGenre,
    (movies, genre) => {
      return (genre === DefaultGenre) ? movies : getFilteredFilms(movies, genre);
    }
);

export const getSelectedMovie = createSelector(
    getFilms,
    getActiveFilmId,
    (movies, id) => {
      return movies.find((movie) => {
        return movie.id === id;
      });
    }
);
