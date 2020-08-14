import {FullMoves, MoviePageProp} from "../../types";

interface MoviesPageFromProps {
  movies: FullMoves[];
  activeTab: string;
  authorizationStatus: string;
  favoritesFilms: FullMoves[];
  renderTabs: () => void;
}

interface MoviesPageFromStore {
  movies: FullMoves[];
  authorizationStatus: string;
  favoritesFilms: FullMoves[];

}

interface MoviesPageDispatchFromStore {
  onAddButtonClick: (id: number, status: any) => void;
}

export type MoviesPageProps = MoviesPageFromProps & MoviesPageDispatchFromStore;

export interface MoviesPageFromState {
  movies: FullMoves[];
  favoritesFilms: FullMoves[];
}
