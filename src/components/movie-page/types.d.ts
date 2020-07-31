import {FullMoves, MoviePageProp} from "../../types";

interface MoviesPageFromProps {
  movies: FullMoves[];
  movie: MoviePageProp;
  activeTab: string;
  renderTabs: () => void;
}

interface MoviesPageFromStore {
  movies: FullMoves[];
}

interface MoviesPageDispatchFromStore {
  onPlayButtonClick: () => void;
}

export type MoviesPageProps = MoviesPageFromProps & MoviesPageDispatchFromStore;

export interface MoviesPageFromState {
  movies: FullMoves[];
  filmsLength: number;
  movie: MoviePageProp;
  isPlayingMovie: boolean;
  activeGenre: string;
  allGenres: string[];
}
