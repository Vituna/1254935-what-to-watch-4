import React, {PureComponent, Fragment, createRef} from "react";
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: props.isPlaying
    };

    this.videoRef = createRef();
  }

  componentDidUpdate() {
    const video = this.videoRef.current;

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

  componentDidMount() {
    const video = this.videoRef.current;

    if (video) {
      video.onplay = () => this._handlePlay();
      video.onpause = () => this._handlePause();
    }
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

  render() {
    const {src, poster, isMuted} = this.props;
    return (
      <Fragment>
        <video
          className="player__video"
          src={src}
          poster={poster}
          muted={isMuted}
          ref={this.videoRef}
        ></video>
      </Fragment>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  isPlaying: PropTypes.bool,
  isMuted: PropTypes.bool,
};

export default VideoPlayer;
