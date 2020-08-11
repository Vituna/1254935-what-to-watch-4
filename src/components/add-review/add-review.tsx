import * as React from "react";

import {AddReviewProps} from "./types";

class AddReview extends React.PureComponent<AddReviewProps> {
  private reviewRef: React.RefObject<HTMLTextAreaElement>;
  private formRef: React.RefObject<HTMLFormElement>;

  constructor(props: Readonly<AddReviewProps>) {
    super(props);

    this.reviewRef = React.createRef();
    this.formRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(): React.ReactNode {
    return (evt: React.MouseEvent) => {
      evt.preventDefault();

      this.props.onSubmitReview({
        rating: this.formRef.current.rating.value,
        comment: this.reviewRef.current.value,
      });
    };
  }

  private _addShowSendError(): React.ReactNode {
    const {showSendError} = this.props;
    return (
      showSendError
        ? (<div
          style={{
            color: `red`,
          }}
          className="rating__stars">
            You have broken the most reliable application in the world! They are coming for you!
        </div>)
        : null
    );
  }

  public render(): React.ReactNode {

    const {title, backgroundPoster, filmPoster} = this.props;

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
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">
                    {title}
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
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
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
              {this._addShowSendError()}
            </div>

            <div className="add-review__text">
              <textarea
                ref={this.reviewRef}
                required
                minLength={50}
                maxLength={400}
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}

export default AddReview;
