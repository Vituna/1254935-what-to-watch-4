import {FullMoves} from "../../types";

interface AppStateFromStore {
  movies: FullMoves;
  active: FullMoves;
  authorizationStatus: string;
  showSendError: boolean;
  activeCard: string;
  isPlayingMovie: boolean;
}

interface AppDispatchFromStore {
  onPlayerExitClick: () => void;
  login: (authData: { email: string; password: string }) => void;
  sendReview: (reviewData: { rating: string; comment: string }) => void;
}

export type AppProps = AppStateFromStore & AppDispatchFromStore;

export interface AppFromState {
  movies: FullMoves;
  activeCard: string;
  isPlayingMovie: boolean;
}
