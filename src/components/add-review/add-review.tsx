import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {Operation as UserOperation, ActionCreator as UserActionCreator} from "../../reducer/user/user";
import {getFilmsByGenre} from "../../reducer/state/selectors";
import {getShowSendError, getOnReviewSuccess, getIsSent} from "../../reducer/user/selectors";

import {getCurentFilm, history} from "../../utils";
import {LengthReview} from "../../consts";
import {AddReviewProps, AddReviewDispatchFromStore, AddReviewFromState, AddReviewStateFromStore} from "./types";

class AddReview extends React.PureComponent<AddReviewProps> {
  private reviewRef: React.RefObject<HTMLTextAreaElement>;
  private formRef: React.RefObject<HTMLFormElement>;

  constructor(props: Readonly<AddReviewProps>) {
    super(props);

    this.reviewRef = React.createRef();
    this.formRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public componentDidUpdate(): void {
    const {onReviewSuccess} = this.props;
    const {id} = getCurentFilm(this.props.movies, this.props);

    if (onReviewSuccess) {
      history.push(`/films/${id}`);
    }
  }

  public componentWillUnmount(): void {
    this.props.onClosingReview();
  }

  public handleSubmit(evt): void {
    const {sendReview} = this.props;
    const {id} = getCurentFilm(this.props.movies, this.props);

    evt.preventDefault();

    sendReview(id, {
      rating: this.formRef.current.rating.value,
      comment: this.reviewRef.current.value,
    });
  }

  public render(): React.ReactNode {
    const {movies, showSendError, isSent} = this.props;
    const film = getCurentFilm(movies, this.props);
    const {title, backgroundPoster, filmPoster, id} = film;

    const getErrorMessage = (): React.ReactElement => {
      return showSendError ? (
        <p style={{color: `red`, textAlign: `center`}}>Sending error. Please, try again.</p>
      ) : null;
    };

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img
              src={filmPoster}
              alt={title}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to={`/`} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${id}`} className="breadcrumbs__link">
                    {title}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <Link
                to={`/mylist`}
                className="user-block__avatar"
                style={{
                  display: `block`,
                }}>
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </Link>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img
              src={backgroundPoster}
              alt={title}
              width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form
            ref={this.formRef}
            onSubmit={this.handleSubmit}
            action="#"
            className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                <input disabled={isSent} className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input disabled={isSent} className="rating__input" id="star-2" type="radio" name="rating" value="2" />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input disabled={isSent} className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input disabled={isSent} className="rating__input" id="star-4" type="radio" name="rating" value="4" />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input disabled={isSent} className="rating__input" id="star-5" type="radio" name="rating" value="5" />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
              <p style={{color: `red`, textAlign: `center`}}>{getErrorMessage()}</p>
            </div>

            <div className="add-review__text">
              <textarea
                ref={this.reviewRef}
                disabled={isSent}
                required
                minLength={LengthReview.MIN}
                maxLength={LengthReview.MAX}
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" disabled={isSent}>Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}

const mapStateToProps = (state: AddReviewFromState): AddReviewStateFromStore => ({
  movies: getFilmsByGenre(state),
  showSendError: getShowSendError(state),
  onReviewSuccess: getOnReviewSuccess(state),
  isSent: getIsSent(state),

});

const mapDispatchToProps = (dispatch: any): AddReviewDispatchFromStore => ({
  sendReview(id, reviewData) {
    dispatch(UserOperation.sendReview(id, reviewData));
  },

  onClosingReview() {
    dispatch(UserActionCreator.setShowSendError(false));
    dispatch(UserActionCreator.sendReview(false));
  },

});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
