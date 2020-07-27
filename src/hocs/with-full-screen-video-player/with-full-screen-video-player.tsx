import * as React from "react";
import {Subtract} from "utility-types";

import {INTEREST} from "../../consts";
import {WithFullScreenVideoPlayerProps, WithFullScreenVideoPlayerState} from "./types";

const withFullScreenVideoPlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = WithFullScreenVideoPlayerProps & Subtract<P, {}>;

  class WithFullScreenVideoPlayer extends React.PureComponent<T, WithFullScreenVideoPlayerState> {
    private videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props: Readonly<T>) {
      super(props);

      this.state = {
        isPlay: true,
        isFullscreen: false,
        timeElapsed: null,
        progress: null,
        duration: null,
      };

      this.videoRef = React.createRef();

      this._handlePlayPauseButtonClick = this._handlePlayPauseButtonClick.bind(this);
      this._handleFullScreenClick = this._handleFullScreenClick.bind(this);
    }

    public componentDidMount(): void {
      const {preview} = this.props;
      const video = this.videoRef.current;

      video.src = preview;

      video.ontimeupdate = () => this._timeUpdate(video);
    }

    public componentWillUnmount(): void {

      const video = this.videoRef.current;
      if (video) {
        video.poster = null;
        video.src = null;
        video.ontimeupdate = null;
      }
    }

    public componentDidUpdate(): void {
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

    private _timeUpdate(video: HTMLVideoElement): void {
      this.setState({
        timeElapsed: Math.floor(video.duration - video.currentTime),
        progress: Math.floor(video.currentTime),
        duration: Math.floor(video.duration),
      });
    }

    private _handlePlayPauseButtonClick(): void {
      // const {isPlay} = this.state;

      // this.setState({
      //   isPlay: !isPlay
      // });

      this.setState((prevState) => {
        return {
          isPlay: !prevState.isPlay,
          duration: prevState.duration,
          progress: prevState.progress,
        };
      });
    }

    private _handleFullScreenClick(): void {
      const {isFullscreen} = this.state;

      this.setState({
        isFullscreen: !isFullscreen
      });
    }

    public render(): React.ReactNode {
      const {onPlayerExitClick} = this.props;

      return (<Component
        {...this.props}
        isPlay={this.state.isPlay}
        timeElapsed={this.state.timeElapsed}
        currentProgress={Math.floor(this.state.progress * INTEREST / this.state.duration).toString()}
        onPlayPauseButtonClick={this._handlePlayPauseButtonClick}
        onFullScreenClick={this._handleFullScreenClick}
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
