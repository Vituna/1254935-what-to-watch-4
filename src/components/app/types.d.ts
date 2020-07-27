import {FullMoves} from "../../types";

export interface AppProps {
  movies: FullMoves[];
  activeCard: string;
  isPlayingMovie: boolean;
  onPlayerExitClick: () => void;
}

export interface StateReducerApp {
  movies: string;
  activeCard: string;
  isPlayingMovie: boolean
}
