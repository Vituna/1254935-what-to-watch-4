import * as React from "react";

import {FullScreenVideoPlayerProps} from "./types";

const formatTime = (time) => {
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor(time / 60) - (hours * 60);
  const seconds = time % 60;

  return `${hours}:${minutes}:${seconds}`;
};

const FullScreenVideoPlayer: React.FunctionComponent<FullScreenVideoPlayerProps> = (props: FullScreenVideoPlayerProps) => {
  const {isPlay, timeElapsed, currentProgress, onPlayPauseButtonClick, onFullScreenClick, onPlayerExitClick, children} = props;

  const handlePlayerExitClick = () => {
    onPlayerExitClick();
  };

  const handlePlayPauseButtonClick = () => {
    onPlayPauseButtonClick();
  };

  const handleFullScreenClick = () => {
    onFullScreenClick();
  };

  return (
    <div className="player">
      {children}

      <button onClick={handlePlayerExitClick} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={currentProgress}
              max="100">
            </progress>
            <div className="player__toggler"
              style={{left: currentProgress + `%`}}
            >Toggler</div>
          </div>
          <div className="player__time-value">
            {formatTime(timeElapsed)}
          </div>
        </div>

        <div className="player__controls-row">
          <button
            onClick={handlePlayPauseButtonClick}
            type="button"
            className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use
                xlinkHref={isPlay ? `#pause` : `#play-s`}>
              </use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button
            onClick={handleFullScreenClick}
            type="button"
            className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullScreenVideoPlayer;
