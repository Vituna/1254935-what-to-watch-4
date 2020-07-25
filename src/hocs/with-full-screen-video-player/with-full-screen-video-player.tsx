import * as React from "react";
import {Subtract} from "utility-types";

import {WithFullScreenVideoPlayerProps, WithFullScreenVideoPlayerState} from "./types";

const withFullScreenVideoPlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = WithFullScreenVideoPlayerProps & Subtract<P, {}>;

  class WithFullScreenVideoPlayer extends React.PureComponent<T, WithFullScreenVideoPlayerState> {
    private videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props) {
      super(props);

      this.state = {
        isPlay: true,
        isFullscreen: false,
        timeElapsed: null,
        progress: null,
        duration: null,
      };

      this.videoRef = React.createRef();

      this.handlePlayPauseButtonClick = this.handlePlayPauseButtonClick.bind(this);
      this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
    }

    private timeUpdare(video) {
      this.setState({
        timeElapsed: Math.floor(video.duration - video.currentTime),
        progress: Math.floor(video.currentTime),
        duration: Math.floor(video.duration),
      });
    }

    public componentDidMount() {
      const {preview} = this.props;
      const video = this.videoRef.current;

      video.src = preview;

      video.ontimeupdate = () => this.timeUpdare(video);
    }

    public componentWillUnmount() {

      const video = this.videoRef.current;
      if (video) {
        video.poster = null;
        video.src = null;
        video.ontimeupdate = null;
      }
    }

    public componentDidUpdate() {
      const {isPlay, isFullscreen} = this.state;
      const video = this.videoRef.current;

      if (video) {
        if (isPlay) {
          video.play();
        } else {
          video.pause();
        }

        if (isFullscreen) {
          video.requestFullscreen();
        }

        if (isFullscreen) {
          this.setState({
            isFullscreen: false,
          });
        }
      }
    }

    private handlePlayPauseButtonClick() {
      const {isPlay} = this.state;

      this.setState({
        isPlay: !isPlay
      });
    }

    private handleFullScreenClick() {
      const {isFullscreen} = this.state;

      this.setState({
        isFullscreen: !isFullscreen
      });
    }

    public render() {
      const {onPlayerExitClick} = this.props;

      return (<Component
        {...this.props}
        isPlay={this.state.isPlay}
        timeElapsed={this.state.timeElapsed}
        currentProgress={Math.floor(this.state.progress * 100 / this.state.duration).toString()}
        onPlayPauseButtonClick={this.handlePlayPauseButtonClick}
        onFullScreenClick={this.handleFullScreenClick}
        onPlayerExitClick={onPlayerExitClick}
      >
        <video
          ref={this.videoRef}
          autoPlay={true}
          className="player__video"
        />
      </Component>
      );
    }
  }

  return WithFullScreenVideoPlayer;
};

export default withFullScreenVideoPlayer;
