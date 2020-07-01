import React, {PureComponent, Fragment, createRef} from "react";
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: props.isPlaying
    };

    this._videoRef = createRef();
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (video) {
      if (this.props.isPlaying) {
        video.play();
      } else {
        video.load();
      }
    }
  }

  _handlePlay() {
    this.setState({
      isPlaying: true,
    });
  }

  _handlePause() {
    this.setState({
      isPlaying: false,
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    if (video) {
      video.onplay = null;
      video.muted = null;
      video.src = ``;
      video.poster = ``;
    }
  }

  componentDidMount() {
    const video = this._videoRef.current;

    if (video) {
      video.onplay = () => this._handlePlay();
      video.onpause = () => this._handlePause();
    }
  }

  render() {
    const {src, poster, muted} = this.props;

    return (
      <Fragment>
        <video
          ref={this._videoRef}
          className="player__video"
          src={src}
          poster={poster}
          muted={muted}
        ></video>
      </Fragment>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  isPlaying: PropTypes.bool,
  muted: PropTypes.bool,
};

export default VideoPlayer;
