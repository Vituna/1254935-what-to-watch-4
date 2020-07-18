import * as React from "react";

import {movieComments} from "../../types";

interface Props {
  review: movieComments;
};

const Review: React.FunctionComponent<Props> = ({review}) => {
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

export default Review;
