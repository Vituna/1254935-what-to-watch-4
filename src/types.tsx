export interface MovieListProp {
  id: number;
  title: string;
  image: string;
  preview: string;
}

export interface MoviePageProp {
  id: number;
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
}

export interface FilmMain {
  id: number;
  title: string;
  genre: string;
  year: number;
  backgroundPoster: string;
  filmPoster: string;
  isFavorites: boolean;
}

export interface Review {
  id: number;
  user: {
    id: number;
    name: string;
  };
  rating: number;
  comment: string;
  date: string;
}
