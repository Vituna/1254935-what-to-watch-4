import {FullMoves} from "../../types";

interface AppStateFromStore {
  movies: FullMoves;
  active: FullMoves;
  activeCard: string;
  isPlayingMovie: boolean;
}

interface AppDispatchFromStore {
  onPlayerExitClick: () => void;
  }

export type AppProps = AppStateFromStore & AppDispatchFromStore;

export interface AppFromState {
  movies: FullMoves;
  activeCard: string;
  isPlayingMovie: boolean;
}
