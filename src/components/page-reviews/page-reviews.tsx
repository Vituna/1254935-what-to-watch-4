import * as React from "react";

import Review from "../review/review";
import {movieComments} from "../../types"

interface Props {
  movie: movieComments[],
};

const PageReviews: React.FunctionComponent<Props> = ({movie}) => {

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
