import {FullMoves, FilmMain} from "../../types";

interface MainFromStore {
  movies: FullMoves[];
  filmsLength: number;
  isPlayingMovie: boolean;
  authorizationStatus: string;
  favoritesFilms: FullMoves[];
}

interface MainDispatchFromStore {
  onShowMoreClick: () => void;
  onAddButtonClick: (id: number, status: number) => void;
}

export interface MainFromState {
  movies: FullMoves[];
  filmsLength: number;
  isPlayingMovie: boolean;
  activeGenre: string;
  allGenres: string[];
}

interface AdditionalProps {
  movie: FilmMain;

  onAddButtonClick: (evt: MouseEvent) => void;
  isAuthorized: boolean
  favoritesFilms: FullMoves[];
}

export type MainProps = AdditionalProps & MainFromStore & MainDispatchFromStore
