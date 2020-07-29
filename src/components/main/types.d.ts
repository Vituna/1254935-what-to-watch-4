import {Move} from "../../types";

interface MainFromStore {
  movies: Move[];
  filmsLength: number;
}

interface MainDispatchFromStore {
  onShowMoreClick: () => void;
  onPlayButtonClick: () => void;
}

export type MainProps = MainFromStore & MainDispatchFromStore

export interface MainFromState {
  movies: Move[];
  filmsLength: number;
}
