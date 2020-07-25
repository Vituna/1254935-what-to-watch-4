import {Move, FullMove} from "../../types";

export interface MoviesPageProps {
  movies: Move[];
  movie: FullMove;
  filmsLength: number;
  activeTab: string;
  renderTabs: () => void;
  onCardMouseLeave: () => void;
  onShowMoreClick: () => void;
  onPlayButtonClick: () => void;
}
