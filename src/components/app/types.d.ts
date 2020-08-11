import {FullMoves} from "../../types";
import {ReactNode} from "react";

interface AppStateFromStore {
  movies: FullMoves;
  active: FullMoves;
  authorizationStatus: string;
  activeCard: string;
  isPlayingMovie: boolean;
}

interface AppDispatchFromStore {
  onPlayerExitClick: () => void;
  login: (authData: { email: string; password: string }) => void;
}

export type AppProps = AppStateFromStore & AppDispatchFromStore;

export interface AppFromState {
  movies: FullMoves;
  activeCard: string;
  isPlayingMovie: boolean;
}
