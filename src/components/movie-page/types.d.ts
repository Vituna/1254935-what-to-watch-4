import {Move, FullMove} from "../../types";

export interface MoviesPageProps {
  movies: Move[];
  movie: FullMove;
  filmsLength: number;
  activeTab: string;
  onTitleClick: () => void;
  onCardClick: () => void;
  renderTabs: () => void;
  onCardMouseLeave: () => void;
  onShowMoreClick: () => void;
  onPlayButtonClick: () => void;
}
