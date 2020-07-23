import {FullMoves} from "../../types";

export interface AppProps {
  movies: FullMoves[];
  activeCard: string;
  isPlayingMovie: boolean;
  onFilmTitleClick: () => void;
  onPlayerExitClick: () => void;
}
