import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card.jsx';

const MovieList = ({movies, onTitleClick, onCardClick, onCardMouseEnter, onCardMouseLeave}) => {

  const getMovie = (it, i) => {
    return (
      <MovieCard
        key={`${i}`}
        title={it.title}
        filmCover={it.filmCover}
        previewVideo={it.previewVideo}
        onTitleClick={onTitleClick}
        onCardClick={onCardClick}
        onCardMouseEnter={onCardMouseEnter}
        onCardMouseLeave={onCardMouseLeave}
      />
    );
  };

  const renderMovies = () => movies.map(getMovie);

  return (
    renderMovies()
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onTitleClick: PropTypes.func,
  onCardClick: PropTypes.func,
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func,
  title: PropTypes.any,
};

export default MovieList;
