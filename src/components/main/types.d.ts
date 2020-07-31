import {FullMoves, FilmMain} from "../../types";

interface MainFromStore {
  movies: FullMoves[];
  filmsLength: number;
  movie: FilmMain;
  isPlayingMovie: boolean;
}

interface MainDispatchFromStore {
  onShowMoreClick: () => void;
  onPlayButtonClick: () => void;
}

export interface MainFromState {
  movies: FullMoves[];
  filmsLength: number;
  movie: FilmMain;
  isPlayingMovie: boolean;
  activeGenre: string;
  allGenres: string[];
}

export type MainProps = MainFromStore & MainDispatchFromStore
