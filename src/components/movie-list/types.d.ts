import {Move} from "../../types";

export interface MovieListProps {
  movies: Move[];
  onTitleClick: () => void;
  onCardClick: () => void;
  onCardMouseEnter: () => void;
  onCardMouseLeave: () => void;
  onShowMoreClick: () => void;
}
