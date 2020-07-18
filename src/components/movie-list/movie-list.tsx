import * as React from "react";

import MovieCard from "../movie-card/movie-card";
import {Move} from "../../types"

interface Props {
  movies: Move[];
  onTitleClick: () => void;
  onCardClick: () => void;
  onCardMouseEnter: () => void;
  onCardMouseLeave: () => void;
  onShowMoreClick: () => void;
}

const MovieList: React.FunctionComponent<Props> = ({movies, onTitleClick, onCardClick, onCardMouseEnter, onCardMouseLeave}) => {

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
