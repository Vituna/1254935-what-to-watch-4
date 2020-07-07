import React from 'react';
import PropTypes from 'prop-types';

import Review from '../review/review.jsx';

const PageReviews = ({movie}) => {
  const {comments} = movie;

  const getReview = (review, i) => {
    return (
      <Review
        key={`${i}` + `${review}`}
        review={review}
      />
    );
  };

  const renderReviews = () => comments.map(getReview);

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
  movie: PropTypes.shape({
    comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }),
};

export default PageReviews;
