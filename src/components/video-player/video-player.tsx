import * as React from "react";

interface Props {
  isPlaying: boolean;
  muted: boolean;
  src: string;
  poster: string;
}

interface State {
  isPlaying: boolean;
}

class VideoPlayer extends React.PureComponent<Props, State> {
  private videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props) {
    super(props);

    this.state = {
      isPlaying: props.isPlaying
    };

    this.videoRef = React.createRef();
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

  componentWillUnmount() {
    const video = this.videoRef.current;

    if (video) {
      video.onplay = null;
      video.muted = null;
      video.src = ``;
      video.poster = ``;
    }
  }

  componentDidMount() {
    const video = this.videoRef.current;

    if (video) {
      video.onplay = () => this._handlePlay();
      video.onpause = () => this._handlePause();
    }
  }

  render() {
    const {src, poster, muted} = this.props;

    return (
      <React.Fragment>
        <video
          ref={this.videoRef}
          className="player__video"
          src={src}
          poster={poster}
          muted={muted}
        ></video>
      </React.Fragment>
    );
  }
}

export default VideoPlayer;
