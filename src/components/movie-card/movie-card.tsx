import * as React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer";

import VideoPlayer from "../video-player/video-player";
import {VIDEO_DELAY} from "../../consts";
import {MovieCardProps, MovieCardState} from "./types";

class MovieCard extends React.PureComponent<MovieCardProps, MovieCardState> {
  _timer: any;
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._timer = null;
    this._handleCartTitleClick = this._handleCartTitleClick.bind(this);
    this._handleCardClick = this._handleCardClick.bind(this);
    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseRemove = this._handleCardMouseRemove.bind(this);
    this._startPlaying = this._startPlaying.bind(this);
  }

  _startPlaying(): void {
    this.setState({
      isPlaying: true
    });
  }

  _handleCardMouseEnter(): void {
    const {title} = this.props;
    this.props.onCardMouseEnter(title);
    this._timer = setTimeout(this._startPlaying, VIDEO_DELAY);
  }

  _handleCardMouseRemove(): void {
    clearTimeout(this._timer);
    this.setState({isPlaying: false});
    this.props.onCardMouseLeave();
  }

  _handleCartTitleClick(evt: { preventDefault: () => void }) {
    evt.preventDefault();
    this.props.onFilmTitleClick(this.props.title);
  }

  _handleCardClick(): void {
    this.props.onFilmTitleClick(this.props.title);
  }

  render(): React.ReactNode {
    const {title, filmCover, previewVideo} = this.props;
    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleCardMouseEnter}
        onMouseLeave={this._handleCardMouseRemove}
      >
        <div className="small-movie-card__image" onClick={this._handleCardClick}>
          <VideoPlayer
            src={previewVideo}
            poster={filmCover}
            muted={true}
            isPlaying={this.state.isPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html"
            onClick={this._handleCartTitleClick}
          >{title}</a>
        </h3>
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onFilmTitleClick(filmTitle) {
    dispatch(ActionCreator.changeActiveFilm(filmTitle));
  },
});

export {MovieCard};
export default connect(null, mapDispatchToProps)(MovieCard);
