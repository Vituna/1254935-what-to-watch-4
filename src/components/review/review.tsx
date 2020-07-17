import * as React from "react";

interface Props {
  review: {
    author: string,
    date: string,
    rating: number,
    text: string,
  },
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
