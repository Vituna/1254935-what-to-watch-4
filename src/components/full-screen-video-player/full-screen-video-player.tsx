import * as React from "react";

import {history} from "../../utils";
import {calculateTime, calculateTimeMinutes, calculateTimeSeconds} from "../../consts";
import {FullScreenVideoPlayerProps} from "./types";

const getFormatTime = (time: number): string => {
  const hours = calculateTime(time);
  const minutes = calculateTimeMinutes(time, hours);
  const seconds = calculateTimeSeconds(time);

  return `${hours}:${minutes}:${seconds}`;
};

const FullScreenVideoPlayer: React.FC<FullScreenVideoPlayerProps> = (props: FullScreenVideoPlayerProps) => {
  const {isPlay,
    timeElapsed,
    currentProgress,
    onPlayPauseButtonClick,
    onFullScreenClick,
    children} = props;

  const insertsIsPlay =
      isPlay ? (
        <>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"/>
          </svg>
          <span>Pause</span>
        </>
      ) : (
        <>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
            </svg>
          <span>Play</span>
        </>
      )
  ;

  return (
    <div className="player">
      {children}

      <button onClick={history.goBack}
        type="button" className="player__exit">Exit</button>

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
            {getFormatTime(timeElapsed)}
          </div>
        </div>

        <div className="player__controls-row">
          <button
            onClick={onPlayPauseButtonClick}
            type="button"
            className="player__play">
            {insertsIsPlay}
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
