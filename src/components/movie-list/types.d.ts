import {Move} from "../../types";

export interface MovieListProps {
  movies: Move[];
  onCardMouseEnter: () => void;
  onCardMouseLeave: () => void;
  onShowMoreClick: () => void;
}
