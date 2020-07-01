import React from 'react';
import PropTypes from 'prop-types';

import Review from '../review/review.jsx';

const PageReviews = ({movieReviews}) => {

  const getReview = (review, i) => {
    return (
      <Review
        key={`${i}`}
        review={review}
      />
    );
  };

  const renderReviews = () => movieReviews.map(getReview);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {renderReviews()}
      </div>
      <div className="movie-card__reviews-col">
      </div>
    </div>
  );
};

PageReviews.propTypes = {
  movieReviews: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired
  ),
};

export default PageReviews;
