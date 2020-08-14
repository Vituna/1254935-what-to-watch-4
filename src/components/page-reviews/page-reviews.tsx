import * as React from "react";
import {connect} from 'react-redux';

import {Operation as UserOperation} from "../../reducer/user/user";
import {getReviews} from "../../reducer/user/selectors";

import ReviewBlock from "../review/review-block";
import {PageReviewsProps, PageReviewsFromStore, PageReviewsFromState, PageReviewsFromDispatch} from "./types";
import {Review} from "../../types";

class PageReviews extends React.PureComponent<PageReviewsProps> {

  public componentDidMount(): void {
    const {movie, getFilmReview} = this.props;
    getFilmReview(movie.id);
  }

  public componentDidUpdate(prevProps): void {
    const {getFilmReview, movie} = this.props;

    if (prevProps.movie.id !== movie.id) {
      getFilmReview(movie.id);
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
    const {reviews} = this.props;
    return reviews.map(this.getReview);
  }

  public render(): React.ReactElement {
    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {this.renderReviews().slice(0, 3)}
        </div>
        <div className="movie-card__reviews-col">
          {this.renderReviews().slice(3, 5)}
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
