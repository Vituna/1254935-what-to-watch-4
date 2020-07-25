import * as React from "react";

import {FullScreenVideoPlayerProps} from "./types";
import {сlockCalculations, сalculatingMinutes, сalculatingSeconds} from "../../consts";

const formatTime = (time) => {
  const hours = сlockCalculations(time);
  const minutes = сalculatingMinutes(time, hours);
  const seconds = сalculatingSeconds(time);

  return `${hours}:${minutes}:${seconds}`;
};

const FullScreenVideoPlayer: React.FunctionComponent<FullScreenVideoPlayerProps> = (props: FullScreenVideoPlayerProps) => {
  const {isPlay, timeElapsed, currentProgress, onPlayPauseButtonClick, onFullScreenClick, onPlayerExitClick, children} = props;

  return (
    <div className="player">
      {children}

      <button onClick={onPlayerExitClick} type="button" className="player__exit">Exit</button>

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
            onClick={onPlayPauseButtonClick}
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
            onClick={onFullScreenClick}
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
