import {Move} from "../../types";

export interface MovieListFromProps {
  movies: Move[];
  onCardMouseEnter: () => void;
  onCardMouseLeave: () => void;
}

export interface ItMovieList {
  title: string;
  filmCover: string;
  previewVideo: string;

}
