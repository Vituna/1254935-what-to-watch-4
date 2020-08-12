import {FullMoves, FilmMain} from "../../types";

interface MainFromStore {
  movies: FullMoves[];
  filmsLength: number;
  movie: FilmMain;
  isPlayingMovie: boolean;
  authorizationStatus: string;
  favoritesFilms: FullMoves[];
}

interface MainDispatchFromStore {
  onShowMoreClick: () => void;
  onPlayButtonClick: () => void;
  onAddButtonClick: (id: number, status: number) => void;
}

export interface MainFromState {
  movies: FullMoves[];
  filmsLength: number;
  movie: FilmMain;
  isPlayingMovie: boolean;
  activeGenre: string;
  allGenres: string[];
}

interface AdditionalProps {
  onAddButtonClick: (evt: MouseEvent) => void;
}

export type MainProps = AdditionalProps & MainFromStore & MainDispatchFromStore
