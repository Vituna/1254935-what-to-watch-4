import {MovieListProp} from "../../types";

export interface MovieListProps {
  movies: MovieListProp[];
  onCardMouseEnter: () => void;
  onCardMouseLeave: () => void;
}

export interface ItMovieList {
  id: number;
  title: string;
  image: string;
  preview: string;
}
