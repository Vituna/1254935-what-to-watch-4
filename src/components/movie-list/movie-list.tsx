import * as React from "react";

import MovieCard from "../movie-card/movie-card";
import {MovieListProps, ItMovieList} from "./types";

const MovieList: React.FC<MovieListProps> = (props: MovieListProps) => {
  const {movies, onCardMouseEnter, onCardMouseLeave} = props;

  const getMovie = (it: ItMovieList, i: React.ReactText): React.ReactElement => {
    return (
      <React.Fragment key={`${it.title + i}`}>
        <MovieCard
          id={it.id}
          title={it.title}
          filmCover={it.image}
          previewVideo={it.preview}
          onCardMouseEnter={onCardMouseEnter}
          onCardMouseLeave={onCardMouseLeave}
        />
      </React.Fragment>
    );
  };

  const renderMovies = () => movies.map(getMovie);

  return (
    <>
      {renderMovies()}
    </>
  );
};

export default MovieList;
