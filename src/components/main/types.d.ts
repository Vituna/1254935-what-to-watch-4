import {Move} from "../../types";

export interface MainProps {
  movies: Move[];
  filmsLength: number;
  onShowMoreClick: () => void;
  onPlayButtonClick: () => void;
}

export interface StateReducerMain {
  filmsLength: number;
  movies: string;
}
