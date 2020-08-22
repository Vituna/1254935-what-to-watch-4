import * as React from "react";

import MovieCard from "../movie-card/movie-card";
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import {MovieListProps, ItMovieList} from "./types";

const MovieCardWrapper = withVideoPlayer(MovieCard);

const MovieList: React.FC<MovieListProps> = (props: MovieListProps) => {
  const {movies, onCardMouseEnter, onCardMouseLeave} = props;

  const getMovie = (it: ItMovieList, i: React.ReactText): React.ReactElement => {
    return (
      <React.Fragment key={`${it.title + i}`}>
        <MovieCardWrapper
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

  const renderMovies = movies.map(getMovie);

  return (
    <>
      {renderMovies}
    </>
  );
};

export default MovieList;
