import React from 'react';
import PropTypes from 'prop-types';

const Review = ({review}) => {
  const {author, date, rating, text} = review;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>
        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={date}>{date}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string,
    rating: PropTypes.string.number,
    text: PropTypes.string.isRequired,
  }),
};

export default Review;
