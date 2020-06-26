import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import VideoPlayer from '../video-player/video-player.jsx';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this.timer = null;
  }

  _handleCardMouseEnter(movieSetting) {
    this.props.onCardMouseEnter(movieSetting);

    this.timer = setTimeout(() => {
      this.setState({isPlaying: true});
    }, 1000);
  }

  _handleCardMouseRemove() {
    clearTimeout(this.timer);
    this.setState({isPlaying: false});
  }

  render() {
    const {movieSetting} = this.props;
    const {name, image, previewVideo} = movieSetting;

    const cardMouseEnter = () => this._handleCardMouseEnter(movieSetting);
    const cardMouseRemove = () => this._handleCardMouseRemove();

    const handleCardTitleClick = (evt) => {
      evt.preventDefault();
      this.props.onTitleClick(movieSetting);
    };

    const handleCardClick = () => {
      this.props.onCardClick(movieSetting);
    };

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={cardMouseEnter}
        onMouseLeave={cardMouseRemove}
      >
        <div className="small-movie-card__image" onClick={handleCardClick}>
          <VideoPlayer
            src={previewVideo}
            poster={image}
            isMuted={true}
            isPlaying={this.state.isPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html"
            onClick={handleCardTitleClick}
          >{name}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movieSetting: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    previewVideo: PropTypes.string,
  }).isRequired,
  onCardMouseEnter: PropTypes.func,
  onTitleClick: PropTypes.func,
  onCardClick: PropTypes.func,
};

export default MovieCard;
