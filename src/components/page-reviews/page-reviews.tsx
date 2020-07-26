import * as React from "react";

import Review from "../review/review";
import {PageReviewsProps} from "./types";
import { match } from "react-router";
import { mixed } from "utility-types/dist/utility-types";

const PageReviews: React.FC<PageReviewsProps> = (props: PageReviewsProps) => {
  const {movie} = props;

  const getReview = (review, i: number): React.ReactNode => {
    return (
      <Review
        key={`${i}` + `${review.author}`}
        review={review}
      />
    );
  };

  const renderReviews = (): Array<mixed> => movie.map(getReview);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {renderReviews().slice(0, 3)}
      </div>
      <div className="movie-card__reviews-col">
        {renderReviews().slice(3, 5)}
      </div>
    </div>
  );
};

export default PageReviews;
