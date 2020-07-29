import {Move, FullMove} from "../../types";

interface MoviesPageFromProps {
  movies: Move[];
  movie: FullMove;
  activeTab: string;
  renderTabs: () => void;
}

interface MoviesPageFromStore {
  movies: Move[];
}

interface MoviesPageDispatchFromStore {
  onPlayButtonClick: () => void;
}

export type MoviesPageProps = MoviesPageFromProps & MoviesPageDispatchFromStore;

export interface MoviesPageFromState {
  movies: Move[];
}
