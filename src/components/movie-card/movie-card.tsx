import * as React from "react";

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

  _startPlaying() {
    this.setState({
      isPlaying: true
    });
  }

  _handleCardMouseEnter() {
    const {title} = this.props;
    this.props.onCardMouseEnter(title);
    this._timer = setTimeout(this._startPlaying, VIDEO_DELAY);
  }

  _handleCardMouseRemove() {
    clearTimeout(this._timer);
    this.setState({isPlaying: false});
    this.props.onCardMouseLeave();
  }

  _handleCartTitleClick(evt) {
    evt.preventDefault();
    this.props.onTitleClick(this.props.title);
  }

  _handleCardClick() {
    this.props.onCardClick(this.props.title);
  }

  render() {
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

export default MovieCard;
