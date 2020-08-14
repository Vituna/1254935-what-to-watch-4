import * as React from "react";
import {Subtract} from "utility-types";

import {getCurentFilm} from "../../utils.js";
import {INTEREST} from "../../consts";
import {WithFullScreenVideoPlayerProps, WithFullScreenVideoPlayerState} from "./types";

const withFullScreenVideoPlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, WithFullScreenVideoPlayerProps>;

  class WithFullScreenVideoPlayer extends React.PureComponent<T, WithFullScreenVideoPlayerState> {
    private _videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props: Readonly<T>) {
      super(props);

      this.state = {
        isPlay: true,
        isFullscreen: false,
        timeElapsed: null,
        progress: null,
        duration: null,
      };

      this._videoRef = React.createRef();

      this._handlePlayPauseButtonClick = this._handlePlayPauseButtonClick.bind(this);
      this._handleFullScreenClick = this._handleFullScreenClick.bind(this);
    }

    public componentDidMount(): void {
      const {movies} = this.props;
      const movie = getCurentFilm(movies, this.props);
      const {backgroundPoster, src} = movie;

      const video = this._videoRef.current;

      video.poster = backgroundPoster;
      video.src = src;

      video.ontimeupdate = () => this._timeUpdate(video);
    }

    public componentWillUnmount(): void {

      const video = this._videoRef.current;
      if (video) {
        video.poster = null;
        video.src = null;
        video.ontimeupdate = null;
      }
    }

    public componentDidUpdate(): void {
      const {isPlay, isFullscreen} = this.state;
      const video = this._videoRef.current;

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

      const {isPlay} = this.state;

      this.setState({
        isPlay: !isPlay
      });
    }

    private _handleFullScreenClick(): void {
      const {isFullscreen} = this.state;

      this.setState({
        isFullscreen: !isFullscreen
      });
    }

    public render(): React.ReactNode {
      return (<Component
        {...this.props}
        isPlay={this.state.isPlay}
        timeElapsed={this.state.timeElapsed}
        currentProgress={Math.floor(this.state.progress * INTEREST / this.state.duration).toString()}
        onPlayPauseButtonClick={this._handlePlayPauseButtonClick}
        onFullScreenClick={this._handleFullScreenClick}
      >
        <video
          ref={this._videoRef}
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
