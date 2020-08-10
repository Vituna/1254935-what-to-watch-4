import * as React from "react";
import {connect} from 'react-redux';
import {mixed} from "utility-types/dist/utility-types";

import {getComments} from "../../reducer/data/selectors";

import Review from "../review/review";
import {PageReviewsProps, PageReviewsFromStore, PageReviewsFromState} from "./types";
import {MovieComments} from "../../types";

const PageReviews: React.FC<PageReviewsProps> = (props: PageReviewsProps) => {
  const {comments} = props;

  const getReview = (review: MovieComments, i: number): React.ReactNode => {
    return (
      <Review
        key={`${i}` + `${review.author}`}
        review={review}
      />
    );
  };

  const renderReviews = (): Array<mixed> => comments.map(getReview);

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

const mapStateToProps = (state: PageReviewsFromState): PageReviewsFromStore => ({
  comments: getComments(state),
});

export {PageReviews};
export default connect(mapStateToProps)(PageReviews);
