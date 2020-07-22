import * as React from "react";

import MovieCard from "../movie-card/movie-card";
import {MovieListProps} from "./types";

const MovieList: React.FunctionComponent<MovieListProps> = (props: MovieListProps) => {
  const {movies, onTitleClick, onCardClick, onCardMouseEnter, onCardMouseLeave} = props;

  const getMovie = (it, i) => {
    return (
      <React.Fragment key={`${it.title + i}`}>
        <MovieCard
          title={it.title}
          filmCover={it.filmCover}
          previewVideo={it.previewVideo}
          onTitleClick={onTitleClick}
          onCardClick={onCardClick}
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
