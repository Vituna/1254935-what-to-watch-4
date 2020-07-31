import NameSpace from "../name-space";
import {getGenresList} from "../../utils";
import {SelectorsData} from "./types";
import {MainFromState} from "../../components/main/types";
import {AppFromState} from "../../components/app/types";
import {MoviesPageFromState} from "../../components/movie-page/types";
import {GenresListFromState} from "../../components/genres-list/types";

export const getFilms = (state: MoviesPageFromState) => state[NameSpace.DATA].movies;

export const getPromoFilm = (state: MainFromState | AppFromState) => state[NameSpace.DATA].promoFilm;

export const getComments = (state: SelectorsData) => state[NameSpace.DATA].comments;

export const getAllGenres = (state: GenresListFromState) => getGenresList(state[NameSpace.DATA].movies);
// MoviesPageFromState & MainFromState
