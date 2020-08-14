import {FullMoves, FilmMain} from "../../types";

interface AppStateFromStore {
  movies: FullMoves[];
  movie: FilmMain;
  authorizationStatus: string;
}

interface AppDispatchFromStore {
  login: (authData: { email: string; password: string }) => void;
}

export type AppProps = AppStateFromStore & AppDispatchFromStore;

export interface AppFromState {
  movies: FullMoves[];
}
