import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import VideoPlayer from '../video-player/video-player';
import {VIDEO_DELAY} from "../../consts";

class MovieCard extends PureComponent {
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
    this.props.onCardMouseEnter(this.props.title);
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

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  filmCover: PropTypes.string.isRequired,
  previewVideo: PropTypes.string.isRequired,
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func,
  onTitleClick: PropTypes.func,
  onCardClick: PropTypes.func,
};

export default MovieCard;
