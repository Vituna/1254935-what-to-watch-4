import * as React from "react";
import {connect} from 'react-redux';
import {mixed} from "utility-types/dist/utility-types";

import {getReviews} from "../../reducer/user/selectors";

import ReviewBlock from "../review/review-block";
import {PageReviewsProps, PageReviewsFromStore, PageReviewsFromState} from "./types";
import {Review} from "../../types";

const PageReviews: React.FC<PageReviewsProps> = (props: PageReviewsProps) => {
  const {reviews} = props;

  const getReview = (comment: Review, i: number): React.ReactNode => {
    return (
      <ReviewBlock
        key={`${i}` + `${comment.user.name}`}
        comment={comment}
      />
    );
  };

  const renderReviews = (): Array<mixed> => reviews.map(getReview);

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
  reviews: getReviews(state),
});

export {PageReviews};
export default connect(mapStateToProps)(PageReviews);
