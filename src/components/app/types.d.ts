import {FullMoves} from "../../types";

export interface AppProps {
  movies: FullMoves[];
  title: string;
}

export interface AppState {
  activeCard: string;
}
