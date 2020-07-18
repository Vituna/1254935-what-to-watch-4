import * as React from "react";

import {MovieComments} from "../../types";

interface Props {
  review: MovieComments;
}

const Review: React.FunctionComponent<Props> = (props: Props) => {
  const {review} = props;
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
