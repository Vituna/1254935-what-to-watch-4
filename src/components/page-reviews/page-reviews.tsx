import * as React from "react";
import {connect} from 'react-redux';

import {Operation as UserOperation} from "../../reducer/user/user";
import {getReviews} from "../../reducer/user/selectors";

import ReviewBlock from "../review/review-block";
import {PageReviewsProps, PageReviewsFromStore, PageReviewsFromState, PageReviewsFromDispatch} from "./types";
import {Review} from "../../types";

class PageReviews extends React.PureComponent<PageReviewsProps> {

  public componentDidMount(): void {
    this.props.getFilmReview(this.props.movie.id);
  }

  public componentDidUpdate(prevProps): void {
    if (prevProps.movie.id !== this.props.movie.id) {
      this.props.getFilmReview(this.props.movie.id);
    }
  }

  public getReview(comment: Review, i: number): React.ReactNode {
    return (
      <ReviewBlock
        key={`${i}` + `${comment.user.name}`}
        comment={comment}
      />
    );
  }

  public renderReviews(): React.ReactNodeArray {
    return this.props.reviews.map(this.getReview);
  }

  public render(): React.ReactElement {
    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {this.renderReviews().slice(0, 6)}
        </div>
        <div className="movie-card__reviews-col">
          {this.renderReviews().slice(6, Infinity)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: PageReviewsFromState): PageReviewsFromStore => ({
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch: any): PageReviewsFromDispatch => ({
  getFilmReview(id: number) {
    dispatch(UserOperation.loadReview(id));
  }
});

export {PageReviews};
export default connect(mapStateToProps, mapDispatchToProps)(PageReviews);
