import * as React from "react";

import Review from "../review/review";
import {MovieComments} from "../../types";

interface Props {
  movie: MovieComments[];
}

const PageReviews: React.FunctionComponent<Props> = (props: Props) => {
  const {movie} = props;

  const getReview = (review, i) => {
    return (
      <Review
        key={`${i}` + `${review.author}`}
        review={review}
      />
    );
  };

  const renderReviews = () => movie.map(getReview);

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
