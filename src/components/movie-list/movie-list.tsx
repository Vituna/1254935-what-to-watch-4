import * as React from "react";

import MovieCard from "../movie-card/movie-card";
import {MovieListProps, ItMovieList} from "./types";

const MovieList: React.FC<MovieListProps> = (props: MovieListProps) => {
  const {movies, onCardMouseEnter, onCardMouseLeave} = props;

  const getMovie = (it: ItMovieList, i: React.ReactText): React.ReactNode => {
    return (
      <React.Fragment key={`${it.title + i}`}>
        <MovieCard
          title={it.title}
          filmCover={it.filmCover}
          previewVideo={it.previewVideo}
          onCardMouseEnter={onCardMouseEnter}
          onCardMouseLeave={onCardMouseLeave}
        />
      </React.Fragment>
    );
  };

  const renderMovies = (): React.ReactNode => movies.map(getMovie);

  return (
    <>
      {renderMovies()}
    </>
  );
};

export default MovieList;
