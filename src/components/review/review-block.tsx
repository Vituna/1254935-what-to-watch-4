import * as React from "react";

import {ReviewProps} from "./types";
import {formatDate} from "../../consts";

const ReviewBlock: React.FC<ReviewProps> = (props: ReviewProps) => {
  const {comment} = props;

  return (
    <div className="review" key={comment.id}>
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={comment.date}>{formatDate(new Date(comment.date))}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{comment.rating}</div>
    </div>
  );
};

export default ReviewBlock;
