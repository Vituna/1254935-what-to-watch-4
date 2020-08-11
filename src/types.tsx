export interface MovieListProp {
  id: number;
  title: string;
  image: string;
  preview: string;
}

export interface MoviePageProp {
  title: string;
  genre: string;
  runTime: string;
  year: number;
  backgroundPoster: string;
  filmPoster: string;
  rating: number;
  ratingCount: number;
  description: string;
  director: string;
  starring: string;
}
export interface MovieDetailProp {
  title: string;
  genre: string;
  runTime: string;
  year: number;
  backgroundPoster: string;
  filmPoster: string;
  rating: number;
  ratingCount: number;
  description: string;
  director: string;
  starring: string | string[];
}

export interface Move {
  title: string;
  image: string;
  genre: string;
  year: number;
  movieDurationTime: string;
  bigPoster: string;
  rating: number;
  numberVotes: number;
  descriptionOne: string;
  descriptionTwo: string;
  director: string;
  starring: string;
  preview: string;
}

export interface FullMoves {
  id: number;
  title: string;
  filmPoster: string;
  image: string;
  backgroundPoster: string;
  backgroundColor: string;
  src: string;
  preview: string;
  description: string;
  rating: number;
  ratingCount: number;
  director: string;
  starring: string;
  runTime: string;
  genre: string;
  year: number;
  isFavoriteFilm: string;
}

export interface MovieComments {
  text: string;
  author: string;
  date: string;
  rating: string;
}

export interface FilmMain {
  title: string;
  genre: string;
  year: number;
  backgroundPoster: string;
  filmPoster: string;
}
