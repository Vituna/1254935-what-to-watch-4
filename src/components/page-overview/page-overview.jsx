import React from 'react';
import PropTypes from 'prop-types';


const PageOverview = ({rating, numberVotes, descriptionOne, descriptionTwo, director, starring}) => {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{numberVotes} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{descriptionOne}</p>
        <p>{descriptionTwo}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </>
  );
};

PageOverview.propTypes = {
  rating: PropTypes.number.isRequired,
  numberVotes: PropTypes.number.isRequired,
  descriptionOne: PropTypes.string.isRequired,
  descriptionTwo: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.string.isRequired,
};

export default PageOverview;
