import {Move} from "../../types";

export interface MainProps {
  movies: Move[];
  filmsLength: number;
  onTitleClick: () => void;
  onCardClick: () => void;
  onShowMoreClick: () => void;
  onPlayButtonClick: () => void;
}
