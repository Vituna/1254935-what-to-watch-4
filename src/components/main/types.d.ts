import {Move} from "../../types";

export interface MainProps {
  movies: Move[];
  filmsLength: number;
  onShowMoreClick: () => void;
  onPlayButtonClick: () => void;
}
