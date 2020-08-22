import * as React from "react";

import {VideoPlayerProps, VideoPlayerState} from "./types";

class VideoPlayer extends React.PureComponent<VideoPlayerProps, VideoPlayerState> {
  private _videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props: Readonly<VideoPlayerProps>) {
    super(props);

    this.state = {
      isPlaying: props.isPlaying
    };

    this._videoRef = React.createRef();
  }

  public componentDidUpdate(): void {
    const video = this._videoRef.current;

    if (video) {
      if (this.props.isPlaying) {
        video.play();
      } else {
        video.load();
      }
    }
  }

  private _handlePlay(): void {
    this.setState({
      isPlaying: true,
    });
  }

  private _handlePause(): void {
    this.setState({
      isPlaying: false,
    });
  }

  public componentWillUnmount(): void {
    const video = this._videoRef.current;

    if (video) {
      video.onplay = null;
      video.muted = null;
      video.src = ``;
      video.poster = ``;
    }
  }

  public componentDidMount(): void {
    const video = this._videoRef.current;
    const {src, poster, muted} = this.props;

    if (video) {
      video.onplay = () => this._handlePlay();
      video.onpause = () => this._handlePause();
    }

    if (video) {
      video.src = src;
      video.poster = poster;
      video.muted = muted;
    }
  }

  public render(): React.ReactNode {
    const {src, poster, muted} = this.props;

    return (
      <React.Fragment>
        <video
          ref={this._videoRef}
          className="player__video"
          src={src}
          poster={poster}
          muted={muted}
        />
      </React.Fragment>
    );
  }
}

export default VideoPlayer;
