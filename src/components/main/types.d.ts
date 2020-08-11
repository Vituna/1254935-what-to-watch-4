import {FullMoves, FilmMain} from "../../types";

interface MainFromStore {
  movies: FullMoves[];
  filmsLength: number;
  movie: FilmMain;
  isPlayingMovie: boolean;
  authorizationStatus: string;
  filmsAddedToWatch: Set<string>;
}

interface MainDispatchFromStore {
  onShowMoreClick: () => void;
  onPlayButtonClick: () => void;
  onAddButtonClick: (list: string) => void;
}

export interface MainFromState {
  movies: FullMoves[];
  filmsLength: number;
  movie: FilmMain;
  isPlayingMovie: boolean;
  activeGenre: string;
  allGenres: string[];
}

interface prostoProps {
  onAddButtonClick: (newFilmsAddedToWatch: any) => any;
  filmsAddedToWatch: any;

}

export type MainProps =prostoProps & MainFromStore & MainDispatchFromStore
