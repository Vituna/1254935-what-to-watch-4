import NameSpace from "../name-space";
import {getGenresList} from "../../utils";
import {MainFromState} from "../../components/main/types";
import {AppFromState} from "../../components/app/types";
import {MoviesPageFromState} from "../../components/movie-page/types";
import {GenresListFromState} from "../../components/genres-list/types";

export const getFilms = (state: MoviesPageFromState) => state[NameSpace.DATA].movies;

export const getPromoFilm = (state: MainFromState | AppFromState) => state[NameSpace.DATA].promoFilm;

export const getAllGenres = (state: GenresListFromState) => getGenresList(state[NameSpace.DATA].movies);

export const getLoadingFilmsState = (state) => state[NameSpace.DATA].isLoadingFilms;

export const getLoadingPromoFilmState = (state) => state[NameSpace.DATA].isLoadingPromoFilm;
