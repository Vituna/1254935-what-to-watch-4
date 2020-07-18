export interface Move {
  title: string,
  filmCover: string,
  genre: string,
  year: number,
  movieDurationTime: string,
  bigPoster: string,
  rating: number,
  numberVotes: number,
  descriptionOne: string,
  descriptionTwo: string,
  director: string,
  starring: string,
  previewVideo: string,
 };

export interface fullMoves {
  title: string,
  filmCover: string,
  genre: string,
  year: number,
  movieDurationTime: string,
  bigPoster: string,
  rating: number,
  numberVotes: number,
  descriptionOne: string,
  descriptionTwo: string,
  director: string,
  starring: string,
  previewVideo: string,
  comments: {
    text: string,
    author: string,
    date: string,
    rating: string,
  }
};

export interface fullMove {
  title: string,
  filmCover: string,
  genre: string,
  year: number,
  movieDurationTime: string,
  bigPoster: string,
  rating: number,
  numberVotes: number,
  descriptionOne: string,
  descriptionTwo: string,
  director: string,
  starring: string,
  previewVideo: string,
  comments: [{
    text: string,
    author: string,
    date: string,
    rating: string,
  }]
};

export interface movieDetail {
    name: string,
    value: any,
};

export interface movieComments {
  text: string,
  author: string,
  date: string,
  rating: string,
};


