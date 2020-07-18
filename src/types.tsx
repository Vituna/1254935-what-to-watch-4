export interface Move {
  title: string;
  filmCover: string;
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
  previewVideo: string;
}

export interface FullMoves {
  title: string;
  filmCover: string;
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
  previewVideo: string;
  comments: {
    text: string;
    author: string;
    date: string;
    rating: string;
  };
}

export interface FullMove {
  title: string;
  filmCover: string;
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
  previewVideo: string;
  comments: [{
    text: string;
    author: string;
    date: string;
    rating: string;
  }];
}

export interface MovieDetail {
    name: string;
    value: any;
}

export interface MovieComments {
  text: string;
  author: string;
  date: string;
  rating: string;
}


